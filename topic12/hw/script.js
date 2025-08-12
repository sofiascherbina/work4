class CountdownTimer {
  constructor({ selector, targetDate, currentDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.currentDate = currentDate;
  }
};
let date = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
  currentDate: new Date()
});
let dayTxt = document.querySelector('[data-value="days"]');
let hoursTxt = document.querySelector('[data-value="hours"]');
let minsTxt = document.querySelector('[data-value="mins"]');
let secsTxt = document.querySelector('[data-value="secs"]');

let time = date.currentDate - date.targetDate ;
let days = Math.floor(time / (1000 * 60 * 60 * 24));

let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

let secs = Math.floor((time % (1000 * 60)) / 1000);

let timer = setInterval(()=>{
    dayTxt.textContent = days;
    hoursTxt.textContent = hours;
    minsTxt.textContent = mins;
    secsTxt.textContent = secs;
    if(secs === 0){
        mins--;
        secs = 59;
    }
    else if(mins === 0){
        hours--;
        mins = 59;
    }
      else if(hours === 0){
        days--;
        hours = 23;
    }
    else if(days === 0){
        alert('time`s off');
        clearInterval(timer);
    }
    secs--;
}, 1000);