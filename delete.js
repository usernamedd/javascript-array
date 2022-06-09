let objArray = [{
    name: "a",
    age: 10
}, {
    name: "b",
    age: 11
},{
    name: "c",
    age: 11
}];
console.log(objArray);
let index = objArray.findIndex(e => e.name == "b");
objArray.splice(index,1);
console.log("删除后");
console.log(objArray);