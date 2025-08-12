// let date = new Date(100000000);
// console.log(date);
// let parsed = Date.parse('2022,2,4'); 
// console.log(parsed);



// let date = new Date();
// function showDate(){
//     console.log(date);
// }
// showDate();

// let date = new Date();
// function showDate(){
//     console.log(date.getFullYear());
//     console.log(date.getMonth() + 1);
//     console.log(date.getDate());
//     console.log(date.getHours());
//     console.log(date.getMinutes());
//     console.log(date.getSeconds());
//     if(date.getDay() === 0 || date.getDay() === 6){
//         console.log('вихідний день'); 
//     }
//     else{
//         console.log('робочий день');  
//     }
// }
// showDate();

// let date = new Date();
// let day1 = date.getDate();
// let day2 = date.getDate() + 20;
// function showResult(){
//     console.log(`day1:${day1}`);
//     console.log(`day2:${day2}`);
//     console.log(day2 - day1);
// }
//  showResult()

// let inputDay = prompt('type a day');
// let date = new Date();
// let day = date.getDate();
// let currentMonth =  date.getMonth() + 1;
// let result;
// function showDay(){
//     let days = new Date(date.getFullYear(), currentMonth , 0).getDate();
//     result = day + parseInt(inputDay);
//     while(result >= days){
//         result-=days
//        currentMonth++;
//     }
//     if (result < 10 ){
//          result =`0${result}`;
//     }
//     if (currentMonth < 10){
//          currentMonth =`0${currentMonth}`;
//     }
//      console.log(`${currentMonth}.${result}`);
// }
// showDay();


let date = new Date();
let tomorrow =  new Date(date);
// tomorrow = new Date (date.getFullYear(), date.getMonth() + 1, date.getDate() + 1, 0 , 0 , 0);
let result;
function getSecondsToTomorrow(){
    tomorrow.setHours(24,0,0,0);
    result = tomorrow - date ;
  console.log(Math.round(result/1000));
}
getSecondsToTomorrow();


// let start = new Date();
// for (let i = 0; i <= 500000; i++ ){
//     let variable =  i*i*i*i;
// }
// let end = new Date();
// console.log(`${end - start}`);




function getLastDayOfMonth(year, month){
    let day = new Date(year, month + 1, 0);
    console.log( day.getDate(0));
}
getLastDayOfMonth(2025, 8);