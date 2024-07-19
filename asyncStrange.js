console.log("start");
setTimeout(() => {
  /* 현재 실행 가능한 동기 함수가 모두 실행된 후에, 콜백 함수 실행 가능 */
  console.log("hello");
}, 0);
console.log("end");
