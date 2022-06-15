let arr = [true, true, true];
//并非每一个都是false，并且，并非每一个都是true；总之，有true，有false。
let b = !arr.every(e => e == false) && !arr.every(e => e == true);
console.log(b);

let arrInts = [1, 2, 8];
//并非每一个都大于5，并且，并非每一个都小于5；总之，有true，有false。
let b2 = !arrInts.every(e => e >5) && !arrInts.every(e => e <5);
console.log(`和5的比较：${b2}`);