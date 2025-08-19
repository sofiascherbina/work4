// let promise = new Promise((resolve, reject)=>{
//     resolve('working');
// });
// promise.then(result=>{
//     console.log(result);
// });
// promise.catch(result=>{
//     console.log(result);
// });


// let promise = new Promise((resolve, reject)=>{
//     const success = false;
//     if(success){
//         resolve('working');
//     }
//     else{
//         reject('error');
//     }
// });
// promise.then(result=>{
//     console.log(result);
// });
// promise.catch(result=>{
//     console.log(result);
// });
// promise.finally(()=>{
//     console.log('promise is working');
// });

// let secondPromise = new Promise((resolve)=>{
//     resolve(2);
// });
// secondPromise.then(result=>{
//     console.log(result);
//     return result*2

// }).then(result=>{
//     console.log(result);
//     return result+2

// }).then(result=>{
//     console.log(result);
//     return result-2

// })

// function delay(ms) {
//     return new Promise((resolve)=>{
//          setTimeout(resolve,ms);
//   });
// }; 
// delay(3000).then(() => alert('виконалось через 3 секунди'));

// let arr = [2,3,6,8,10];
// function message(){
//     return new Promise((resolve,reject)=>{
//          if(arr.every(num => num%2 === 0)){
//             resolve('всі числа є парними');
//         }
//         else{
//             reject('error');
//         }
//   });
// }; 
// message().then(result=>{
//     console.log(result);
// });
// message().catch(result=>{
//     console.log(result);
// });

// const people = [
//     { name: "John", age: 25 },
//     { name: "Anna", age: 30 },
//     { name: "Peter", age: 40 },
//     { name: "Mary", age: 35 },
//   ];

//   function sortArr(people){
//     return new Promise((resolve)=>{
//       let sort = people.map(per => per.name).sort();
//       resolve(sort);
//     })
//   }
// sortArr(people).then(result => console.log(result));


// let num1 = parseInt(prompt('type first num'));
// let num2 = parseInt(prompt('type second num'));
//  function showSum(){
//     return new Promise((resolve,reject)=>{
//      let sum = num1 + num2;
//      if(isNaN(sum)){
//          reject();
//      }
//      else{
//         resolve(sum)
//      }
//     })
//   }
// showSum().then(result => console.log(result));
// showSum().catch(() => alert("Неправильні аргументи"));

// let randomNum = Math.floor(Math.random()*2)+ 1;
// function randomPromise(){
//     return new Promise((resolve,reject)=>{
//         if(randomNum === 1){
//             resolve("Проміс виконано");
//         }
//         else{
//             reject("Помилка проміса");
//         }
//     })
// }
// randomPromise().then(result => console.log(result));
// randomPromise().catch(result => console.log(result));
// randomPromise().finally(() => console.log("Робота з промісом завершена" ));