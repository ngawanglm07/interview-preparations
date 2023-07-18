class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedlist {
    constructor(value){
     const newNode = new Node(value)
     this.head = newNode
     this.tail = this.head
     this.length = 1 
    }
}

let myLinkedlist = new linkedlist(4)