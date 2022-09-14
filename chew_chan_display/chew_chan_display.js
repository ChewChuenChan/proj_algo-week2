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
        // varified empty list
        var mylist =" "; 
        // edge case: list is empty
        if(this.head ==null){
            return "Empty list";
        }
        // concatenate the first value in the list
        mylist += this.head.data;
        // for the second node, we will add "," + value
        var runner =this.head.next;

        while(runner !=null){
            mylist += "," + runner.data;
            runner=runner.next;
        }
        return mylist;
    }
}

var SLL1= new SLL();
console.log(SLL1.display());
SLL1.addFront(18);
// console.log(SLL1);
SLL1.addFront(2);
SLL1.addFront(3.142);
console.log(SLL1.display());