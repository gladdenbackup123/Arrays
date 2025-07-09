// Given a string, check if it is a palindrome
let s1 = "racecar"; // Yes
let s2 = "moon" // No

let i = 0;
let j = s1.length-1;
let ans = true;
while(i<j){
    if (s1[i]!=s1[j]){
        ans = false;
    }
    i++;
    j--;
}
console.log(ans);