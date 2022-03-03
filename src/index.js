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


const testCase1 = [1,1,2,3,3]
const testCase2 = [1,2,3,4,4,4,7,7,12,12,12,13]
const testCase3 = []
const testCase4 = [-2,-1,-1,0,1]
const testCase5 = [1,2,3,4,4,4]

function countUniqueNumbers(arrayZ){
  let firstPointer = 0;
  let secondPointer = 1;


  while(secondPointer<arrayZ.length){
    if(arrayZ[firstPointer] === arrayZ[secondPointer])
    {
      secondPointer ++
    } else{
      firstPointer ++
      arrayZ[firstPointer] = arrayZ[secondPointer]
      secondPointer ++
    }
  }



 return firstPointer+1

}

console.log(countUniqueNumbers(testCase1))
console.log(countUniqueNumbers(testCase2))
console.log(countUniqueNumbers(testCase3))
console.log(countUniqueNumbers(testCase4))
console.log(countUniqueNumbers(testCase5))