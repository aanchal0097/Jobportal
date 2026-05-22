pipeline {
    agent any

    tools {
        nodejs 'nodejs'
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

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t sharmaanchal01/jobportal:latest .'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {

                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push sharmaanchal01/jobportal:latest'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {

                withCredentials([file(
                    credentialsId: 'kubeconfig',
                    variable: 'KUBECONFIG'
                )]) {

                    sh '''
                        export KUBECONFIG=$KUBECONFIG

                        kubectl apply -f K8S/configmap.yaml
                        kubectl apply -f K8S/deployment.yaml
                        kubectl apply -f K8S/service.yaml

                        kubectl get pods
                        kubectl get svc
                    '''
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up local Docker images...'

            sh '''
                docker rmi sharmaanchal01/jobportal:latest || true
                docker logout || true
            '''
        }

        success {
            echo "Build #${BUILD_NUMBER} completed successfully!"
        }

        failure {
            echo " Build #${BUILD_NUMBER} failed. Check logs above."
        }
    }
}