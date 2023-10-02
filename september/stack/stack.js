// implement enqueue and dequeue using only two stack 
// enqueue means to add element and dequeue means to remove the element 



class stackQueue{
   constructor(){
    this.stackEnqueue = [],
    this.stackDequeue = []
   }

   enqueue(value){
    this.stackEnqueue.push(value);
   }

   dequeue(){

   
    
        while(this.stackEnqueue.length > 0){
            this.stackDequeue.push(this.stackEnqueue.pop());
        }
   
    
    if(this.stackDequeue.length === 0){
        return null
    }

    return this.stackDequeue.pop();

   }




}


let Stacks = new stackQueue();
Stacks.enqueue(1);
Stacks.enqueue(2);
Stacks.enqueue(3);
console.log(Stacks.dequeue());
console.log(Stacks.dequeue());
console.log(Stacks.dequeue());