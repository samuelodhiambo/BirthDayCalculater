import { isValidDate, cleanDate } from "./dateclean.js";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const maleNames = {
  Sunday: "Kwasi",
  Monday: "Kwadwo",
  Tuesday: "Kwabena",
  Wednesday: "Kwaku",
  Thursday: "Yaw",
  Friday: "Kofi",
  Saturday: "Kwame",
};

const femaleNames = {
  Sunday: "Akosua",
  Monday: "Adwoa",
  Tuesday: "Abenaa",
  Wednesday: "Akua",
  Thursday: "Yaa",
  Friday: "Afua",
  Saturday: "Ama",
};

var form = document.getElementById("bdateform");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let date = this.bdate.value;
  let gender = this.gender.value;

  console.log(date)
  date = cleanDate(date);

  if (date.length > 10) {
    alert(date)
  } else {
    console.log(document.querySelector('input[type="date"]') != null)
    if (document.querySelector('input[type="date"]') != null) {
      date = this.bdate.value
    }
    var CC = Number(date.split("-")[0].substring(0, 2));
    var YY = Number(date.split("-")[0].substring(2, 4));
    var MM = Number(date.split("-")[1]);
    var DD = Number(date.split("-")[2]);

    var day1 = (Math.floor(CC / 4) -2 * CC -1 +5 * Math.floor(YY / 4) +Math.floor((26 * (MM + 1)) / 10) + DD) % 7;
    // console.log(day1)

    if (new Date(date) > new Date(Date())) {
      alert("That's an unborn baby...");
    }
    console.log(date);

    var d = new Date(date).getDay();
    var day = weekday[d];
    var akanName = "";
    if (gender == "male") {
      akanName = maleNames[day];
    }
    if (gender == "female") {
      akanName = femaleNames[day];
    }

    alert(
      gender.charAt(0).toUpperCase() +
      gender.substring(1, gender.length) +
      " born on " +
      day +
      " so the Akan Name is: " +
      akanName
    );
  }
});
