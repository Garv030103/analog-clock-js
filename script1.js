const deg = 6;

const hr = document.querySelector("#hr");

const mn = document.querySelector("#mn");

const sc = document.querySelector("#sc");
setInterval(() => {
  let date = new Date();

  let ms = date.getMilliseconds() * deg;
  let hh = date.getHours() * 30;
  let mm = date.getMinutes() * deg;
  let ss = date.getSeconds() * deg + ms / 1000;

  hr.style.transform = `rotateZ(${hh + mn / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
}, 1000);
