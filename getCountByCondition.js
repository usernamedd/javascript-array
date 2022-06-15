let arr=[false,true,false,false,true];
let count = arr.filter(e=>e===1).length;//0
let count2 = arr.filter(e=>e===false).length;//3
console.log(`${count2}--${count}`);