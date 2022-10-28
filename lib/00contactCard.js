class contact { 
    constructor (name, id, email, extra, position) {
        this.name = name; 
        this.id = id; 
        this.email = email; 
        this.extra = extra;
        this.position = position;
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

    extra () {
        return this.extra; 
    }

    position () {
        return this.position; 
    }
}

module.exports = contact; 