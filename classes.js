class Animal {
  constructor(name, legs, sound) {
    this.name= name;
    this.legs= legs;
    this.sound= sound;
  }
  speak(){
    console.log("hi there "+this.sound)
  }
}

let dog= new Animal("dog", 4, "bhow bhow")
let cat= new Animal("cat", 4, "meow meow")
dog.speak()