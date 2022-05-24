const hoursSpan = document.querySelector("[data-hours]");
const minutesSpan = document.querySelector("[data-minutes]");
const secondsSpan = document.querySelector("[data-seconds]");

const meridiemSpan = document.querySelector("[data-meridiem]");

let currentHours = 0;
let currentMinutes = 0;
let currentSeconds = 0;



setInterval(() => {

    const date = new Date;
    currentHours = date.getHours();
    currentMinutes = date.getMinutes();
    currentSeconds = date.getSeconds(); 


    meridiemSpan.textContent = "AM";


    if(currentHours === 0){
        currentHours = 12;
    }

    if(currentHours > 12){
        currentHours =  currentHours - 12;
        meridiemSpan.textContent = "PM";
    }

    if(currentHours <= 9){
        hoursSpan.textContent = `0${currentHours}`
    }else{
        hoursSpan.textContent = currentHours;
    }

    if(currentMinutes <= 9){
        minutesSpan.textContent = `0${currentMinutes}`
    }else{
        minutesSpan.textContent = currentMinutes;
    }

    if(currentSeconds <= 9){
        secondsSpan.textContent = `0${currentSeconds}`
    }else{
        secondsSpan.textContent = currentSeconds;
    }


    
    
    
}, 1000);

    








