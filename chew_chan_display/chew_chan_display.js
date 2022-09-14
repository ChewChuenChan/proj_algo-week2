// Display
// Create display() that uses a while loop 
// and a runner to return a string containing all list values. 
// Build what you wish console.log(myList) did!

// Node Class
class Node{
    // constructor to create a new node
    constructor(val){
        this.data=val;
        this.next=null;
    }
}
class SLL {
    // Start with no nodes
    // head points to first node
    constructor(){
        this.head=null;
    }
    //Add a node to the front
    addFront(value){
        // allocated the Node & put in the data
        var new_node = new Node(value);
        // make next of new Node as head
        new_node.next = this.head;
        // move the head to point to new Node
        this.head = new_node;
        return this.head;
    }

// display
display(){
    let runner=this.head;
    let mylist =[];
    while(runner !==null){
        console.log(runner.data);
        mylist.push(runner.data);
        runner=runner.next
    }
    return mylist;
}


}

var SLL1= new SLL();
SLL1.addFront(18);
SLL1.addFront(2);
SLL1.addFront(3.142);
SLL1.display();