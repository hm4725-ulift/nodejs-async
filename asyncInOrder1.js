console.log("A 실행");
setTimeout(() => {
  console.log("A 실행 후, 1초 경과");
  console.log("B 실행");
}, 1000);
setTimeout(() => {
  console.log("B 실행 후, 1초 경과");
  console.log("C 실행");
}, 2000);
setTimeout(() => {
  console.log("C 실행 후, 1초 경과");
}, 3000);
