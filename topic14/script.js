// let promise1 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('promise1')
//     },300)
// });
// let promise2 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('promise2')
//     },100)
// });
// let promise3 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('promise3')
//     },200)
// });
// Promise.all([promise1, promise2, promise3]).then(result =>{
//     console.log(result);
// });

// const slow = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('slow')
//     },300);
// });
// const fast = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('fast')
//     },100);
// });
// Promise.race([slow,fast]).then(result =>{
//     console.log(result);
// });


// let promise1 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('promise1')
//     },300)
// });
// let promise2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject('promise2')
//     },200)
// });
// let promise3 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('promise3')
//     },400)
// });
// Promise.any([promise1, promise2, promise3]).then(result =>{
//     console.log(result);
// });

// let promise1 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('victory')
//     },6000)
// });
// const timeout = 5000;
// function raceTimeout(promise, ms){
//     let timer = new Promise((reject)=>{
//         setTimeout(()=>{
//             reject(console.log('error'))
//         },ms)
//     })
//     return Promise.race([promise1,timer])
// }
// raceTimeout(promise1,timeout).then((data) => {
// console.log(data); 
//   })
// raceTimeout(promise1,timeout).catch((error) => {
// console.error(error);
//   });

// const errorMessage = 'Something went wrong';
// function rejectWithError(errorMessage){
//     return new Promise((resolve,reject)=>{
//         reject(errorMessage);
//     });
// };
// rejectWithError(errorMessage).catch((error) => {
//     console.error(error); // Помилка "Something went wrong"
// });



// console.log('a');
// setTimeout(()=>{
//     console.log('b');
// },0);
// Promise.resolve().then(()=>{
//     console.log('c');
// });
// console.log('d');


// let promise1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject('first')
//     },300);
//     //     setTimeout(()=>{
//     //     resolve('first')
//     // },300);
// });
// let promise2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject('second')
//     },100);
// });
// let promise3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject('third')
//     },200);
// });
// Promise.any([promise1, promise2, promise3]).catch(result =>{
//     console.error(result);
// }).then(result=>{
//     console.log(result);
// });


// let promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject('error');
//     },2000)
// });
// promise.catch(result =>{
//     console.error(result);
// });

let promise = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(2);
    },100)
});
promise.then(result =>{
    console.log(result);
    return result
}).then(result=>{
    let newNum = result *3
    console.log(newNum);
});



let del1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('A');
    },100)
});
let del2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('B');
    },200)
});

let del3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('C');
    },50)
});
Promise.all([del1,del2,del3]).then(result =>{
    console.log(result);
});
