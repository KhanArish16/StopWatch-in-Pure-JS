let [second, minute, hour] = ["00", "00", "00"];
// console.log(second, minute, hour);
let time = [];
let stoptime = true;

let ulList;

let displayTime = document.createElement("div");
displayTime.textContent = "00  : 00 : 00";

let startBtn = document.createElement("button");
startBtn.textContent = "Start";

let stopBtn = document.createElement("button");
stopBtn.textContent = "Stop";

let reset = document.createElement("button");
reset.textContent = "reset";

let sprint = document.createElement("button");
sprint.textContent = "sprint";

document.body.append(startBtn, stopBtn, reset, sprint, displayTime);

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
  displayTime.textContent = "00  : 00 : 00";
  clearInterval(time);
  displaySprint(false);
});

sprint.addEventListener("click", () => {
  console.log(hour, minute, second);

  if (!ulList) {
    ulList = document.createElement("ul");
    document.body.append(ulList);
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
  displayTime.textContent = `${hour} : ${minute} : ${second}`;
}

function displaySprint(i) {
  let displayd = document.createElement("li");
  displayd.textContent = `${hour} : ${minute} : ${second} `;
  if (i) {
    ulList.append(displayd);
  } else {
    document.body.removeChild(ulList);
    ulList = null;
  }
}
