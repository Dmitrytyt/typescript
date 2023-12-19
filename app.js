"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _4_dummy_api_1 = require("./4-dummy-api");
const resPromise = (0, _4_dummy_api_1.getData)('https://dummyjson.com/users');
resPromise.then(value => console.log(value));
// console.log(resPromise.then((value) => {
//     console.log(value);
// }));
