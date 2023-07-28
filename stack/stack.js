// implement enqueue and dequeue using only two stack 
// enqueue means to add element and dequeue means to remove the element 



class stackQueue {
    constructor(){
        this.stackEnqueue = [];
        this.stackDqueue = []
    }

    enqueue(value){
        this.stackEnqueue.push(value);
    }

    dequeue(){
    if(this.stackDqueue.length === 0 ){
       while(this.stackEnqueue.length !== 0){
        this.stackDqueue.push(this.stackEnqueue.pop());
       }
    }

    if(this.stackDqueue.length === 0){
        return 'null';
    }


    return this.stackDqueue.pop();

    }


}

let queue = new stackQueue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.dequeue()); 
console.log(queue.dequeue());
console.log(queue.dequeue());