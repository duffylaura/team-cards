const fs = require('fs'); 
const inquirer = require('inquirer');
//const manager = require ('./lib/01manager.js'); 
//const engineer = require ('./lib/02engineer.js'); 
//const intern = require ('./lib/03intern.js');
const contact = require ('./lib/00contactCard.js'); 
const {managerQuestions, engineerQuestions, internQuestions, whatNextQuestions} = require('./lib/prompt-questions.js'); //destructuring while importing 
const generateHTML = require('./lib/generateHTML.js');

const cards = []; 

function init () {

    inquirer.prompt(managerQuestions)
    .then((data) => {
        const managerEntry = new contact (data.name, data.id, data.email, data.extra, data.position);
        cards.push(managerEntry);

        if (data.select === "engineer")
            {inquirer.prompt(engineerQuestions)
            
                .then((data) => {
                    const engineerEntry = new contact (data.name, data.id, data.email, data.extra, data.position);
                    cards.push(engineerEntry);

                    whatNext(); 
                })

            
            }

        else if (data.select === "intern")
            {inquirer.prompt(internQuestions)
                
                .then((data)=>{
                    const internEntry = new contact (data.name, data.id, data.email, data.extra, data.position);
                    cards.push(internEntry);

                    whatNext();
                }) 
            }
    }
)};

const whatNext = () => {   
        inquirer.prompt(whatNextQuestions) // if engineer, if intern, if end 
        .then((data) => {

            if (data.whatNext === "engineer")
                {inquirer.prompt(engineerQuestions)
                
                    .then((data) => {
                        const engineerEntry = new contact (data.name, data.id, data.email, data.extra, data.position);
                        cards.push(engineerEntry);

                        whatNext(); 
                    })
                }

            else if (data.whatNext === "intern")
            {inquirer.prompt(internQuestions)
                
                .then((data)=>{
                    const internEntry = new contact (data.name, data.id, data.email, data.extra, data.position);
                    cards.push(internEntry);

                    whatNext();
                }) 
            }

            else if (data.whatNext === "end")
            {
                const output = generateHTML(cards);

                fs.writeFile('./dist/index.html', output, (err)=>          
                err ? console.log(err): console.log('Created your team contact cards successfully.')
            );
            }
        }) 
};

init();