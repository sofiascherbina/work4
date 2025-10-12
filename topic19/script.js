// function fetchFunc (str){
// try {
//     let number  = parseInt(str);
//     if(typeof number !== 'number'){
//         throw new Error ('Not a number');
//     }
//     return number
// }
// catch {
//     return null
// }
// }
// let text = 'asdfgh';
// console.log(fetchFunc(text));


// let object = {
//     name : 'Miku',
//     age : 1
// }
// function validateUser(obj){
//     try{
//         if(obj.age < 18){
//             throw new Error ('age must be >= 18');
//         }
//         return obj.age
//     }
//     catch{
//         return "age must be >= 18"
//     }
// }
// console.log(validateUser(object));

// class DividedByZeroError extends Error{
//     constructor(error){
//         this.error = error;
//     }
// }
// function divide(a,b){
//     try{
//         if(b === 0){
//             throw new DividedByZeroError();
//         }
//         return a / b
//     }
//     catch{
//         return 'не можна ділити на 0'
//     }
// }
// console.log(divide(10,5));


