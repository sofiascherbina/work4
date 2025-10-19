// sync function consistently(){
//     const r1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const a1 = await r1.json();
//     const r2 = await fetch('https://jsonplaceholder.typicode.com/todos/2');
//     const a2 = await r2.json();
//     return [a1,a2];
// }
// console.log(consistently());

// async function fast(){
//     const [r3,r4] = await Promise.all([fetch('https://jsonplaceholder.typicode.com/todos/3'), fetch('https://jsonplaceholder.typicode.com/todos/4')]);
//     return Promise.all([r3.json(), r4.json()]);
// }
// console.log(fast());



// const get = (name,ms)=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>resolve(name),ms);
//     });
// };

// async function consistently(){
//     console.time('slow');
//     const a = await get('a', 800);
//     const b = await get('b', 800); 
//     console.timeEnd('slow');
//     return [a,b];
// }
// console.log(consistently());

// async function fast(){
//     console.time('fast');
//     const [a1,b1] = await Promise.all([get('a', 800), get('b', 800)]);
//     console.timeEnd('fast');
//     return [a1,b1]
// }
// console.log(fast());



// const getA = () => new Promise(res => setTimeout(() => res('A'), 800));
// const getB = () => new Promise(res => setTimeout(() => res('B'), 800));

// async function runSequential() {
//   console.time('seq');
//   const a = await getA();   // чекає 800мс
//   const b = await getB();   // потім ще 800мс
//   console.timeEnd('seq');   // ~1600мс
//   console.log(a, b);
// }

// async function runParallel() {
//   console.time('par');
//   const [a,b] = await Promise.all([getA(),getB()]);
//   // TODO: зроби так, щоб getA і getB стартували разом
//   // Поверни обидва результати одним очікуванням
//   console.timeEnd('par');   // очікуємо ~800мс
//   return [a,b];
// }
// runSequential();
// runParallel();


// const api = (name, ms, failProb = 0.3) => {
//      return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve((name),ms)
//             reject((failProb),ms)
//         }
//         );
//     });
// }
// const tasks = [
//   () => api('A', 800),
//   () => api('B', 600),
//   () => api('C', 700),
//   () => api('D', 500),
// ];
// async function runAllSafe() {
//     try{
//         const tasks = await Promise.all(tasks);
//         if(rejected){
//             throw new Error('error');
//         }
//         return tasks;
//     }
//     catch{
//         return null
//     }
// }
// console.log(runAllSafe());


// const withTimeout = (promise,ms)=>{
//     return new Promise((resolve,reject)=>{
//         let timer = setTimeout(()=>{
//             promise.catch(()=>{});
//             reject(new Error('Timeout'))
//     },ms);
//     promise.then((v)=>{clearTimeout(timer); resolve(v)},(e)=>{clearTimeout(timer); reject(e)});
// })};

// const a = () => new Promise(res => setTimeout(() => res('A'), 200));
// const b = () => new Promise(res => setTimeout(() => res('B'), 100));

// async function fastest(){
//     try{
//         console.time('first');
//         let winner = await Promise.race([withTimeout(a(),300), withTimeout(b(),300)]);
//         console.timeEnd('first');
//         return winner
//     }
//     catch(e){
//         throw e
//     }
// }
// fastest().then(console.log).catch(console.error);
