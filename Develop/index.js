// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");
// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the project's title?"
    },

    {
        type: "input",
        name: "description",
        message: "What is this app for?."
    },

    {
        type: "input",
        name: "installation",
        message: "How can this app be installed?"
    },

    {
        type: "input",
        name: "usage",
        message: "How is it used?"
    },

    {
        type: "input",
        name: "contribution",
        message: "What is your contribution?"
    },

    {
        type: "input",
        name: "test",
        message: "Enter test instructions?"
    },

    {
        type: "list",
        name: "license",
        message: "what is your license? ",
        choices: [
            "None",
            "Apache license 2.0",
            "Boost Software License 1.0",
            "Eclipse Public License 1.0",
            "GNU General Public License v2.0",
            "ISC",
            "MIT"
        ]
    },

    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },

    {
        type: "input",
        name: "repository",
        message: "What the repository's link?"
    },

];;

const promptUser = () => {
    return inquirer.prompt(questions)
}
// Function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile("README.md", generateMarkdown(answers), (err) =>
        err ? console.log(err) : console.log('Successfully created README file!')
    );
}
// Function to initialize app
const init = () => {
    promptUser()
        // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => writeToFile("README.md", answers))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};
// Function call to initialize app

init();

