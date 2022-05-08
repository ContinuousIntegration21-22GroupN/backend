pipeline {
    agent { docker { image 'node:14.17.6-alpine' } }
    stages {
        stage('lint'){
            steps {
                sh 'npm install'
                sh 'npm run prettify'
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
            when {
                branch 'master'
            }
            steps {
                sh 'docker build -t annawithtwon/ci-cd-semester-project .'
                sh 'docker push annawithtwon/ci-cd-semester-project'
            }
        }
    }
}
