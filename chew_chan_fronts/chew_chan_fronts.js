// Write a method that accepts a value and create a new node, 
// assign it to the list head, and return a pointer to the new head node.

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

// Remove Front
// Write a method to remove the head node and return the new list head node. 
// If the list is empty, return null.

    removeFront(){
        if(this.head == null){
            return this.head;
        }
        // varified the front node that we need to remove
        var remove_node = this.head;
        // set the 2nd node as head
        this.head = remove_node.next;
        // the node that need to remove point to null
        remove_node.next=null;
        return this.head;

    }

}
var SLL1= new SLL();
SLL1.addFront(18);
console.log(SLL1);
SLL1.removeFront();
console.log(SLL1);
SLL1.addFront(73);
console.log(SLL1);
console.log(SLL1.head.next);




