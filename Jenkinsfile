pipeline {
    agent { docker { image 'node:14.17.6-alpine' } }
    stages {
        stage('initialize'){
            def dockerHome = tool 'myDocker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
        }
        stage('test') {
            steps {
                sh 'node --version'
            }
        }
    }
}
