let arr = [[1,2,3,4],
           [5,6,7,8],
           [9,10,11,12],
           [13,14,15,16]];
// 1 2 3 4 8 7 6 5 9 10 11 12 16 15 14 13
let n = arr.length;
for(let i=0 ; i<n ; i++){
    if (i%2==0){
         // left to right
        for(let j=0 ; j<n ; j++){ 
            console.log(arr[i][j]);
        }
    }
    else{
        //right to left
        for(let j=n-1 ; j>=0 ; j--){ 
            console.log(arr[i][j]);
        }
    }
}