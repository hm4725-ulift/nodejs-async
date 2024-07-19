function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

async function main() {
  let turn = 0;
  console.log(++turn);
  await wait();
  console.log(++turn);
  await wait();
  console.log(++turn);
  await wait();
  console.log(++turn);
  await wait();
  console.log(++turn);
  await wait();
  console.log(++turn);
  await wait();
  console.log(++turn);
  await wait();
  console.log(++turn);
  await wait();
  console.log(++turn);
  await wait();
  console.log(++turn);
}

main();
