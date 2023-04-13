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

// Singly linked lists
// piece of data - val
// reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tale = newTail;
        this.tail.next = null;
        this.lenght--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")



