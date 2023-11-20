FROM jenkins/jenkins:lts

USER root

WORKDIR /usr/src/app

ENV JAVA_OPTS="-Dhudson.model.DirectoryBrowserSupport.CSP=sandbox allow-same-origin allow-scripts; default-src 'self'; script-src 'unsafe-eval' *; img-src *; style-src 'unsafe-inline' *; font-src *;"

ENV NODE_VERSION=16.13.0
RUN apt install -y curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version
RUN npm --version

RUN npm install cypress-multi-reporters --save-dev
RUN npm install multiple-cucumber-html-reporter --save-dev


# Install prerequisites
RUN apt-get update && \
    apt-get install -y apt-transport-https ca-certificates curl software-properties-common

# Install Docker
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add - && \
    add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" && \
    apt-get update && \
    apt-get install -y docker-ce
	
ENV JAVA_OPTS="-Djenkins.install.runSetupWizard=false"

ENV NO_COLOR=1

ENV JENKINS_UC_EXPERIMENTAL="https://updates.jenkins.io/experimental"
ENV JENKINS_INCREMENTALS_REPO_MIRROR="https://repo.jenkins-ci.org/incrementals"

# Pre-install plugins
RUN jenkins-plugin-cli --plugins \
  ant:latest \
  antisamy-markup-formatter:latest \
  build-timeout:latest \
  cloudbees-folder:latest \
  configuration-as-code:latest \
  credentials-binding:latest \
  email-ext:latest \
  git:latest \
  github-branch-source:latest \
  gradle:latest \
  ldap:latest \
  mailer:latest \
  matrix-auth:latest \
  pam-auth:latest \
  pipeline-github-lib:latest \
  pipeline-stage-view:latest \
  ssh-slaves:latest \
  timestamper:latest \
  workflow-aggregator:latest \
  ws-cleanup:latest \
  job-dsl:latest \
  docker-workflow:latest \
  authorize-project:latest \
  htmlpublisher:latest \
  nodejs:latest \
  ansicolor:latest
