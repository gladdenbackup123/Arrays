// String creation
let city = "Mumbai";
console.log(typeof city);

let fullName = "Gladden Rumao";
let greeting = `Hi ${fullName}`;
console.log(greeting);

// Access characters
let str = "Javascript";
console.log(str[0]); // J
console.log(str[4]); // s

// Note - Space is also a character
// Length of String - no of characters
console.log(fullName.length);

// Uppercase and Lowercase
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// split 
let data = "hp-dell-acer-samsung";
let x = "apple mango banana";
let companies = data.split("-");
console.log(companies);

let fruits = x.split(" ");
console.log(fruits);

// Index checking 
let s = "hello world";
console.log(s.indexOf("w")); //6 
console.log(s.indexOf("l")); //2 ( first occurence )
console.log(s.indexOf("world")); //6

// Check if string is present - True/False
console.log(s.includes("hello"));

// substring 
let w = s.substring(0,3); // start index is included , end index is not included ->  i=0 ; i<3
console.log(w);
let s1 = s.substring(6,11); // world i=6, i<11
console.log(s1);