// function delayedPromise(value, delay){
//      return new Promise((resolve) =>{
//         setTimeout(()=>{
//             resolve(value);
//         }, delay);
//     });
// };
// Promise.all([
//     delayedPromise('1', 100),
//     delayedPromise('2', 300),
//     delayedPromise('3', 500),
//     delayedPromise('4', 50),
//     delayedPromise('5', 900)
// ]).then(result=> console.log(result));


// function randomDelay(value, delay){
//      return new Promise((resolve) =>{
//         setTimeout(()=>{
//             resolve(value);
//         }, delay);
//     });
// };
// Promise.race([
//     randomDelay('first', 3000),
//     randomDelay('second', 4095),
//     randomDelay('third', 5000),
//     randomDelay('fourth', 1000),
//     randomDelay('fifth', 2000)
// ]).then(result=> console.log(result));