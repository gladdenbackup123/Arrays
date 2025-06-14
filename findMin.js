function findMin(arr){
    let mini = arr[0];
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] < mini){
            mini = arr[i];
        }
    }

    console.log('Minimum value is :', mini);
}

let arr = [7,1,2,9,5];
findMin(arr);