const events = require('events');
const empty_array_emmiter = new events.EventEmitter();

empty_array_emmiter.on('empty_array', () => { 

    console.error('The array is empty');

})
module.exports.empty_array_emmiter = empty_array_emmiter;