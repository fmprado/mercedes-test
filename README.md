# Mercedes-Benz IO Exercise

## Overview

This project is a proposed solution for the given challenge from MBIO process.

It consists of a [NodeJS](https://nodejs.org/en) project written in TypeScript language using test automation framework [Playwright](https://playwright.dev/).
It uses the Page Object Model pattern.

## Setup

> In order to run the project, the only prerequisite is to have NodeJS installed - refer to [Node installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if necessary.

Setup steps go as follows:

1. [Download this repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) to your local machine
2. Open a terminal in the project folder
3. Install project packages
   ```
   npm install
   ```
4. Install Playwright browsers
   ```
   npm run setup
   ```

## Execution

The project provides some different options of running the tests:

- Running the test against all browsers - this script spawns 3 different workers to run the test against each available browser in parallel
  ```
  npm run test
  ```
- Running the test against Chromium browser
  ```
  npm run test:chromium
  ```
- Running the test against Safari browser
  ```
  npm run test:safari
  ```
