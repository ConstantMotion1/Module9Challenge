const inquirer = require('inquirer');
const fs = require('fs');

 
const questions = [
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title"
    },
    {
      type: "input",
      message: "Provide a short description explaining the what, why, and how of your project.",
      name: "description"
    },
    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installation"
    },
    {
      type: "input",
      message: "Provide instructions and examples for use. Include screenshots as needed",
      name: "usage"
    },
    {
      type: "input",
      message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.",
      name: "contribution"
    },
    {
      type: "input",
      message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
      name: "tests"
    },
    {
      type: "input",
      message: "Enter your GitHub profile name",
      name: "githubname"
    },
    {
      type: "input",
      message: "Enter an email address that you would like to recieve questions about your project",
      name: "email"
    },
    {
      type: "list",
      message: "Choose which license you would like to use",
      name: "license",
      choices:["Apache", "Boost 1.0", "MIT"]
    }     

];

inquirer.prompt(questions)

      .then((response) => {
        let badge 
        let licenseLink
        if(response.license === "Apache") {
          badge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
          licenseLink = "(https://opensource.org/licenses/Apache-2.0)"
        } else if (response.license === "Boost 1.0") {
          badge = "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)"
          licenseLink = "(https://www.boost.org/LICENSE_1_0.txt)"
        } else {
          badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
          licenseLink = "(https://opensource.org/licenses/MIT)"
        }
        const content = 
`# ${response.title}

## Description

${response.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${response.installation}

## Usage

${response.usage}


## License

${badge}
[${response.license}]${licenseLink}

## How to Contribute

${response.contribution}

## Tests

${response.tests}

## Questions

[Contact me through GitHub](www.github.com/${response.githubname})

[Contact me through email](mailto:${response.email})

`
        fs.writeFile('README.md', content, (error) =>
        error ? console.error(error) : console.log('Success!'))
      });
      

    
