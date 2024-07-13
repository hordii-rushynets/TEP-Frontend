pipeline {
    agent any

    environment {
        EC2_HOST = credentials('host')
    }

    stages {
        stage('Deploy on EC2') {
            steps {
                script {
                    sshagent(['ssh']) {
                        sh "ssh -o StrictHostKeyChecking=no \${EC2_HOST} 'sudo su -c \" cd TEP-Frontend && git pull origin developer && docker compose stop nextjs && docker compose build nextjs && docker compose up -d\"'"
                    }
                }
            }
        }
    }
    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
