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

        sstage('Deploy to Kubernetes') {
    steps {
        withCredentials([string(credentialsId: 'kubeconfig', variable: 'KUBECONFIG_CONTENT')]) {
            sh '''
                
                echo "$KUBECONFIG_CONTENT" > kubeconfig.yaml
                export KUBECONFIG=kubeconfig.yaml
            
                kubectl config use-context docker-desktop
                kubectl apply -f K8S/configmap.yaml
                kubectl apply -f K8S/deployment.yaml
                kubectl apply -f K8S/service.yaml
            '''
        }
    }
}