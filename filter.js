let objArray = [{
    name: "a",
    age: 10
}, {
    name: "b",
    age: 11
}];
console.log(objArray);
objArray.filter(e=>e.name=="b")[0].age=55;
console.log(objArray);