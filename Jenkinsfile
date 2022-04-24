pipeline {
    agent { docker { image 'node:14.17.6-alpine' } }
    stages {
        stage('test:unit') {
            steps {
                sh 'node --version'
            }
        }
    }
}
