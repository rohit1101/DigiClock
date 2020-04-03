const displayClock = document.querySelector('.dis');

setInterval(function() {
  let t = new Date();
  let sec = t.getSeconds();
  let min = t.getMinutes();
  let hour = t.getHours();
  displayClock.innerHTML = `${hour}:${min <= 9 ? `0${min}` : `${min}`}:${
    sec <= 9
      ? `0${sec} ${hour >= 13 ? `PM` : `AM`}`
      : `${sec} ${hour >= 13 ? `PM` : `AM`}`
  }`;
}, 1000);

document.body.appendChild(displayClock);
