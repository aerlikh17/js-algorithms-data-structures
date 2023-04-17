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
    insert(idx, val){ // insert is adding a node to the Linked List at a specific position
        if(idx < 0 || idx > this.length) return false;
        if(idx === this.length) return !!this.push(val);
        if(idx === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let prev = thos.get(idx - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(idx){ // remove is removing a node from the Linked List at a specific position
        if(idx < 0 || idx >= this.length) return undefined;
        if(idx === 0) return this.shift();
        if(idx === this.length - 1) return this.pop();

        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse(){ // reverse is reversing the Linked List in place
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;

        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
list.push("!")

// Doubly Linked List

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.tail = newNode;
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this; 
    }
    pop(){
        if(this.length === 0) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(this.length === 0) return undefined;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(idx){
        if(idx < 0 || idx >= this.length) return null;
        let counter, current;
        if(idx <= this.length / 2){
            counter = 0;
            current = this.head;
            while(counter !== idx){
                current = current.next;
                counter++;
           }
        } else {
            counter = this.length - 1;
            current = this.tail;
            while(counter !== idx){
                current = current.prev;
                counter--;
            }
        }
        return current;
    }
    set(idx, val){
        let foundNode = this.get(idx);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(idx, val){
        if(idx < 0 || idx > this.length) return false;
        if(idx === 0) return !!this.unshift(val); 
        if(idx === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let beforeNode = this.get(idx-1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    }
    remove(idx){
        if(idx < 0 || idx >= this.length) return undefined;
        if(idx === 0) return !!this.shift(); 
        if(idx === this.length - 1) return !!this.pop();

        let removedNode = this.get(idx);
        
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;

        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;
    }
}



