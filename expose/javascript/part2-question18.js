

/**
 * Print out a local time
 */
function myCallback() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

/* start */
setTimeout(() => {console.log("Start running");},
           0);

/* repeat */
const timer_intervalID = setInterval(myCallback, 1000);