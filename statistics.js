const emmitter = require('./Emmiter');
function getLength(arr){
    return arr.length;
}
function getFirst(arr){
    if (getLength(arr) == 0){
        const msg = 'There is no first var';
        emmitter.empty_array_emmiter.emit('empty_array');
        return msg;
       
    }
    else{
        return arr[0];
    }
     
}
function getLast(arr){
    if (getLength(arr) == 0){
        const msg = 'There is no last var';
        emmitter.empty_array_emmiter.emit('empty_array');
        return msg;
       
    }
   else{
    return arr[arr.length-1];
   }
}

module.exports.getLength = getLength;
module.exports.getFirst= getFirst;
module.exports.getLast= getLast;