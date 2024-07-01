# JavaScript Project Setup with Jest, Babel, and ESLint

## Description

This project is set up with Node.js, Jest for testing, Babel for transpiling ES6+ code, and ESLint for code linting. The configurations provided ensure that your code meets the specified standards and passes all tests.

## Requirements

- Ubuntu 18.04 LTS
- Node.js 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- `README.md` file at the root of the project folder is mandatory
- Code should use the `.js` extension
- Code will be tested using Jest and the command `npm run test`
- Code will be verified against lint using ESLint
- Code needs to pass all the tests and lint. You can verify the entire project by running `npm run full-test`
- All functions must be exported

## Setup

### Install Node.js 12.11.x

Run the following commands to install Node.js 12.11.x:

```bash
cd ~
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v  # Verify the Node.js installation
# Expected output: v12.11.1
npm -v  # Verify the npm installation
# Expected output: 6.11.3
