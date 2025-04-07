function findsum(n) {
  let ans=0
  for (let i=0; i<n; i++) {
    ans = ans+i
  }
  return ans;
}

let ans= findsum(100)
console.log(ans)

let ans2= findsum(1000)
console.log(ans2)