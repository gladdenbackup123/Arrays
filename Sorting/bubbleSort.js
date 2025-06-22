function bubbleSort(arr){
    let n = arr.length;

    for(let iter=1 ; iter<=n-1; iter++){
        for(let i=0 ; i<n-iter ; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]; 
                arr[i] = arr[i+1]; 
                arr[i+1] = temp;
            }
        }
    }
    
}

let arr = [4,3,5,2,1];
bubbleSort(arr);
console.log('Sorted array is :', arr);
