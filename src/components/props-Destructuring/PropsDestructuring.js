let user={name:'sachin',age:'30',add:'mumbai'};

//old way of accessing  object data
// let a=user.name;
// let b=user.age;
// let c=user.add;
//console.log(a,b,c);

//new way
let {name,age,add}=user //object keyName should be exact to newName variable and also we can change the place of variable
console.log(name,age,add);

//OR

let {name:a,age:b,add:c}=user //we can assign to new name variable
console.log(a,b,c);

//the concept can is applied in UserCard component of props .
