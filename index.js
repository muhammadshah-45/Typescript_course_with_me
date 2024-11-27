"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet(343);
const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then((response) => {
    //Response.data has properties of:
    //id
    //title
    //completed
    const todo = response.data;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    console.log(`
     The Todo with ID: ${id}
     Has a title of: ${title}
     Is it finished? ${completed}
    `);
});
const BioData = {
    name: "Muhammad",
    age: 15,
};
console.log(BioData);
