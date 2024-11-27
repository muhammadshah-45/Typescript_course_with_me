import axios from "axios";
function greet(name: any) {
    console.log(`Hello, ${name}!`)
}
greet(343);


const url = 'https://jsonplaceholder.typicode.com/todos/1';


interface Todo {
    id:number;
    title: string;
    completed: boolean;
}
axios.get(url).then((response) => {
    //Response.data has properties of:
    //id
    //title
    //completed
   const todo = response.data as Todo;
   const id = todo.id;
   const title = todo.title;
   const completed = todo.completed;
   console.log(`
     The Todo with ID: ${id}
     Has a title of: ${title}
     Is it finished? ${completed}
    `)
});


type Student = {
  name:string;
  age: number;
}

type StudentData ={
    subject : string;
    status: boolean;
}

type allData = Student & StudentData
const BioData : allData = {
    name: "Muhammad",
    age: 34,
    status:false,
    subject:"computer science"
}
console.log(BioData)