const contact = require('./00contactCard.js');

class Manager extends contact {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    };

    officeNumber(){
        return this.officeNumber;
    };

    getRole(){
        return "Manager";
    };
};
module.exports = Manager