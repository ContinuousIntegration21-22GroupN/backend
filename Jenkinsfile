pipeline {
    environment {  
        app = '' 
    }
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
                script {
                    app = docker.build("annawithtwon/ci-cd-semester-project .") 
                }
            }
        }
        stage('deploy') {
            when {
                branch 'master'
            }
            steps {
                script {
                    app.push()
                }
            }
        }
    }
}
