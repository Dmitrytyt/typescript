import { getData } from "./4-dummy-api";

const resPromise = getData('https://dummyjson.com/users');
resPromise.then(value => console.log(value));

// console.log(resPromise.then((value) => {
//     console.log(value);
// }));
