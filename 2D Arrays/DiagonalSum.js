let arr = [[4,1,8],
           [2,3,6],
           [5,7,9]];
let n = arr.length;
let sum = 0;
for(let i=0 ; i<n ; i++){ // i = 0,1,2
    for(let j=0 ; j<n ; j++){ // j = 0,1,2
        if(i==j){
            sum += arr[i][j];
        }
    }
}

console.log(sum);