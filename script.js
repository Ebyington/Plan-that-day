let time = moment().format("dddd, MMMM Do YYYY, h:mm");

document.querySelector("#currentDay").textContent = time;

console.log(time);
// let clock = function() {
//     document.clockDisplay.textContent = time;
//     console.log(time);
// };

// clock();
// setInterval(time, 1000);