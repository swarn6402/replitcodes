function findSum(n) {
let ans= 0  
  for (let i = 0; i < n; i++) {
    ans = ans +i;
  }
  console.log (ans)
}

function findSumTill100() {
  const result= findSum(100)
  return result
}

setTimeout(findSumTill100, 1000)
console.log("Hello there")
