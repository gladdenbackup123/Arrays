let mat = [[1,2,3],
           [4,5,6],
           [7,8,9]]

// console.log(mat[0][0])
// console.log(mat[1][1])
// console.log(mat[2][0])

let arr = [[1,4,5],[2,6,7],[3,8,9]];
let n = arr.length;

//let total = 0;
for(let i=0 ; i<n ; i++){ // i = 0,1,2
    for(let j=0 ; j<n ; j++){ // j = 0,1,2
        console.log(arr[i][j]);
        //total += arr[i][j];
    }
}
//console.log(total);
