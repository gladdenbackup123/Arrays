let mat = [ [1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16] ]
let rows = mat.length;
let cols = mat[0].length;

// first row -> i=0
for(let j=0 ; j<cols ; j++){
    console.log(mat[0][j])
}

// last col -> j=cols-1
for(let i=1 ; i<rows ; i++){
    console.log(mat[i][cols-1])
}

// last row -> i=rows-1
for(let j=cols-2 ; j>=0 ; j--){
    console.log(mat[rows-1][j])
}

// first col -> j=0
for(let i=rows-2 ; i>=1 ; i--){
    console.log(mat[i][0])
}