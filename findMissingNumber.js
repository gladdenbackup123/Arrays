// Approach 1 : Try all numbers from 1 to n
let arr = [4,1,2,5];
let size = arr.length;
let n = size+1;
let missing = 0;
for(let i=1 ; i<=n ; i++){
    if(arr.includes(i)==false){
        missing = i;
        break;
    }
}
console.log(missing);


// Approach 2 : Sort and match with index
arr.sort((a,b)=>a-b);

for(let i=0; i<n ; i++){
    if(arr[i] != i+1){
        missing = i+1;
        break;
    }
}

console.log(missing);


// Approach 3 : Missing = Expected Total - Actual Total

let expected = (n*(n+1))/2;
let actual = 0;
for(let i=0 ; i<size ; i++){
    actual += arr[i];
}

let ans = expected - actual;
console.log(ans);

