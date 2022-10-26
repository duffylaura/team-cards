class intern {
    constructor (name, id, email, school){
        this.name = name; 
        this.id = id; 
        this.email = email;
        this.school = school;
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

    school () {
        return this.school; 
    }

}

module.exports = intern 