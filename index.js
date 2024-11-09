// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [
    "Do you want to create a README file?",
    "What is your project title?",
    "Please provide the following infomration: description.",
    "Installation instruction",
    "Usage information", 
    "Contribution Guidelines",
    "Test instructions", 
    "License", 
    "GitHub username",
    "Email address",
    ];

    inquirer
        .prompt(questions)
        .then()



// TODO: Create a function to write README file
const data ="";

function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, function(err) {
        if (err) throw err;
        console.log('Saved!');
   
    }
)

}

// TODO: Create a function to initialize app
function init() {



    writeToFile('readme.md',data)
}

// Function call to initialize app
init();
