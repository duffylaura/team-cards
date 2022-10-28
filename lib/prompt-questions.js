const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?",
    },
    {
        type: 'input',
        name: 'extra',
        message: "What is the manager's office number?",
    },
    {
        type: 'list', 
        name: 'position',
        message: "Select this employee's position at the company",
        choices: ["Manager", "Engineer", "Intern"],
    },
    {
        type: 'list', 
        name: 'select',
        message: 'Select the type of employee to enter next.',
        choices: ["engineer","intern"],
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?",
    },
    {
        type: 'input',
        name: 'extra',
        message: "What is the engineer's github username?",
    },
    {
        type: 'list', 
        name: 'position',
        message: "Select this employee's position at the company",
        choices: ["Manager", "Engineer", "Intern"],
    },
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email?",
    },
    {
        type: 'input',
        name: 'extra',
        message: "What is the intern's school?",
    },
    {
        type: 'list', 
        name: 'position',
        message: "Select this employee's position at the company",
        choices: ["Manager", "Engineer", "Intern"],
    },
];

const whatNextQuestions = [
    {
        type: 'list', 
        name: 'whatNext',
        message: "Select the type of employee to enter next or select 'end.'",
        choices: ["engineer","intern", "end"],
    }
]


//export the four arrays as an object 

module.exports = {managerQuestions, engineerQuestions, internQuestions, whatNextQuestions}; 