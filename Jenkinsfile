pipeline {
    agent { docker { image 'node:14.17.6-alpine' } }
    stages {
        stage('build'){
            steps {
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                sh 'node --version'
            }
        }
    }
}
