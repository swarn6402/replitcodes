const fs= require('fs');

function SwarnsReadFie() {
return new Promise(function(resolve) {
  fs.readFile("a.txt", "utf-8", function(err,data) {
    resolve (data);
  });
})
};

function OnDone(data) {
  console.log(data)
}

SwarnsReadFie().then(OnDone)