const contact = require('./00contactCard');

class Intern extends contact {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    };

    school(){
        return this.school;
    };

    getRole(){
        return "Intern";
    };
    
};
module.exports = Intern;