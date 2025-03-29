function CalculateSum() {
  let a=0
  for(let i=0; i<10000000; i++) {
    a=a+i;
  }
return a;
}

const beforeDate = new Date();
const befroreTimeinMS = beforeDate.getTime();
CalculateSum()

const afterDate = new Date();
const afterTimeinMS = afterDate.getTime();

console.log(afterTimeinMS- befroreTimeinMS)
