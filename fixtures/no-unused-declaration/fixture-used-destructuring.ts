import "./module";

const instance = { property: 42 };
const array = [54];

console.log(instance, array);

const { property } = instance;
const [element] = array;

console.log(property, element);