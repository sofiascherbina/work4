// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => console.log(json)); -- get 


// let object = {
//     key1:'first',
//     key2:'second'
// };
// const options = {
//     method:'POST',
//     body: JSON.stringify(object),
//     headers:{ "Content-Type":"application/json;charset=UTF-8"}
// };
// fetch('https://jsonplaceholder.typicode.com/posts', options)
//     .then(response => response.json())
//     .then(json => console.log(json));


// let object = {
//     key1: 1,
//     key2:'second',
//     body:'blablabla'
// };
// const options = {
//     method:'PATCH',
//     body: JSON.stringify(object),
//     headers:{ "Content-Type":"application/json;charset=UTF-8"}
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${object.id}`, options)
//     .then(response => response.json())
//     .then(json => console.log(json));


// const id = 2;

// let object = {
//     key1: 1,
//     key2:'second'
// };
// const options = {
//     method:'DELETE',
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, options)
//     .then(response => response.json())
//     .then(json => console.log(json));

// let btn = document.querySelector('.add');
// fetch('http://localhost:3001/students')
//     .then(response => response.json())
//     .then(json => console.log(json));

// let id = 1

// fetch(`http://localhost:3001/students/${id}`)
//     .then(response => response.json())
//     .then(json => console.log(json));

// let newStudent = {
//     id: '4',
//     name: "Jane Doe",
//     age: 20,
//     email: "jane.doe@example.com",
//     phone: "888-1234"
// }
// const options = {
//     method:'POST',
//     body: JSON.stringify(newStudent),
//     headers:{ "Content-Type":"application/json;charset=UTF-8"}
// };
// btn.addEventListener('click',()=>{
//     fetch('http://localhost:3001/students', options)
//     .then(response => response.json())
//     .then(json => {
//         console.log(json)});
// });

// let updatedStident = {
//      id: '5',
//     name: "Miku",
//     age: 25,
//     email: "miku.doe@example.com",
//     phone: "888-1234"
// }

// const optionsPUT = {
//     method:'PUT',
//     body: JSON.stringify(updatedStident),
//     headers:{ "Content-Type":"application/json;charset=UTF-8"}
// };

// fetch(`http://localhost:3001/students/${2}`, optionsPUT )
// .then(response => response.json())
// .then(json =>{
//     console.log(json)
// });


// newStudent.age = 17;
// const optionsPATCH = {
//     method:'PATCH',
//     body: JSON.stringify(newStudent),
//     headers:{ "Content-Type":"application/json;charset=UTF-8"}
// };

// fetch(`http://localhost:3001/students/${newStudent.id}`,optionsPATCH )
// .then(response => response.json())
// .then(json =>{
//     console.log(json)
// });


// let btnDel = document.querySelector('.del');
// const optionsDELETE = {
//     method:'DELETE',
// };

// btnDel.addEventListener('click',()=>{
//     fetch(`http://localhost:3001/students/${3}`, optionsDELETE)
//     .then(response => response.json())
//     .then(json => console.log(json));
// });

// fetch(`http://localhost:3001/students/?age=25`)
// .then(response => response.json())
// .then(json => console.log(json));

// fetch(`http://localhost:3001/students/?name=${'Miku'}`)
// .then(response => response.json())
// .then(json => console.log(json));

// fetch(`http://localhost:3001/students/?email=${"john.doe@example.com"}`)
// .then(response => response.json())
// .then(json => console.log(json));

// fetch(`http://localhost:3001/students/?phone=${"888-1234"}`)
// .then(response => response.json())
// .then(json => console.log(json));

// let studentName;
// let studentAge ;
// let studentMark;
// let list = document.querySelector('.list');


// btn.addEventListener('click',(event)=>{
//     event.preventDefault();
//     studentName = prompt('type name');
//     studentAge = prompt('type age');
//     studentMark= prompt('type mark');
//     let studentId = Math.floor(Math.random() * 10) + 1;

//    let newStudent = {
//     id:studentId,
//     name:studentName,
//     age:studentAge,
//     mark:studentMark
// }
// const options = {
//     method:'POST',
//     body: JSON.stringify(newStudent),
//     headers:{ "Content-Type":"application/json;charset=UTF-8"}
// };

//     fetch('http://localhost:3001/students', options)
//     .then(response => response.json())
//     .then(json => {
//         console.log(json)});
// });





let btn = document.querySelector('.add');
async function asyncFunGet(){
    const response = await fetch('http://localhost:3001/students/')
    return await response.json();
} 
console.log(asyncFunGet());

let studentId = Math.floor(Math.random() * 5) + 1;
async function asyncFunGetId() {
    const response = await fetch(`http://localhost:3001/students/${studentId}`)
    return await response.json();
}
console.log(asyncFunGetId());

let newStudent = {
    id: studentId ,
    name: "Jane Doe",
    age: 20,
    email: "jane.doe@example.com",
    phone: "900-6090"
}
const options = {
    method:'POST',
    body: JSON.stringify(newStudent),
    headers:{ "Content-Type":"application/json;charset=UTF-8"}
};
async function asyncFunPost() {
    const response = await fetch(`http://localhost:3001/students/`, options)
    return await response.json();
}
btn.addEventListener('click',()=>{
   console.log(asyncFunPost());
});

let updatedStident = {
    id: '5',
    name: "Miku",
    age: 25,
    email: "miku.doe@example.com",
    phone: "888-1234"
}

const optionsPUT = {
    method:'PUT',
    body: JSON.stringify(updatedStident),
    headers:{ "Content-Type":"application/json;charset=UTF-8"}
};
async function asyncFunPut() {
    const response = await fetch(`http://localhost:3001/students/${1}`, optionsPUT)
    return await response.json();
}
console.log(asyncFunPut());

newStudent.age = 17;
const optionsPATCH = {
    method:'PATCH',
    body: JSON.stringify(newStudent),
    headers:{ "Content-Type":"application/json;charset=UTF-8"}
};
async function asyncFunPatch() {
    const response = await fetch(`http://localhost:3001/students/${studentId}`, optionsPATCH)
    return await response.json();
}
console.log(asyncFunPatch());

let btnDel = document.querySelector('.del');
const optionsDELETE = {
    method:'DELETE',
};

btnDel.addEventListener('click',()=>{
    async function asyncFunDel() {
    const response = await fetch(`http://localhost:3001/students/${studentId}`, optionsDELETE)
    return await response.json();
}
     asyncFunDel();
   console.log(asyncFunGet());
   
});