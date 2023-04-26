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
                        },
                        {
                            type: 'input',
                            message: 'Give a detailed description of what your project accomplishes. Include challenges you faced, technologies used, and what you would like to change in the future.',
                            name: 'description',
                        },
                        {
                            type: 'input',
                            message: 'What are the steps to install your project?',
                            name: 'installation',
                        },
                        {
                            type: 'input',
                            message: 'How does the user USE the project? Include steps to launch application as well as any known problems they might encounter.',
                            name: 'usage',
                        },
                        {
                            type: 'input',
                            message: 'Who contributed to this project? List contributors and references.',
                            name: 'contributing',
                        },
                        {
                            type: 'input',
                            message: 'If a user has questions, how may they reach you?',
                            name: 'questions'
                        }
                    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();


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