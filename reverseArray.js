let arr = [3,4,1,2,5];

// Approach 1 : Iterate Loop is reverse order, and push elements in new array
let n = arr.length;
let rev = [];
for(let i=n-1; i>=0; i--){
    rev.push(arr[i])
}

//console.log(rev); // [5,2,1,4,3]

// Approach 2 : Use two pointers to swap the elements
let arr2 = [3,4,1,2,5];
let i = 0;
let j = n-1;

while( i<=j ){
    // swap arr2[i] and arr2[j]
    let temp = arr2[i]; 
    arr2[i] = arr2[j]; 
    arr2[j] = temp;

    i++;
    j--;
}

console.log(arr2); // [5,2,1,4,3]