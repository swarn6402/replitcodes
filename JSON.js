const users= '{"name": "Swarn", "age": "20", "gender": "male"}'

const user= JSON.parse(users)
console.log(user["gender"])