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
    push(val){ // pushing is adding a new node to the end of the Linked List
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
    pop(){ // popping is removing a node from the end of the Linked List
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
    shift(){ // shifting is removing a new node from the beginning of the Linked List
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){ // unshifting is adding a new node to the beginning of the Linked List
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
        newNode.next = this.head;
        this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(idx){ // get is retrieving a node by its position in the Linked List
        if(idx <0 || idx >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== idx){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(idx, val){ // set is changing the vlue of a node based on its position in the Linked List
        let foundNote = this.get(idx);
        if(foundNote){
            foundNote.val = val;
            return true;
        }
        return false;
    }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
list.push("!")



