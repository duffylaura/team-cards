class engineer {
    constructor (name, id, email, github) {
        this.name = name; 
        this.id = id; 
        this.email = email; 
        this.github = github; 
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

    github () {
        return this.github;
    }

}

module.exports = engineer 