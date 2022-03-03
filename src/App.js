

function App() {

  let testArrayOne = [1,2,1];
  let testArrayTwo = [2,4,8,8];
  let testArrayThree = [4,4,1];

  function init(){
     return same(testArrayOne, testArrayThree)
  }

  function same(arrayOne,arrayTwo){
  let arrayOneS = squared(arrayOne)
  let objectOne = ObjectMaker(arrayOneS)
  let objectTwo = ObjectMaker(arrayTwo)
  return loopThroughKeys(objectOne,objectTwo)
  }

  function loopThroughKeys(objectA,objectB){
    let trueCounter = 0;
    for(const property in objectA){
      if(objectA[property] === objectB[property]){
        trueCounter ++
      }
    }
      return (trueCounter === (Object.keys(objectA).length))
  }

  function squared(arrayZ){
    return arrayZ.map((number)=>number*number)
  }

  function ObjectMaker(arrayZ){
    let objectZ = {}
    for(let i = 0;i<arrayZ.length;i++){
      if(!(objectZ[`${arrayZ[i]}`])){
        objectZ[`${arrayZ[i]}`]=1;
      } else {
        objectZ[`${arrayZ[i]}`]+=1;
      }
    }
    return objectZ
  }


  console.log(init())

  return (
    <div className="App">
      {/* {init()} */}
    </div>
  );
}

export default App;
