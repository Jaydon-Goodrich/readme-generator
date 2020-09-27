const inquirer = require('inquirer');


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on how to use your project:'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide contribution instructions:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license is most suitable for your project?',
        choices: ['GNU AGPLv3', 'GNU GRLv3', 'GNU LGPLv3', 'Mozilla Public', 'Apache', 'MIT', 'Boost Software', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Instructions for contacting with additional questions:'
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


inquirer
    .prompt(questions)