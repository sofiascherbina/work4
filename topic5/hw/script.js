// const chartData = {
//   labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
//   datasets: [
//     {
//       label: "Продажі за останній місяць",
//       data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
//       backgroundColor: "#2196f3",
//       borderColor: "#2196f3",
//       borderWidth: 1,
//     },
//   ],
// };
// const config ={
//     type:'line',
//     data:chartData ,
//     options:{},
// }
// const salesChart = new Chart(
//     document.querySelector('#sales-chart'),
//     config
// );

let shownKey = document.querySelector('#key');
let newGameBtn = document.querySelector('.new-game-btn');
let container = document.querySelector('.game-container');
const keys = ['a','s','w','d','f','r','e','q','c','l'];
let  currentKeyIndex = 0;

let key = keys[currentKeyIndex];
shownKey.textContent = key;
document.addEventListener('keydown', (event)=>{
    if(event.key === key){
        PNotify.alert({text:'this is right key!!!',type:'success', delay:500});
        currentKeyIndex++;
        key = keys[currentKeyIndex];
        shownKey.textContent = key;
    }
    else{
        PNotify.alert({text:'Nope, you missed! Try again ',type:'error', delay:500});
    }
});
document.addEventListener('keypress', (event)=>{
    event.preventDefault();
});
newGameBtn.addEventListener('click',()=>{
    currentKeyIndex = 0;
    
    shownKey.style.display = 'none';
    container.style.backgroundImage = "url('./img/citlali.gif')";
    keys[0] = 'n';
    setTimeout(()=>{
        key = keys[currentKeyIndex];
        shownKey.textContent = key;
        shownKey.style.display = 'block';
        container.style.backgroundImage = "url('./img/shoko.gif')";
    }, 4500)
    PNotify.alert({text:'New game started',type:'info', delay:500});
})