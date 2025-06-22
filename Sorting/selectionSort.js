function selectionSort(arr){
    let n = arr.length;
    
    for(let i=0; i<n-1; i++){
        let smallest=i;
        for(let j=i+1 ; j<n ; j++){
            if(arr[j] < arr[smallest]){
                smallest = j
            }
        }
        // swap arr[i] and arr[smallest] 
        let temp = arr[i]; 
        arr[i] = arr[smallest];
        arr[smallest] = temp;
    }
    
}

let arr = [4,3,5,2,1];
selectionSort(arr);
console.log('Sorted array is :', arr);
