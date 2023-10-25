let [second, minute, hour] = ["0", "0", "0"];
// console.log(second, minute, hour);
let time = [];
let stoptime = true;
let record = document.createElement("div");

let ulList;

let container = document.createElement("div");
container.classList.add("container");

let displayTime = document.createElement("div");
displayTime.classList.add("timerDisplay");
displayTime.textContent = "00  : 00 : 00";

let buttons = document.createElement("div");
buttons.classList.add("buttons");

let startBtn = document.createElement("button");
startBtn.textContent = "Start";

let stopBtn = document.createElement("button");
stopBtn.textContent = "Stop";

let reset = document.createElement("button");
reset.textContent = "reset";

let sprint = document.createElement("button");
sprint.textContent = "sprint";

buttons.append(startBtn, stopBtn, reset, sprint);
container.append(displayTime, buttons);
document.body.append(container, record);

startBtn.addEventListener("click", () => startTime());
stopBtn.addEventListener("click", () => {
  if (stoptime == true) {
    clearInterval(time);
    stoptime = false;
    stopBtn.textContent = "resume";
    console.log("stop");
  } else if (stoptime == false) {
    stoptime = true;
    startTime();
    stopBtn.textContent = "stop";
    console.log("resume");
  }
});

function resume() {}

reset.addEventListener("click", () => {
  hour = "00";
  minute = "00";
  second = "00";
  displayTime.innerHTML = "00  : 00 : 00";
  clearInterval(time);
  displaySprint(false);
});

sprint.addEventListener("click", () => {
  console.log(hour, minute, second);

  if (!ulList) {
    ulList = document.createElement("ul");
    record.append(ulList);
  }

  displaySprint(true);
});

function startTime() {
  time = setInterval(displayTimer, 1000);
}

function displayTimer() {
  second++;
  if (second == 60) {
    second = 0;

    minute++;
    if (minute == 60) {
      minute = 0;
      hour++;
    }
  }
  //   console.log(second, minute);
  let h = hour < 10 ? "0" + hour : hour;
  let m = minute < 10 ? "0" + minute : minute;
  let s = second < 10 ? "0" + second : second;

  displayTime.innerHTML = `${h} : ${m} : ${s}`;
}

function displaySprint(i) {
  let displayd = document.createElement("li");
  displayd.textContent = `${hour} : ${minute} : ${second} `;
  if (i) {
    record.classList.add("record");
    ulList.append(displayd);
  } else {
    record.classList.remove();
    record.removeChild(ulList);
    ulList = null;
  }
}
