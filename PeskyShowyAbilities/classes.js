class Animal {
  constructor(thename, legcount, speaks) {
  this.name= thename;
  this.legcount= legcount;
  this.speaks= speaks;
}

speak() {
  console.log("The animal speaks "+ this.speaks);
 }
}

let dog= new Animal("dog", 4, "bhow bhoww");
let cat= new Animal("cat", 4, "meow meow");

dog.speak();