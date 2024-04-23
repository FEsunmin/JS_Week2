// 구조분해할당 :  destructuring(de + structure + ing)
// de = not
// structure = 구조
// 배열이나, 객체의 속성

// 1. 배열의 경우
let [value, value2] = [1, "new"];
console.log("1", value);
console.log("2", value2);
let arr = ["value1", "value2", "value3"];
let [a, b, c, d] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// 2. 객체인 경우
let {name, age} = {
    name: "nbc",
    age: 30,
}

console.log("name => " + name);
console.log("age => " + age);

// 새로운 이름으로 할당
let user = {
    name: "nbc",
    age: 30,
}

let {name: newName, age: newAge} = user;
console.log("newName => ", newName);
console.log("newAge => ", newAge);


let user2 = {
    name2: "nbc",
    age2: 30,
}


let {name2, age2, birthday = "today"} = user2;
console.log(name2);
console.log(age2);
console.log(birthday);