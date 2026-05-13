pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/aanchal0097/Jobportal.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t sharmaanchal01/jobportal:latest .'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push sharmaanchal01/jobportal:latest'
            }
        }
    }
}