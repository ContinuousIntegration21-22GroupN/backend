pipeline {
    agent none
    stages {
        stage('build') {
            agent { docker { image 'node:14.17.6-alpine' } }
            steps {
                sh 'npm run build'
                sh 'npm install'
            }
        }
        stage('lint'){
            agent { docker { image 'node:14.17.6-alpine' } }
            steps {
                sh 'npm run prettify'
                sh 'npm run lint'
            }
        }
        stage('test-unit') {
            agent { docker { image 'node:14.17.6-alpine' } }
            steps {
                sh 'npm run test:unit'
            }
        }
        stage('test-integration') {
            agent { docker { image 'node:14.17.6-alpine' } }
            steps {
                sh 'npm run test:integration'
            }
        }
        stage('deploy') {
            agent any
            when {
                branch 'master'
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'DockerHub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh "docker login -u ${USERNAME} -p ${PASSWORD}"
                    sh 'docker build -t annawithtwon/ci-cd-semester-project .'
                    sh 'docker push annawithtwon/ci-cd-semester-project'
                }
            }
        }
    }
}
