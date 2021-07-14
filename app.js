const statistics = require('./statistics');
console.log("There are statistics Metrics:");
console.log(statistics);

const arr1 = [1,2,3,4];
const arr2 =[];
getArrayData(arr1);
getArrayData(arr2);

function getArrayData(arr){
    console.log('The array is: ');
    console.log(arr);

    let arrayLength = statistics.getLength(arr);
    console.log(`The array length is: ${arrayLength}`);

    let arrayFirstVar = statistics.getFirst(arr);
    console.log(`The array first var is: ${arrayFirstVar}`);

    let arrayLastVar = statistics.getLast(arr);
    console.log(`The array last var is: ${arrayLastVar}`);
}