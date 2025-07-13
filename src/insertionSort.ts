// desending to assending order 
const insertionSort = (arr: number[]) => {
     const n = arr.length;
     for(let i = 1; i < n; i++){
       const curentValue = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > curentValue){
         // while(j >= 0 && arr[j] < curentValue){     // assending to desending order  just chenges the < 
          arr[j + 1] = arr[j];
          j --;
        }
        arr[j + 1] = curentValue;
     }
     console.log(arr);
}

insertionSort([10, 5, 8, 9, 3, 11, 6, 8])

