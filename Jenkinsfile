pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "sharmaanchal01/jobportal"
        DOCKER_TAG = "${BUILD_NUMBER}"
        DOCKER_CREDENTIALS_ID = "docker-hub-credentials"
        KUBECONFIG_CREDENTIALS_ID = "kubeconfig-credentials"
        CONTAINER_REGISTRY = "docker.io"
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'npm test -- --passWithNoTests || true'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image: ${DOCKER_IMAGE}:${DOCKER_TAG}"
                sh """
                    docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
                    docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest
                """
            }
        }

        stage('Push Docker Image') {
            steps {
                echo 'Pushing image to Docker Hub...'
                withCredentials([usernamePassword(
                    credentialsId: "${DOCKER_CREDENTIALS_ID}",
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh """
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                        docker push ${DOCKER_IMAGE}:latest
                    """
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo 'Deploying to Kubernetes...'
                withCredentials([file(
                    credentialsId: "${KUBECONFIG_CREDENTIALS_ID}",
                    variable: 'KUBECONFIG'
                )]) {
                    sh """
                        # Apply ConfigMap
                        kubectl apply -f k8s/configmap.yaml

                        # Apply Service
                        kubectl apply -f k8s/service.yaml

                        # Apply Deployment
                        kubectl apply -f k8s/deployment.yaml

                        # Update image to current build tag
                        kubectl set image deployment/jobportal-deployment \
                            jobportal-container=${DOCKER_IMAGE}:${DOCKER_TAG}

                        # Wait for rollout to complete
                        kubectl rollout status deployment/jobportal-deployment --timeout=120s
                    """
                }
            }
        }

        stage('Verify Deployment') {
            steps {
                echo 'Verifying deployment...'
                withCredentials([file(
                    credentialsId: "${KUBECONFIG_CREDENTIALS_ID}",
                    variable: 'KUBECONFIG'
                )]) {
                    sh """
                        echo "---- Pods Status ----"
                        kubectl get pods -l app=jobportal

                        echo "---- Service Info ----"
                        kubectl get svc jobportal-service

                        echo "---- Deployment Info ----"
                        kubectl get deployment jobportal-deployment
                    """
                }
            }
        }
    }

    post {
        success {
            echo "✅ Build #${BUILD_NUMBER} deployed successfully!"
            echo "Image pushed: ${DOCKER_IMAGE}:${DOCKER_TAG}"
        }
        failure {
            echo "❌ Build #${BUILD_NUMBER} failed. Check logs above."
        }
        always {
            echo 'Cleaning up local Docker images...'
            sh """
                docker rmi ${DOCKER_IMAGE}:${DOCKER_TAG} || true
                docker rmi ${DOCKER_IMAGE}:latest || true
                docker logout || true
            """
        }
    }
}