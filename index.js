// Your code here
<<<<<<< HEAD
function mapToNegativize(sourceArray){
    return sourceArray.map(x => x * -1);
}

function mapToNoChange(sourceArray){
    return sourceArray.map(x => x);
}

function mapToDouble(sourceArray){
    return sourceArray.map(x => x*2);
}

function mapToSquare(sourceArray){
    return sourceArray.map(x => x*x);
}

function reduceToTotal(sourceArray, startingPoint = 0){
    const reducer = function(accumulator, currentValue){ return accumulator + currentValue }

    return sourceArray.reduce(reducer, startingPoint)
}
function reduceToAllTrue(sourceArray){

    const reducer = function(accumulator, currentValue){
        if(Boolean(accumulator)===true && Boolean(currentValue)===true)
          return true;
        else {
          return false;
        }
    }
    return sourceArray.reduce(reducer);
}
function reduceToAnyTrue(sourceArray){

    const reducer = function(accumulator, currentValue){
        if(Boolean(accumulator)===true || Boolean(currentValue)===true)
          return true;
        else {
          return false;
        }
    }
    return sourceArray.reduce(reducer);
}
=======
let sourceArray=[2,4,6];
const mapToNegativize = sourceArray.map(x => x * -1);
const mapToNoChange = sourceArray.map(x => x );
const mapToDouble = sourceArray.map(x => x * 2);
const mapToSquare = sourceArray.map(x => x * x);
console.log(mapToSquare);

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const reduceToTotal=sourceArray.reduce(reducer, 0);
>>>>>>> d846831ac8711f964bf8e38a8322c89a4ec5d5c1
