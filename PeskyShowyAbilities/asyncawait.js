function SwarnsAsyncFunction() {
  let p = new Promise(function(resolve) {
    resolve("Hello there");
  });
  return p;
}

async function main() {
  let value = await SwarnsAsyncFunction();
  console.log(value);
}

main();