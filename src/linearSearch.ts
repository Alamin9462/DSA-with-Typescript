const linearSearch = (arr: number[], target: number) => {
   for(let i = 0; i<arr.length; i++){
    if(arr[i] === target){
        return i;
        
    }
   
   }
   return false;
};

const arr = [10, 20, 30, 40, 50, 60, 20, 33, 40, 50];
const target = 50;
console.log(linearSearch(arr, target));