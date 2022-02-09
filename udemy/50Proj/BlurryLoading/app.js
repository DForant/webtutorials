// define our element variables
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

initialize variables
let load = 0; // load percentage 
let int = setInterval(blurring, 30); // interval variable

// the following scaling was taken from the following stack overflow post.
//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function blurring(){
    load++; // incrememnt the load counter
    
    // Once the load counter gors greater the 99 clear the interval (essentially stopping any further interval runs).
    if(load>99){
        clearInterval(int);
    }
    
    
    loadText.innerText = `${load}%`; // set the inner Text of the page to the load percentage
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter =`blur(${scale(load, 0, 100, 30, 0)}px)`;
}


