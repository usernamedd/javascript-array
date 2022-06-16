//使用filter
const arr = [{id: 1}, {id: 2}, {id: 3}];

// 👇️ [{id: 2}, {id: 3}]
console.log(arr.filter(obj => obj.id > 1).length);

//方法二：使用reduce

const arr2 = [{id: 1}, {id: 2}, {id: 3}];

const count = arr2.reduce((accumulator, obj) => {
  if (obj.id > 1) {
    return accumulator + 1;
  }
  return accumulator;
}, 0);

console.log(count); // 👉️ 2

