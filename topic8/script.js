// const json = '{"name" : "sofia", "age" : "16", "height" : "165"}';
// const sofia = JSON.parse(json);
// console.log(sofia);
// const obj = {
//     name : "sofia", 
//     age : 16,
//     height : 165
// }
// const objJson = JSON.stringify(obj);
// console.log(objJson);


// const json  = '{"name" : "Haunting Adeline", "aughtor" : "H.D. Carlton ", "year" : "2021", "genres" : "Romance , Thriller , Suspense"}';
// const book = JSON.parse(json);
// console.log(book);
// const obj = {
//     name : "Haunting Adeline", 
//     aughtor:"H.D. Carlton ",
//    year : 2021,
//    genres : "Romance , Thriller , Suspense"
// }
// const objJson = JSON.stringify(obj);
// console.log(objJson);

// const nameInp = document.querySelector('.name');
// const ageInp = document.querySelector('.age');
// let btn = document.querySelector('.btn');


// btn.addEventListener('click', ()=>{
//     const json = `{"name" : "${nameInp.value}", "age" : "${ageInp.value}"}`;
//     const user = JSON.parse(json);
//     console.log(user);

//     const obj = {
//     name : nameInp.value, 
//     age:ageInp.value
// }
// const objJson = JSON.stringify(obj);
//     console.log(objJson);
// });

// const fs = require('fs');
// function readFile (fileName){
//     const data = fs.readFileSync(fileName, 'utf-8');
//     const example = JSON.parse(data);
//     console.log("fine");
//     return example

// };
// readFile('user.json');
// console.log(readFile('user.json'));

//second part

// const fs = require('fs');
// const obj  = `[
// {
//     "title" : "Lemon Herb Grilled Salmon", 
//     "price": "$17.95",
//     "description":"tasty", 
//     "ingredients":["Salmon filletLemon juice Olive oil Garlic Rosemary, thyme, dill Salt, black pepper Broccoli, carrots Potatoes, butter, cream"]
// },
// {
//     "title" : "Truffle Mushroom Pasta", 
//     "price": " $14.50", 
//     "description":"tasty", 
//     "ingredients":["Fettuccine Cream Parmesan cheese Truffle oil Garlic"]
// },
// {
//     "title" : "Spicy Chicken Tacos", 
//     "price": "$12.25",
//     "description":"tasty", 
//     "ingredients":["Chicken breast Paprika, cayenne, cumin, Flour tortillas, Avocado, Tomato, red onion, cilantro, lime (for pico)"]
// }
// ]`;
// const menu = JSON.parse(obj);
// console.log(menu);

// try{
//     const shos = JSON.parse(obj);
//     console.log('correct');
    
// }
// catch(error){
//     console.error('kapec', error.message);
// }
// let menu = JSON.stringify(obj)
// fs.writeFile('menu.json', obj, (error)=>{
//     if(error){
//         console.log('kapec');
//     }
//     else{
//         console.log('cool');
//     }
// })

// const fs = require('fs');
const students = `[
{
    "name" : "veronika",
    "surname" : "lubimaya",
    "marks" : ["12", "10", "11", "12"]
},
{
    "name" : "sofia",
    "surname" : "yakas",
    "marks" : ["10", "10", "11", "10"]
}
]`
try{
    const obj = JSON.parse(students);
    console.log('students');
    console.log(obj );
    
}
catch(error){
    console.error('kapec', error.message);
}


// let list = JSON.stringify(students)
// fs.writeFile('students.json', students, (error)=>{
//     if(error){
//         console.log('kapec');
//     }
//     else{
//         console.log('students are cool');
//     }
// })