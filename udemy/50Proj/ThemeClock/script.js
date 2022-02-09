const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const needleSecond = document.querySelector('.needle.second');
const needleMinute = document.querySelector('.needle.minute');
const needleHour = document.querySelector('.needle.hour');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        e.target.innerHtml = 'Dark Mode';
    } else {
        html.classList.add('dark');
        e.target.innerHtml = 'Light Mode';        
    }
});

function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;
    
    timeEl.innerText = `${hoursForClock}:${minutes<10?`0${minutes}`:minutes}${ampm}`;
    dateEl.innerHtml = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
    
    needleHour.style.transition = `${hours === 0 ? "none" : "all 0.5s ease-in"}`;
    needleMinute.style.transition = `${minutes === 0 ? "none" : "all 0.5s ease-in"}`;
    needleSecond.style.transition = `${seconds === 0 ? "none" : "all 0.5s ease-in"}`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

setInterval(setTime, 1000);