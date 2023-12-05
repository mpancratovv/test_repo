# CypressDockerWeb

## Overview

This repository contains a streamlined setup for running a web application and associated tests using Docker and Jenkins. By utilizing a single repository for both the web application and testing projects, we aim to provide a practical and cohesive solution for small projects. The project follows the "configuration as code" approach, making it easy to set up and manage.

## Prerequisites

Before getting started, ensure you have the following prerequisites installed:

- [Docker](https://www.docker.com/get-started) - For containerization.
- [Docker Compose](https://docs.docker.com/compose/install/) - For managing Docker containers and services.

## Getting Started

To initiate the infrastructure, simply run the following command:
`docker-compose up`


This command will start two containers: one for the web application and another for Jenkins.

### Jenkins Configuration

We have implemented the "configuration as code" approach for Jenkins. Once the Jenkins container is up and running, the configured pipeline is ready to be triggered. The Jenkins configuration and pipeline are described in the `jcasc.yml` file located in the `pipeline` directory.

### Project Structure

- `docker-compose.yml`: Manages the Docker containers and services.
- `Dockerfile` (Root Directory): Manages the Docker image for the web application.
- `pipeline` Directory:
  - `Dockerfile`: Manages the Docker image for Jenkins.
  - `jcasc.yml`: Describes the Jenkins configuration and pipeline.

### Cypress Tests

Cypress tests are executed within a Docker container, which runs inside the Jenkins container. All components related to the Cypress testing project, including a Dockerfile, can be found in the `tests` directory. The actual test files are located under `tests/cypress/e2e`.

### Manually Accessing the Web Application

You can also access the web application manually by opening your web browser and navigating to `http://localhost:3000`.

## Usage

1. Start the infrastructure with `docker-compose up`.
2. Access Jenkins at `http://localhost:8080` in your web browser.
3. Set up the Jenkins pipeline as configured in `jcasc.yml`.
4. Trigger the pipeline for automated builds and tests.




