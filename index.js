// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [
    {type:"input",
    name: "x",
    message: "Do you want to create a README file?",
    },
    {type:"input",
        name: "title",
        message: "What is your project title?",
    },
    {type:"input",
        name: "description",
        message: "Please provide the following infomration: description.",
    },
    {type:"input",
        name: "toc",
        message: "Table of Content",
    },
    {type:"input",
        name: "installation",
        message: "Installation instruction",
    },

    {type:"input",
        name: "Usage",
        message: "Usage information",
    },
    {type:"input",
        name: "Contribution",
        message: "Contribution Guidelines",
    },
    {type:"input",
        name: "Test",
        message:    "Test instructions",
    },
    {type:"input",
        name: "License",
        message: "License",
    },  
        {type:"input",
        name: "username",
        message: "GitHub username",
    },
    {type:"input",
        name: "email",
        message: "Email address",
    }]


    const answers = [];

    




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
