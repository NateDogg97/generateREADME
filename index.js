// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'What was your motivation?', 'Why did you build this project?', 
                   'What problem does it solve?', 'What did you learn?', 'Provide a brief description of your Project.',
                   'How do you install this?', 'How do you use this?', 'Which license would you like to use?',
                   'How would someone contribute to your project?', 'How could someone test your application?',
                   'What is your Github username?', 'What is your email?'];

// TODO: Create a function to write README file
function writeToFile(newFile, data) {
    fs.appendFile(newFile, data, (err) => {
       err ? console.error(err) : console.log(data)
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: questions[0],   
    },
    // ======= //
    // License //
    // ======= //    
    {
      type: 'list',
      name: 'license',
      message: questions[8],
      choices: ['Apache 2.0', 'MIT', 'GNU General Public', 'none'],
    },
    // // =========== //
    // // Description //
    // // =========== //
    {
      type: 'input',
      name: 'description',
      message: questions[5],
    },
    {
      type: 'input',
      name: 'description1',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'description2',
      message: questions[2],
    },
    {
      type: 'input',
      name: 'description3',
      message: questions[3],
    },
    {
      type: 'input',
      name: 'description4',
      message: questions[4],
    },
    // ============ //
    // Installation //
    // ============ //
    {
      type: 'input',
      name: 'installation',
      message: questions[6],
    },
    // ===== //
    // Usage //
    // ===== //
    {
      type: 'input',
      name: 'usage',
      message: questions[7],
    },   
    // ============ //
    // Contributors //
    // ============ //
    {
      type: 'input',
      name: 'contributing',
      message: questions[9],
    },
    // ===== //
    // Tests //
    // ===== //
    {
      type: 'input',
      name: 'tests',
      message: questions[10]
    },
    // ======== //
    // Username //
    // ======== //
    {
      type: 'input',
      name: 'username',
      message: questions[11],
    },
    // ===== //
    // Email //
    // ===== //
    {
      type: 'input',
      name: 'email',
      message: questions[12],
    },
  ])
  .then(answers => {
    writeToFile('README.md', generateMarkdown(answers));
  })
}

// Function call to initialize app
init();
