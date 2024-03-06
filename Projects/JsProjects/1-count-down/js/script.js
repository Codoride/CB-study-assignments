const enddate = "05 march 2024 07:20 PM";

document.getElementById("end-date").innerHTML = enddate;
const inputs =  document.querySelectorAll("input");
function clock(){
    const end = new Date(enddate)
    const  now = new Date() 
    // Calculate the time remaining
    const diff = (end - now);
    if(diff < 0)
    return false;
    // convert in days
    // inputs[0].value = Math.floor(diff / 1000 / 60 / 60 / 24);
    document.getElementById("days").innerHTML = Math.floor(diff / 1000 / 60 / 60 / 24);
    // convert in hours
    inputs[1].value = Math.floor(diff / 1000 / 60 / 60  % 24);
    // convert in minuts
    inputs[2].value = Math.floor(diff / 1000 / 60 % 60);
    // convert in seconds
    inputs[3].value = Math.floor(diff / 1000 /  1%60);
    



    //  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    //  const hours = Math.floor(diff / 1000 / 60 / 60  % 24);
    //  const minutes = Math.floor(diff / 1000 / 60 % 60);
    //  const seconds = Math.floor(diff / 1000 / 1% 60);
     
    //  document.getElementById("days").innerHTML = days;
    //  document.getElementById("hours").innerHTML = hours;
     //  document.getElementById("minutes").innerHTML = minutes < 10 ? '0'+minutes : minutes;
     //  document.getElementById("seconds").innerHTML = seconds < 10 ? '0'+seconds : seconds;
    }
    
    clock();


    setInterval (()=>{
            clock()
        }, 1000);