//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar

let currentDay = new Date();
document.getElementById("currentDay").innerHTML = currentDay;

/*WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future*/

let hour = currentDay.getHours();
console.log(hour);

if (hour == 17) {
  document.getElementById("hour17").style.background = "rgb(255, 105, 97)";
} else if (hour > 17) {
  document.getElementById("hour17").style.background = "rgb(211, 211, 211)";
} else {
  document.getElementById("hour17").style.background = "rgb(119, 221, 119)";
}
if (hour == 16) {
  document.getElementById("hour16").style.background = "rgb(255, 105, 97)";
} else if (hour > 16) {
  document.getElementById("hour16").style.background = "rgb(211, 211, 211)";
} else {
  document.getElementById("hour16").style.background = "rgb(119, 221, 119)";
}
if (hour == 15) {
  document.getElementById("hour15").style.background = "rgb(255, 105, 97)";
} else if (hour > 15) {
  document.getElementById("hour15").style.background = "rgb(211, 211, 211)";
} else {
  document.getElementById("hour15").style.background = "rgb(119, 221, 119)";
}
if (hour == 14) {
  document.getElementById("hour14").style.background = "rgb(255, 105, 97)";
} else if (hour > 14) {
  document.getElementById("hour14").style.background = "rgb(211, 211, 211)";
} else {
  document.getElementById("hour14").style.background = "rgb(119, 221, 119)";
}
if (hour == 13) {
  document.getElementById("hour13").style.background = "rgb(255, 105, 97)";
} else if (hour > 13) {
  document.getElementById("hour13").style.background = "rgb(211, 211, 211)";
} else {
  document.getElementById("hour13").style.background = "rgb(119, 221, 119)";
}
if (hour == 12) {
  document.getElementById("hour12").style.background = "rgb(255, 105, 97)";
} else if (hour > 12) {
  document.getElementById("hour12").style.background = "rgb(211, 211, 211)";
} else {
  document.getElementById("hour12").style.background = "rgb(119, 221, 119)";
}
if (hour == 11) {
  document.getElementById("hour11").style.background = "rgb(255, 105, 97)";
} else if (hour > 11) {
  document.getElementById("hour11").style.background = "rgb(211, 211, 211)";
} else {
  document.getElementById("hour11").style.background = "rgb(119, 221, 119)";
}
if (hour == 10) {
  document.getElementById("hour10").style.background = "rgb(255, 105, 97)";
} else if (hour > 10) {
  document.getElementById("hour10").style.background = "rgb(211, 211, 211)";
} else {
  document.getElementById("hour10").style.background = "rgb(119, 221, 119)";
}
if (hour == 9) {
  document.getElementById("hour9").style.background = "rgb(255, 105, 97)";
} else if (hour > 9) {
  document.getElementById("hour9").style.background = "rgb(211, 211, 211)";
} else {
  document.getElementById("hour9").style.background = "rgb(119, 221, 119)";
}

/*WHEN I click the save button for that time block
THEN the text for that event is saved in local storage*/

const button9 = document.querySelector(".saveBtn9");
const button10 = document.querySelector(".saveBtn10");
const button11 = document.querySelector(".saveBtn11");
const button12 = document.querySelector(".saveBtn12");
const button13 = document.querySelector(".saveBtn13");
const button14 = document.querySelector(".saveBtn14");
const button15 = document.querySelector(".saveBtn15");
const button16 = document.querySelector(".saveBtn16");
const button17 = document.querySelector(".saveBtn17");
const input9 = document.getElementById("hour9");
const input10 = document.getElementById("hour10");
const input11 = document.getElementById("hour11");
const input12 = document.getElementById("hour12");
const input13 = document.getElementById("hour13");
const input14 = document.getElementById("hour14");
const input15 = document.getElementById("hour15");
const input16 = document.getElementById("hour16");
const input17 = document.getElementById("hour17");

button9.addEventListener("click", typedEvent);
button10.addEventListener("click", typedEvent);
button11.addEventListener("click", typedEvent);
button12.addEventListener("click", typedEvent);
button13.addEventListener("click", typedEvent);
button14.addEventListener("click", typedEvent);
button15.addEventListener("click", typedEvent);
button16.addEventListener("click", typedEvent);
button17.addEventListener("click", typedEvent);

function typedEvent() {
  localStorage.setItem("input9", input9.value);
  localStorage.setItem("input10", input10.value);
  localStorage.setItem("input11", input11.value);
  localStorage.setItem("input12", input12.value);
  localStorage.setItem("input13", input13.value);
  localStorage.setItem("input14", input14.value);
  localStorage.setItem("input15", input15.value);
  localStorage.setItem("input16", input16.value);
  localStorage.setItem("input17", input17.value);
}

function getTypedEvent() {
  return localStorage.getItem();
}

/* WHEN I refresh the page
THEN the saved events persist */

window.addEventListener("load", () => {
  const hour9Input = document.querySelector("#hour9");
  const hour9TypedEvent = localStorage.getItem("input9") || "";

  hour9Input.value = hour9TypedEvent;
  hour9Input.addEventListener("change", (e) => {
    localStorage.setItem("hour9TypedEvent", e.target.value);
  });
});

window.addEventListener("load", () => {
  const hour10Input = document.querySelector("#hour10");
  const hour10TypedEvent = localStorage.getItem("input10") || "";

  hour10Input.value = hour10TypedEvent;
  hour10Input.addEventListener("change", (e) => {
    localStorage.setItem("hour10TypedEvent", e.target.value);
  });
});

window.addEventListener("load", () => {
  const hour11Input = document.querySelector("#hour11");
  const hour11TypedEvent = localStorage.getItem("input11") || "";

  hour11Input.value = hour11TypedEvent;
  hour11Input.addEventListener("change", (e) => {
    localStorage.setItem("hour11TypedEvent", e.target.value);
  });
});

window.addEventListener("load", () => {
  const hour12Input = document.querySelector("#hour12");
  const hour12TypedEvent = localStorage.getItem("input12") || "";

  hour12Input.value = hour12TypedEvent;
  hour12Input.addEventListener("change", (e) => {
    localStorage.setItem("hour12TypedEvent", e.target.value);
  });
});

window.addEventListener("load", () => {
  const hour13Input = document.querySelector("#hour13");
  const hour13TypedEvent = localStorage.getItem("input13") || "";

  hour13Input.value = hour13TypedEvent;
  hour13Input.addEventListener("change", (e) => {
    localStorage.setItem("hour9TypedEvent", e.target.value);
  });
});

window.addEventListener("load", () => {
  const hour14Input = document.querySelector("#hour14");
  const hour14TypedEvent = localStorage.getItem("input14") || "";

  hour14Input.value = hour14TypedEvent;
  hour14Input.addEventListener("change", (e) => {
    localStorage.setItem("hour14TypedEvent", e.target.value);
  });
});

window.addEventListener("load", () => {
  const hour15Input = document.querySelector("#hour15");
  const hour15TypedEvent = localStorage.getItem("input15") || "";

  hour15Input.value = hour15TypedEvent;
  hour15Input.addEventListener("change", (e) => {
    localStorage.setItem("hour9TypedEvent", e.target.value);
  });
});

window.addEventListener("load", () => {
  const hour16Input = document.querySelector("#hour16");
  const hour16TypedEvent = localStorage.getItem("input16") || "";

  hour16Input.value = hour16TypedEvent;
  hour16Input.addEventListener("change", (e) => {
    localStorage.setItem("hour16TypedEvent", e.target.value);
  });
});

window.addEventListener("load", () => {
  const hour17Input = document.querySelector("#hour17");
  const hour17TypedEvent = localStorage.getItem("input17") || "";

  hour17Input.value = hour17TypedEvent;
  hour17Input.addEventListener("change", (e) => {
    localStorage.setItem("hour17TypedEvent", e.target.value);
  });
});
