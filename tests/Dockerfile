FROM cypress/included:13.5.1

WORKDIR /e2e
	
COPY package*.json /e2e/
COPY cypress.config.js /e2e/cypress.config.js
COPY package.json /e2e/package.json
COPY renameReports.js /e2e/renameReports.js
COPY cucumber-html-report.js /e2e/cucumber-html-report.js
COPY test-and-posttest.sh /e2e/test-and-posttest.sh
RUN chmod +x /e2e/test-and-posttest.sh

RUN npm install cypress-cucumber-preprocessor --save-dev
RUN npm install cypress-multi-reporters --save-dev
RUN npm install multiple-cucumber-html-reporter --save-dev
	
COPY . /e2e

CMD ["cypress", "run", "--browser", "chrome"]
