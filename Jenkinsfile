pipeline {
    agent { docker { image 'node:14.17.6-alpine' } }
    stages {
        stage('lint'){
            steps {
                sh 'npm install'
                sh 'npm run lint'
            }
        }
        stage('test-unit') {
            steps {
                sh 'npm run test:unit'
            }
        }
        stage('test-integration') {
            steps {
                sh 'npm run test:integration'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('deploy') {
            steps {
                sh 'echo deploying...'
            }
        }
    }
}
