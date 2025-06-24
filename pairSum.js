// Given a sorted array, 
// determine if a pair exists with the given target sum

// Approach 1 : Check all possible pairs
// function pairSum(arr, target){
//     let n = arr.length; 
//     for(let i=0 ; i<n-1 ; i++){
//         for(let j=i+1 ; j<n ; j++){
//             if(arr[i] + arr[j] == target){
//                 //  console.log('Pair :', arr[i],arr[j]);
//                 return true;
//             }
//         }
//     }

//     return false;
// }

let arr = [2,5,7,9,11,15];
let target = 18;
console.log(pairSum(arr,target));

// Approach 2 : Use Two Pointers 
function pairSum(arr, target){
    let i=0;
    let j=n-1;

    while(i<j){
        if(arr[i]+arr[j]==target)
            return True;
        else if (arr[i]+arr[j] < target) 
            i++;
        else 
            j--;
    }
    return false;
}