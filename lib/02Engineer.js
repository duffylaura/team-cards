const contact = require('./00contactCard.js');

class Engineer extends contact {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
    };

    github(){
        return this.github;
    };

    getRole(){
        return "Engineer";
    };
    
};
module.exports = Engineer