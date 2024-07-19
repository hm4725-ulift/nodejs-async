let turn = 0;
console.log(++turn);
setTimeout(() => {
  console.log(++turn);
  setTimeout(() => {
    console.log(++turn);
    setTimeout(() => {
      console.log(++turn);
      setTimeout(() => {
        console.log(++turn);
        setTimeout(() => {
          console.log(++turn);
          setTimeout(() => {
            console.log(++turn);
            setTimeout(() => {
              console.log(++turn);
              setTimeout(() => {
                console.log(++turn);
                setTimeout(() => {
                  console.log(++turn);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
