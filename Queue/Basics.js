let q = [];

q.push(4);
q.push(5);
q.shift(); 
q.push(7);
q.shift();
console.log(q[0]); // peek -> front element
q.push(8);
console.log(q[0]); // peek -> front element