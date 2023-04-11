// The method to create new objects must be called constructor.
// The class keyword creates a constant, so you cannot redefine it. 

class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Instance methods
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    // Class method
    static enrollStudents(...students){
        
    }
}
