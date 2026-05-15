pipeline {
    agent any

    stages {

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
                withCredentials([fileVariable: 'KUBECONFIG', credentialsId: 'kubeconfig']) {
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
}