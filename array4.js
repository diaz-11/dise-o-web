const str1 = ["angie", "taylor", "amor(MATI)"];
let vf = false;
function terminanEnA(a) {
  for (let letra of a) {
    if ([letra.length - 1] === "a") vf = true;
  }
  console.log(vf);
}
