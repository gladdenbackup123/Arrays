class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let n1 = new Node(5);
let n2 = new Node(7);
let n3 = new Node(9);
let n4 = new Node(11);

n1.next = n2;
n2.next = n3;
n3.next = n4;
let head = n1;

// traverse the linked list 
let temp = head;
while(temp!=null){
    console.log(temp.data); // 5 7 9 11
    temp = temp.next;
}

console.log(temp);  
