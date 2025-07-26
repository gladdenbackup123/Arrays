// Reverse the string using stack
let s = "hello"

// Insert all characters in the stack
let stack = []
for(let i=0; i<s.length ; i++){
    stack.push(s[i]);
}

// Remove character and join it to the rev string
let rev = "";
while(stack.length > 0){
    let char = stack.pop();
    rev = rev + char;
}

console.log(rev);

// "" + o = o
// o + l = ol 
// ol + l = oll 
// oll + e = olle 
// olle + h = olleh
