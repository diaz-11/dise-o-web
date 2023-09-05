let pares = [1, 2, 3, 4, 5, 6];

function sumarPares(par) {
  let numbpares = 0;
  for (let i = 0; i < par.length; i++) {
    if (par[i] % 2 === 0) {
      numbpares = numbpares + par[i];
    }
  }
  console.log(numbpares);
}

sumarPares(pares);
