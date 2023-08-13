let hour = document.getElementById("hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
console.log(hour);
console.log(minute);
console.log(second);
console.log("Hello World!");
setInterval(() => {
  const date = new Date();
  console.log(date);
  hour.innerHTML = (date.getHours() < 10 ?"0":"") + date.getHours();
  minute.innerHTML = (date.getMinutes() < 10 ?"0":"") + date.getMinutes();
  second.innerHTML = (date.getSeconds() < 10 ?"0":"") + date.getSeconds();
}, 1000);
