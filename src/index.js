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
// const testNumber1 = 1
// const testNumber2 = 2
// const testNumber3 = 3
// const testNumber4 = 43
// const testNumber5 = 3 

// git 

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

// console.log(areThereDuplicates(1,2,6,6,7))

// const ta1 = [-7,2,3,9]
// const tn1 = 3

// const ta2 = [1,3,3,5,6,7,10,12,19]
// const tn2 = 8

// const ta3 = [-1,0,3,4,5,6]
// const tn3 = 4.1

// const ta4 = []
// const tn4 = 4

// function averagePair(arr,num){
//   let firstPointer = 0;
//   let secondPointer = 1;

//   while(firstPointer<arr.length){

//     if(
//       (((arr[firstPointer]+arr[secondPointer])/2)===num)
//       ){
//       return true
//     }

//     if(secondPointer === arr.length){
//       firstPointer++
//       secondPointer = 0
//     }

//   if(!(((arr[firstPointer]+arr[secondPointer])/2)===num)){
//     secondPointer++
//   }
 
//   }

//   return false
// }

// console.log(averagePair(ta1,tn1))
// console.log(averagePair(ta2,tn2))
// console.log(averagePair(ta3,tn3))
// console.log(averagePair(ta4,tn4))

// const w1 = "hello";
// const p1 = "hello world";

// const w2 = "sing";
// const p2 = "sting";

// const w3 = "abc";
// const p3 = "abracadabra"

// const w4 = 'abc';
// const p4 = 'acb';

// function isSubsequence(word,phrase){
//   const arr1 = word.split('');
//   const arr2 = phrase.split('');
//   let firstPointer = 0;
//   let secondPointer = 0; 

//   while(secondPointer<arr2.length){

//     if(firstPointer===(arr1.length-1)){
//       return true
//     }

//     if(arr1[firstPointer]===arr2[secondPointer]){
//       firstPointer++
//       secondPointer++
//     } else {
//       secondPointer++
//     }

//   }

//   return false
 
// }

// console.log(isSubsequence(w1,p1))

// console.log(isSubsequence(w2,p2))

// console.log(isSubsequence(w3,p3))

// console.log(isSubsequence(w4,p4))

// const arr1 = [100,200,300,400]
// const num1 = 2

// const arr2 = [1,3,2,10,23,3,1,0,20]
// const num2 = 4

// const arr3 = [-3,4,0,-2,6,-1]
// const num3 = 2

// const arr4 = [3,-2,7,-4,1,-1,4,-2,1]
// const num4 = 2

// const arr5 = [2,3]
// const num5 = 3

// function maxSubarraySum(arr,num){

//   if((num-1) === arr.length){
//     return null
//   } 

//   let totalSum = 0;

//   for(let i = 0; i<num;i++){
//     totalSum+=arr[i]
//   }

//   tempSum = totalSum

//   for(let i = (num-1); i<arr.length;i++){
  

    
//     let firstVariable = i - 1
//     let lastVariable = num + i - 1

//     if(lastVariable > arr.length-1){
//       break;
//     }
//     // console.log("first")
//     // console.log(arr[firstVariable])
//     // console.log("----")

//     // console.log("middle")
//     // console.log(arr[i])

//     // console.log("----")
//     // console.log("last")
//     // console.log(arr[lastVariable])
    
    

    
//     tempSum = tempSum - arr[firstVariable] + arr[lastVariable]
//     // console.log("--Temp Sum--")
//     // console.log(tempSum)
//     // console.log("----")

//     // console.log("--Max Sum--")
//     // console.log(totalSum)
//     // console.log("----")
  
//     totalSum = Math.max(totalSum,tempSum)

//   }

//   return totalSum


// }

// console.log(maxSubarraySum(arr1,num1))
// console.log(maxSubarraySum(arr2,num2))
// console.log(maxSubarraySum(arr3,num3))
// console.log(maxSubarraySum(arr4,num4))

// function powerZ(num,power){
//   if(power === 0){
//     return 1
//   }

//   power--;
//   return num * powerZ(num,power)
// }

// console.log(powerZ(2,4))

// function factorial(num){
//   if(num === 0) return 1;
//   return num * factorial(num -1);
// }

// // console.log(factorial(0))
// let testArray = [1,2,3,10]
// let answer = 1;

// function productOfArray(arr){
  
//   if(arr.length === 0)return 1;
//   return arr[0] * productOfArray(arr.slice(1))
// }

// console.log(productOfArray(testArray,answer))

// function recursiveRange(num){
//   if(num === 1){return 1}
//   return num + recursiveRange(num - 1)
// }

// console.log(recursiveRange(10))

// function fib(num){
//   let arr = [1,1];
//   function inner(){
//     if(arr.length === num){return arr[arr.length-1]}
//     let newNumber = arr[arr.length-1]+arr[arr.length-2]
//     arr.push(newNumber)
//     return inner(arr)
//   }
//   return inner()
// }

// console.log(fib(35))

// const testHeight = 1000;

// function overall(initialHeight){


// let seconds = 0;

// function gravity(timez){
//   return (9.8 * timez * timez / 2)
// }

// function yoyo(height,time){
//   return height - gravity(time)
// }

// for(let height = initialHeight; height>0;){
//   height = yoyo(height,seconds)
//   console.log(`this is the height ${height}`)
//   console.log(`this is the seconds ${seconds}`)
//   seconds++;
// }

// return `the ball hit the ground at ${seconds}`
// }

// console.log(overall(testHeight))

// function someRecursive(arr){
// return isOdd(arr)

// }

// function isOdd(arr){
//   while(arr.length>0){
//   if(arr[0] % 2 !== 0){
//     return true
//   }
//   console.log(arr.slice(1))
//   return isOdd(arr.slice(1))}
//   return false
// }

// const testArray1 = [4,0,8,12]

// console.log(someRecursive(testArray1))

// const testArray = [1, 2, 3, [4, 5] ]
// const testArray2 = [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]

// function flatten(arr){
//   let answer = [];
//   return inner(arr,answer)
// }

// function inner(arr,answerz){

//   if(arr.length === 0){
//     return answerz
//   }

//  if(typeof(arr[0])==="number"){
//    answerz.push(arr[0])
//    inner(arr.slice(1),answerz)
//  }

//  if(typeof(arr[0])==="object"){
//     getToNumber(arr[0],answerz)
//     inner(arr.slice(1),answerz)
// }

// return answerz

// }

// function getToNumber(obj,ans){

//   if(obj.length > 1){
//     return isNumberOrObject(obj,ans)
//   }

//   if(typeof(obj)==="number"){
//     ans.push(obj)
//     return ans
//   }

//   return getToNumber(obj[0],ans)
// }

// function isNumberOrObject(obj,answer){

//   if(obj.length === 0){
//     return
//   }

//   if(typeof(obj[0])==="number"){
//     answer.push(obj[0])
//   }else{
//     isNumberOrObject(obj[0],answer)
//   }

//   isNumberOrObject(obj.slice(1),answer)
// }



// const testArray = ['car','taco','banana'];

// function capitalizeFirst (arr) {
//   let answer = [];
//   return inner(arr,answer)
// }

// function inner(arr,answer){
//   if(arr.length === 0){
//         return answer
//       }
//   answer.push(capitalize(arr[0]))

//   return(inner(arr.slice(1),answer))
// }

// function capitalize(word){
//   return word[0].toUpperCase()+word.slice(1).toLowerCase()
// }

function nestedEvenSum () {
  // add whatever parameters you deem necessary - good luck!
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10