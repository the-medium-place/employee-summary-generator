const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        super.name = name;
        super.id = id;
        super.email = email;
        this.school = school;
    }

    getRole(){
        return "Intern";
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern;