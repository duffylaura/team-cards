const fs = require('fs'); 
const inquirer = require('inquirer');
const manager = require ('./lib/01manager'); 
const engineer = require ('./lib/02engineer'); 
const intern = require ('./lib/03intern');
const promptQuestions = require('./lib/prompt-questions'); 

const cards = []; 

inquirer.prompt(managerQuestions)

.then((data) => {
    if (data.select === "engineer")
    {inquirer.prompt(engineerQuestions)}
    if (data.select === "intern")
    {inquirer.prompt(internQuestions)}
}
)








