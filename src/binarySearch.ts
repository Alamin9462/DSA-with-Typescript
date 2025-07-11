
const binarySearch = (arrInput: number[], targetValue: number) => {
   let left = 0;
   let right = arrInput.length - 1;

   while(left <= right){
    const mid  = Math.floor((left + right) / 2);

    if(arrInput[mid] === targetValue){
       return mid;
    }
    else if (arrInput[mid] < targetValue) {
        left = mid + 1 ;
    }




    
    else{
     right = mid -1;
    }
   }

   return "Not found";
};

const arrInput = [11, 31, 51, 71, 75, 80, 85, 90, 95];
let targetValue = 80;

console.log(binarySearch(arrInput, targetValue));