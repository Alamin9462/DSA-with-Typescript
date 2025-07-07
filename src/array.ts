// const TwoDArry: number[][] = [
//   [1, 2, 3, 0],
//   [9, 7, 4, 8],
//   [10, 44, 66, 99],
//   [777, 555, 77],
// ];
// console.log(TwoDArry[3][2], TwoDArry[0][2], TwoDArry[2][3]);

const ThreeDArray: number[][][] = [
  [
    [0, 1, 2, 3, 4],
    [2, 21, 22, 3, 9],
    [22, 221, 222, 323, 954],
  ],
  [
    [22, 12, 22, 33, 43],
    [99, 21, 23, 33, 95, 66],
  ],
  [
    [69, 7, 70, 11, 66],
    [66, 77, 777, 995, 55],
  ],
];

const marged = ThreeDArray[1][0].concat(ThreeDArray[2][1][4]);

const addedItem = marged.push(10);

// console.log(addedItem);
// console.log(marged);

// given the array of object or peopele and  Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

type Person = {
  name: string;
  age: number;
  gender: "Male" | "Female";
};

const persons: Person[] = [
  { name: "Alia", age: 28, gender: "Female" },
  { name: "rakib", age: 35, gender: "Male" },
  { name: "porosh", age: 22, gender: "Male" },
  { name: "nabila", age: 30, gender: "Female" },
  { name: "ishan", age: 40, gender: "Male" },
];

// fundamental logic

const basicMethodFilteringData = (persons: any) => {
  let male: any = [];
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].gender !== "Female") {
      male.push(persons[i].name);
    }
  }
  return male;
};

// console.log(basicMethodFilteringData(persons));

const filteringData = (persons: any) => {
  const filterForFemail = persons
    .filter((person: any) => person.gender !== "Female")
    .map((data: any) => data.name);

  return filterForFemail;
};

// console.log(filteringData(persons));

// problems: 2 Object Manipulation

const books = [
  { title: "Atomic Habits", author: "James Clear", year: 2018 },
  { title: "Deep Work", author: "Cal Newport", year: 2016 },
  { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
  { title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999 },
];

const booksTitlefind = (books: any) => {
  let bookTitle = [];
  for (let i = 0; i < books.length; i++) {
    bookTitle.push(books[i].title);
  }
  return bookTitle;
};
// console.log(booksTitlefind(books));

// 2nd logic for es6

const seceondLogicForBookitemName = (books: any) => {
  const findBookTitle = books.map((book: any) => book.title);
  return findBookTitle;
};
// console.log("findTitleSecondLogic:", seceondLogicForBookitemName(books));
 
 // 3.Task: Function Composition:: 

  const squareFunction = (a:number) => {
     const squareData = a * a;
     return squareData
  }
  const dataSquare = squareFunction(2);
  // console.log(dataSquare);
const ManipulationFunction = (b:number) => {
    const MultipicationData = 2 * b;
    return MultipicationData;
} 
const dataMultication = ManipulationFunction(5);
//console.log(dataMultication);

const subtractionFunction = (p: number) => {
    const subtractionData = 5 + p;
    return subtractionData
}
const DataSubtract = subtractionFunction(8);
//console.log(DataSubtract);


// 4.Task: Sorting Objects

 const carData = [
    { make: 'Toyota', model: 'Corolla', year: 2010 },
    { make: 'Honda', model: 'Civic', year: 2005 },
    { make: 'Ford', model: 'Focus', year: 2018 },
    { make: 'BMW', model: 'X5', year: 1999 }
  ];
 // core fundamental 
//   const sortFunctionOfCar = (carData: any) =>{
//      let sortDataWithYear = [...carData];
//       for(let i = 0; i<carData.length; i++){
//         for(let j = 0; j > sortDataWithYear.length; j++){
//             if(carData[i].year < carData.year){
//                 sortDataWithYear.push(carData[i].year)
//                }
//         }
//       }  
//       return sortDataWithYear;
//   }
//console.log("sorting data for car:::",sortFunctionOfCar(carData) );
   
const sortFunctionOfCarCoreConcept = (carData: any) => {
     return carData.sort((x: any , y: any) => x.year - y.year);
}

//console.log("sortCarData",sortFunctionOfCarCoreConcept(carData));

 // problems sum for even number 

const arrayWithSum: number[] = [3, 1, 4, 2, 5];

const coreFundamentalSumEvenNumber = (arrayWithSum:number[]) => {
    let total = 0;
     for(let i =0; i<arrayWithSum.length; i++) {
        if(arrayWithSum[i] % 2 === 0){
           total = arrayWithSum[i] + total;
        }
     }
     return total;
}
// console.log(coreFundamentalSumEvenNumber(arrayWithSum));

// calling reduce method 

const reduceMethodTotalSumWithEventNumber = (arrayWithSum: number[]) =>{
     const sumOfEvernNumber = arrayWithSum.reduce((a, c) => {
        if (c % 2 ===0){
            return a + c;
        }
        return a;
     }, 0)

     return sumOfEvernNumber;
}

// console.log(reduceMethodTotalSumWithEventNumber(arrayWithSum));


// problems no 6 


const years: number[] = [1999, 2000, 2008, 1956, 2020, 2023, 2012, 2400, 1834];



const leepYearCheckingFunction = (years: number[]) => {
   return years.map((year) => {
        if(year % 400 === 0){
            return  `${year} - happy new year`
        }
        else if(year % 100 !== 0){
             return  `${year} - tomar ar biye hobe naaa`
        }
        else if (year % 4 ===0){
             return  `${year} - happy new year`
        } 
        else {
             return  `${year} - tomar ar biye hobe naaa `
        }
    }) 
}
// console.log(leepYearCheckingFunction(years));



// proble no 7 remove duplicate value with array 

const numbers: number[] = [1,2,3,3,4,3,5,6,77,4,45,7,12,11,22,12,2];

const filteringNumber = (numbers: number[]) => {
   return numbers.filter((number,indexa, element ) => {
        return element.indexOf(number) === indexa
    }
     
    )
    
}

// console.log(filteringNumber(numbers));



// problems 8 :: total array element sum and find maximum value

  const findMaximumValue = (numbers: number[]) =>{
    let max : any = numbers[0]
    numbers.map((num) => {
        if(num > max){
            max = num;
        }
        return max;
    })
    return max;
  }

 // console.log(findMaximumValue(numbers));


//  arrayWithSum.map((num, i) => console.log("sum:",num + i));

// console.log(arrayWithSum);

let total = 0;

for (let i = 0; i < arrayWithSum.length; i++) {
  total = arrayWithSum[i] + total;
}

//   console.log(total);
// find out the result here is arrayNumbers array now find out 2 index valu after sum == 9 return the index number 
// target = 9;



const twoSum = (nums:number[], target:number) =>{
  
   for(let i =0; i<nums.length; i++){
    for(let j = i + 1; j<nums.length; j++){
      if(nums[i]+ nums[j] === target){
        return [i, j]
      }
    }
     
   } 
    return [];
}

// const case1 = twoSum([2,7,11,15],9);
// const case2 = twoSum([3,2,4],6);
// const case3 = twoSum([3,3],6);
// console.log(case1, case2, case3);


// this fuction working on remove val and  total arrary remove feild include in -

const removeElement = (nums: number[], val: number) => {
  let k = nums.length
    for(let i =0; i<k; i++){
        if(nums[i] === val){
           nums[i] = nums[k -1];
           k--;
           i--;
        }
    }
 
    return k;



};



const caes1 = removeElement([3,2,2,3],3);
const caes2 = removeElement([0,1,2,2,3,0,4,2],2);




// const isPowerOfTwo = (n: number):boolean =>{
//   if(n <= 0) return false;
//   let result = 1 ; 
//   for(let i = 0; i < n)
//    if(2**n){
//     return true;
//    } else{
//      return false;
//    }
// }

// const case1 = isPowerOfTwo(6);


const reverseString = (s: string[]) =>{
    const reverseString = s.reverse();
     return reverseString;
}

const case1 = reverseString(["h","e","l","l","o"]);
const case2 = reverseString(["H","a","n","n","a","h"])
console.log(case1, case2);


