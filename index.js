// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'confirm',
        name: "y",
        message: "Do you want to create a README file?",
    },
    {   type:"input",
        name: "title",
        message: "What is your project title?",
    },
    {   type:"input",
        name: "description",
        message: "Please provide the following infomration: description.",
    },
    {   type:"input",
        name: "installation",
        message: "Installation instruction",
    },

    {   type:"input",
        name: "usage",
        message: "Usage information",
    },
    {   type:"input",
        name: "contribution",
        message: "Contribution Guidelines",
    },
    {   type:"input",
        name: "test",
        message:"Test instructions",
    },
    {   type:"input",
        name: "license",
        message: "License",
    },  
    {   type:"input",
        name: "username",
        message: "GitHub username",
    },
    {   type:"input",
        name: "email",
        message: "Email address",
    }]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf8',function(err) {
        if (err) throw err;
        console.log('Saved!');
      })
}

// TODO: Create a function to initialize app
function init(x) {

    inquirer
        .prompt(x)
        .then(response => {
        console.info("Please input: ", response);

    const content = 
    `# ${response.title}
    ## Description
    ${response.description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation
    ${response.installation}

    ## Usage
    ${response.usage}

    ## License
    ${response.license}

    ## Contributing
    ${response.contribution}

    ## Tests
    ${response.test}

    ## Questions
    
    If you have any questions, feel free to reach out to me at [${response.email}](mailto:${response.email}).
    http://github.com/${response.username}`;
    
    writeToFile('readme.md', content);
    })

    .catch(error=> {
        console.error("an error occur,", error);
    } )       

}

// Function call to initialize app
init(questions);
