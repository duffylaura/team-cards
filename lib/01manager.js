class manager { 
    constructor (name, id, email, officeNumber) {
        this.name = name; 
        this.id = id; 
        this.email = email; 
        this.officeNumber = officeNumber; 
    }

    name (){
        return this.name;
    }

    id () {
        return this.id; 
    }

    email () {
        return this.email; 
    }

    officeNumber () {
        return this.officeNumber; 
    }

}

module.exports = manager; 