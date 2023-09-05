let words = ["gordo", "palabras", "loco"];

let word = "loco";

function buscarPalabras(words, word) {
  const indicePalabra = words.index_6(word);
  let palabras = [];
  for (let word of words) {
    if (word.lenght > indicePalabra) {
      palabras.push(palabras);
    }
  }

  console.log(palabras);
}

buscarPalabras(words, word);
