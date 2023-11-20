FROM jenkins/jenkins:lts
USER root
ENV JAVA_OPTS="-Djenkins.install.runSetupWizard=false"

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
  blueocean:latest \
  docker-workflow:latest	 \
  authorize-project:latest
