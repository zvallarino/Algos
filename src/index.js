// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App.js'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// Anagrams //

// let test1 = "ddog"
// let test2 = "godd"

// function objectMaker(word){
//   let letters = word.split('')
//   let objectA = {}
//   for(let i = 0; i<letters.length;i++){
//     if((!(objectA[`${letters[i]}`]))){
//       objectA[`${letters[i]}`] = 1
//     }else{
//       objectA[`${letters[i]}`]+=1
//     }

//   }
//   return objectA
// }

// function anagrams(word1,word2){
//   let objectA = objectMaker(word1);
//   let objectB = objectMaker(word2);
//   for(const property in objectA){
//     if(objectA[property] !== objectB[property])
//     {return false}
//   }
//   return true
// }

// Pointers //

// Left and Right Pointers


// function sumZero(orderedArray){

//   for(let i = 0;i<orderedArray.length;i++){

//     for(let j = i+1; j<orderedArray.length;j++){
//       if(orderedArray[i]+orderedArray[j] === 0){
//         return [orderedArray[i],orderedArray[j]]
//       }
//     }

//   }
// }

// console.log(sumZero(testCase3))


// const testCase1 = [1,1,2,3,3]
// const testCase2 = [1,2,3,4,4,4,7,7,12,12,12,13]
// const testCase3 = []
// const testCase4 = [-2,-1,-1,0,1]
// const testCase5 = [1,2,3,4,4,4]

// function countUniqueNumbers(arrayZ){
//   let firstPointer = 0;
//   let secondPointer = 1;


//   while(secondPointer<arrayZ.length){
//     if(arrayZ[firstPointer] === arrayZ[secondPointer])
//     {
//       secondPointer ++
//     } else{
//       firstPointer ++
//       arrayZ[firstPointer] = arrayZ[secondPointer]
//       secondPointer ++
//     }
//   }

//  return firstPointer+1

// }

// console.log(countUniqueNumbers(testCase1))
// console.log(countUniqueNumbers(testCase2))
// console.log(countUniqueNumbers(testCase3))
// console.log(countUniqueNumbers(testCase4))
// console.log(countUniqueNumbers(testCase5))


// const testArray1 = [1,2,5,2]
// const testNumber1 = 2

// const testArray2 = [1,2,5,2,8,1,5]
// const testNumber2 = 4

// const testArray3 = [4,2,1,6]
// const testNumber3 = 1

// const testArray4 = [4,2,1,6,2]
// const testNumber4 = 4

// const testArray5 = [];
// const testNumber5 = 4; 

// function maxSubArray(testArray, testNumber){
// loopthrough(testArray,testNumber)
// }

// function loopthrough(testArray,testNumber){
//   if(testArray.length === 0||testNumber === 0){
//     return null
//   }

//   let sumZ = [];
//   let answer = [];
  
//   for(let i = 0; i < testArray.length; i++){
//     sumZ.push([testArray.slice(i,i+testNumber).reduce((a, b) => a + b, 0)])
//     answer = grabHighestNumber(sumZ)
//   }
//   return answer;
// }

// function grabHighestNumber(testArray){
//   let highgestNumber = -Infinity;

//   for(let i = 0; i < testArray.length; i++){
//       if(highgestNumber<testArray[i]){
//         highgestNumber = testArray[i]
//       }
//   }
  
//   return highgestNumber
// }


// console.log(loopthrough(testArray1,testNumber1))
// console.log(loopthrough(testArray2, testNumber2))
// console.log(loopthrough(testArray3, testNumber3))
// console.log(loopthrough(testArray4, testNumber4))
// console.log(loopthrough(testArray5, testNumber5))

// function maxSubarraySum(arr,num){
//   let maxSum = 0;
//   let tempSum = 0;

//   // gets the first numbers in the loop
//   for(let i = 0; i < num; i++){
//     maxSum += arr[i]
//   }

//   tempSum = maxSum;

//   //minus the index before and adds the index after
//   for(let i = num; i < arr.length; i++){
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }

//   return maxSum
// }

// console.log(maxSubarraySum(testArray1,testNumber1))

// const testArray1 = [1,2,5,2]
const testNumber1 = 1
const testNumber2 = 2
const testNumber3 = 3
const testNumber4 = 43
const testNumber5 = 3 

git 

  // for(let property in arguments){
  //   if(arguments[property]>=2){
  //     return "Got it"
  //   }
  //   else "you good"
  // }
  // let objectOne = objectBuilder(digitOne);
  // return objectOne



// function objectBuilder(digits){
//   let arrayZ = [digits]
//   let objectT = {}
//   for(let part of arrayZ){


//     if(!(objectT[`${part}`]))
//     {
//   objectT[`${part}`] = 1
//   } else if ( objectT[`${part}`] >= 1){
//     return "there are duplicates"
//   }
//   {
//     objectT[`${part}`] += 1
//   }}

//   return objectT
// }

console.log(areThereDuplicates(1,2,6,6,7))