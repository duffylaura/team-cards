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
        name: 'officeNumber',
        message: "What is the manager's office number?",
    },
    {
        type: 'list', 
        name: 'select',
        message: 'Select the type of employee to enter next.',
        choices: ["engineer","intern"],
    }
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
        name: 'github',
        message: "What is the engineer's github username?",
    }
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
        name: 'school',
        message: "What is the intern's school?",
    }
];

const whatNextQuestions = [
    {
        type: 'list', 
        name: 'whatNext',
        message: "Select the type of employee to enter next or select 'end.'",
        choices: ["engineer","intern", "end"],
    }
]

module.export = managerQuestions; 

module.export = engineerQuestions; 

module.export = internQuestions; 

module.export = whatNextQuestions; 