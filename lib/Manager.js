const Employee = require("./Employee.js");

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        super.name = name;
        super.id = id;
        super.email = email;
        this.officeNumber = officeNumber;
        
    }

    getRole(){
        return "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}



module.exports = Manager;