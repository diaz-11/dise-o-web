const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music", "sports"],
};

const { weight = 70, height = 180 } = person;
console.log(weight, height);

//actividad 1
//se imprimira 70 y 180, por que son los valores que

//2- ¿Qué se imprimirá en la consola al ejecutar el siguiente código? Y por que?

const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music", "sports"],
};

const { age: personAge } = person;
console.log(age);
//se imprime la edad, por valor de defecto es 30

//3- ¿Cómo se llama el atajo que nos permite recuperar el valor de una propiedad de un objeto?
// el atajo que nos permite recuperar un valor de un objeto es partner
