// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// prompts user for information about application
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project',
            name: 'title',
        
        },
        {
            type: 'input',
            message: 'Give a detailed description of what your project accomplishes. Include challenges you faced, technologies used, and what you would like to change in the future.',
            name: 'description',
        
        },
        {
            type: 'input',
            message: 'What are the steps to install your project? Include how dependencies are installed.',
            name: 'installation',
      
        },
        {
            type: 'input',
            message: 'How does the user USE the project? Include steps to launch application as well as any known problems they might encounter.',
            name: 'usage',
     
        },
        {
            type: 'list',
            name: 'license',
            message: 'What License does your project use?',
            choices: ['Apache','BSD 3-Clause','MIT License','Unlicense'],
        },
        {
            type: 'input',
            message: 'Who contributed to this project? List contributors and references.',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'What command do you use to test your function?',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'If a user has questions, where can they email you?',
            name: 'questions'
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github',
        }
        //function to create README using template literal
    ]).then(function (data) {
        let badge = ''
        const license = `${data.license}`
        // if statement adds correct badge to the top of the page
        if (license === 'Apache'){
            badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        } else if (license == 'BSD 3-Clause') {
            badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        } else if (license == 'MIT License') {
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        } else if (license == 'Unlicense') {
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        } else return;

        const README = `
${badge}

# ${data.title}
     

## Description


${data.description}


---


## Table of Contents


Title --- ${data.title}
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


---


## Installation


${data.installation}


---


## Usage


${data.usage}


---


## License


This project is licensed under the ${data.license}.


---


## Contributing


${data.contributing}


---


## Tests


${data.tests}


---


## Questions


For questions or comments, please email me at ${data.questions}.

My Github profile is located at [https://github.com/${data.github}](https://github.com/${data.github}).


---
`
        // function to write README file
        fs.writeFile(`${data.title}.md`, README, function (err) {
            if (err) {
                return console.error(err)
            } else {
                console.log("Success!")
            }
        })
    })
