# Azent Overseas interview assignment

Instructionts to run cypress test cases

# System requirements
 
## Operating System

Cypress is a desktop application that is installed on your computer. The desktop application supports these operating systems:

- macOS 10.9 and above (64-bit only)
- Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
- Windows 7 and above

## Node.js

If you're using npm to install Cypress, we need:

- Node.js 12 or 14 and above

```shell
brew install node
```

## Download visual stuido code 
Visit this link to download visual stuido code https://code.visualstudio.com/download 

## Clone git repo in VS code

```shell
https://github.com/Monika281992/Azent-Overseas
```

## Installing Cypress
 
Install Cypress via npm:

```shell
cd /your/project/path
```

```shell
npm install cypress --save-dev
```
This will install Cypress locally as a dev dependency for your project.

## Installing BDD Cucumber

Install the plugin by running:

```shell
npm install --save-dev cypress-cucumber-preprocessor
```

## Cypress Configuration

Add it to your plugins:

`cypress/plugins/index.js`

```javascript
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```

Add support for feature files to your Cypress configuration

`cypress.json`

```json
{
  "testFiles": "**/*.feature"
}
```
## Configuration

Add this section to your package.json:

```json
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}
```


## Opening Cypress

Now you can open Cypress from your project root by running below command:

The long way with the full path


```shell
./node_modules/.bin/cypress open
```
## Run test case

Just click on the test case you want to run.


