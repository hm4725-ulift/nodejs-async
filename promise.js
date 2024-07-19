let turn = 0;
function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(++turn);
    }, 1000);
  });
}

console.log(++turn);
getPromise()
  .then((v) => {
    console.log(v);
    return getPromise();
  })
  .then((v) => {
    console.log(v);
    return getPromise();
  })
  .then((v) => {
    console.log(v);
    return getPromise();
  })
  .then((v) => {
    console.log(v);
    return getPromise();
  })
  .then((v) => {
    console.log(v);
    return getPromise();
  })
  .then((v) => {
    console.log(v);
    return getPromise();
  })
  .then((v) => {
    console.log(v);
    return getPromise();
  })
  .then((v) => {
    console.log(v);
    return getPromise();
  })
  .then((v) => {
    console.log(v);
  });
