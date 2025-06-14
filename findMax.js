function findMax(arr){
    let maxi = arr[0];
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] > maxi){
            maxi = arr[i];
        }
    }

    console.log('Maximum value is :', maxi);
}

let arr = [7,1,2,9,5];
findMax(arr)