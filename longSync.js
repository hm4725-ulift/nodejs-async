function longSyncFunction() {
  /* 긴 동기 함수 */
  const nloop = 5000000000;
  let res = 0;
  for (let i = 0; i < nloop; i++) {
    res += i;
  }
  return res;
}

console.log(longSyncFunction());
