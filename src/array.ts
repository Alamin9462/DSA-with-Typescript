const TwoDArry: number[][] = [
    [1, 2, 3, 0],
    [9, 7, 4, 8],
    [10, 44, 66, 99],
    [777, 555, 77],
  ];
  // console.log(TwoDArry[3][2], TwoDArry[0][2], TwoDArry[2][3]);
  
  const ThreeDArray: number[][][] = [
    [
      [0, 1, 2, 3, 4],
      [2, 21, 22, 3, 9],
      [22, 221, 222, 323, 954],
    ],
    [
      [22, 12, 22, 33, 43],
      [99, 21, 23, 33, 95,66],
    ],
    [
      [69, 7, 70, 11, 66],
      [66, 77, 777, 995, 55],
    ],
  ];
  
  const marged = ThreeDArray[1][0].concat(ThreeDArray[2][1][4])
  
  const addedItem = (marged.push(10));
  
  // console.log(addedItem);
  // console.log(marged);
  
  const arrayWithSum : number [] = [ 3, 1, 4, 2, 5] 
  //  arrayWithSum.map((num, i) => console.log("sum:",num + i));
  
  // console.log(arrayWithSum);
  
  let total = 0
  
  for(let i = 0 ; i < arrayWithSum.length;  i++ ){
     total = arrayWithSum [i]+ total;
  
    
  } 
  console.log(total);