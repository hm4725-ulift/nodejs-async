const start = Date.now();

setTimeout(() => {
  /* 비동기 함수는 먼저 요청했다고, 먼저 처리되는 것이 아님 */
  console.log("setTimeout(()=>{}, 3000);");
  console.log("  예상 소요 시간:", 3000);
  console.log("  실제 소요 시간:", Date.now() - start);
}, 3000);

setTimeout(() => {
  /* 현재 실행 가능한 동기 함수가 모두 실행된 후에, 콜백 함수 실행 가능 */
  console.log("setTimeout(()=>{}, 2000);");
  console.log("  예상 소요 시간:", 2000);
  console.log("  실제 소요 시간:", Date.now() - start);
}, 2000);

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
