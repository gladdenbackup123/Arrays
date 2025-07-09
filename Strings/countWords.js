// Count the number of words in the given sentence
let sentence = "Javascript is the heart of web development";

// Approach 1 : Use split function
let words = sentence.split(" ");
console.log(words);
console.log("Number of words:",words.length);

// Approach 2 : No of words =  No of Spaces + 1
let spaces = 0;
for( let i=0 ; i<sentence.length ; i++){
    if(sentence[i]==" "){
        spaces += 1
    }
}
console.log("Number of words:",spaces+1);