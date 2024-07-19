console.log("A 실행");
setTimeout(() => {
  console.log("A 실행 후, 1초 경과");
  console.log("B 실행");
  setTimeout(() => {
    console.log("B 실행 후, 1초 경과");
    console.log("C 실행");
    setTimeout(() => {
      console.log("C 실행 후, 1초 경과");
    }, 1000);
  }, 1000);
}, 1000);

function longSyncFunction() {
  /* 긴 동기 함수 */
  const nloop = 5000000000;
  let res = 0;
  for (let i = 0; i < nloop; i++) {
    res += i;
  }
  return res;
}
longSyncFunction();
