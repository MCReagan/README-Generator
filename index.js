// GIVEN a command - line application that accepts user input

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = inquirer
                    .prompt([
                        {  
                            type: 'input',
                            message: 'What is the title of your project',
                            name: 'title',
                            // README Generator
                        },
                        {
                            type: 'input',
                            message: 'Give a detailed description of what your project accomplishes. Include challenges you faced, technologies used, and what you would like to change in the future.',
                            name: 'description',
                            // This project was created to expedite the process of creating a uniform README that is of professional quality. Node was used for its included fs package and also for the inquirer package. In the future, I would like to add an area where the user can provide a link to a screenshot jpeg that will be added to the README.
                        },
                        {
                            type: 'input',
                            message: 'What are the steps to install your project?',
                            name: 'installation',
                            // To install this product, simply visit the Github link at the bottom of the page. Clone the repository titled "README Generator" to your local machine. Open with command prompt or vscode.
                        },
                        {
                            type: 'input',
                            message: 'How does the user USE the project? Include steps to launch application as well as any known problems they might encounter.',
                            name: 'usage',
                            // Open index.js in terminal. Type node index.js. Answer all questions as thoroughly as possible. The name of your README will be the same name of your project title.If nothing is entered, a blank README will be created to use as a template.README will be saved in the folder labled "README-GENERATOR".To start application again, simply open a new terminal and repeat. *Note* any projects with the same title will overwrite an existing README.
                        },
                        {
                            type: 'list',
                            name: 'license',
                            message: 'What License does your project use?',
                            choices: ['MIT License'],
                        },
                        {
                            type: 'input',
                            message: 'Who contributed to this project? List contributors and references.',
                            name: 'contributing',
                            // This project was created using Javascript, Node, Inquirer node package, fs node package by Michael Reagan.
                        },
                        {
                            type: 'input',
                            message: 'What scenarios did you use to test your project? Be as detailed as possible.',
                            name: 'tests'
                            // Several READMEs were generated using the software to confirm that it meets the required parameters.
                        },
                        {
                            type: 'input',
                            message: 'If a user has questions, where can they email you?',
                            name: 'questions'
                            // Emparode@gmail.com
                        },
                        {
                            type: 'input',
                            message: 'What is your Github profile link? Include https://',
                            name: 'github',
                            // https://github.com/MCReagan/README-Generator
                        }
                    ]).then(function (data) {
                        const license =`${data.license}`
                        const title = (`${data.title}`.toLowerCase())
                        const README = `
# ${data.title}
     

## Description


${data.description}


---


## Table of Contents


1. [Title](#${title})
2. [Description](#description)
3. [Installation](#installation)
4. [Usage](#usage)
5. [License](#license)
6. [Contributing](#contributing)
7. [Tests](#tests)
8. [Questions](#questions)


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

My Github profile is located at [${data.github}](${data.github}).


---
`

                        fs.writeFile(`${data.title}.md`, README, function (err) {
                            if (err) {
                                return console.error(err)
                            } else {
                                console.log("Success!")
                            }
                        })
                    })

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();


// WHEN I am prompted for information about my application repository

// Needs to have Title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// When the project title is entered, it becomes readme name



// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README 