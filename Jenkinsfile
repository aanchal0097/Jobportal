pipeline{
    agent any 
    stages{
        stage('Build Docker Image'){
            steps{
                sh 'docker build -t sharmaanchal01/jobportal:latest .'        
            }
        }
        stage('Push Docker Iamge'){
            steps{
                sh 'docker push sharmaanchal01/jobportal:latest'
            }
        }
    }
}