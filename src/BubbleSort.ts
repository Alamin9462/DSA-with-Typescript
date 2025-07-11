
const BubbleSort = (arrayWithBubbleSort:number[]): number[] => {
    const n = arrayWithBubbleSort.length;
    for (let i = 0; i < n - 1; i++){

        let swapped = false;
        for(let j = 0; j< n - i -1 ; j++ ){
            if(arrayWithBubbleSort[j] > arrayWithBubbleSort[j + 1]){
        // swap 
           const temp = arrayWithBubbleSort[j];
           arrayWithBubbleSort[j] = arrayWithBubbleSort[j+1];
           arrayWithBubbleSort[j+1] = temp;

           swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arrayWithBubbleSort;
       
}

console.log(BubbleSort([7, 44,10, 99, 22, 3, 9, 55, 12, 11]));

// const BubbleSort = (arrayWithBubbleSort: number[]): number[] => {
//   const n = arrayWithBubbleSort.length;
  
//   for (let i = 0; i < n - 1; i++) {
//     let swapped = false;

//     for (let j = 0; j < n - i - 1; j++) {
//       if (arrayWithBubbleSort[j] > arrayWithBubbleSort[j + 1]) {
//         // ✅ Correct swap using j, not i
//         const temp = arrayWithBubbleSort[j];
//         arrayWithBubbleSort[j] = arrayWithBubbleSort[j + 1];
//         arrayWithBubbleSort[j + 1] = temp;

//         swapped = true;
//       }
//     }

//     if (!swapped) break; // Optimization
//   }

//   return arrayWithBubbleSort;
// };

// console.log(BubbleSort([7, 3, 9, 12, 11]));
