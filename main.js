let bar = document.querySelector(".fa-bars");
bar.addEventListener("click", () => {
  document.querySelector("header nav ul").classList.toggle("active");
});
let moon = document.getElementById("moon");
let sun = document.getElementById("sun");
setInterval(() => {
  let hours = document.getElementById("hours");
  let min = document.getElementById("min");
  let seconds = document.getElementById("seconds");
  let p = new Date();
  hours.innerHTML = p.getHours();
  min.innerHTML = p.getMinutes();
  if (p.getHours() >= 12) {
    moon.style.display = "inline-block";
  } else {
    sun.style.display = "inline-block";
  }
  seconds.innerHTML = p.getSeconds();
}, 1000);
function displayTimes() {
  let boxs = document.querySelectorAll(".box");
  for (let i = 0; i < boxs.length; i++) {
    setTimeout(() => {
      boxs[i].classList.add("active");
    }, 1000 + i * 100);
  }
}
let searchIcon = document.getElementById("searchIcon");

function getTimes() {
  let searchInput = document.getElementById("search");
  let searchInputValue = searchInput.value;
  if (searchInputValue != "") {
    fetch(
      `http://api.aladhan.com/v1/timingsByCity?city=${searchInputValue}&country=Egypt&method=5`
    )
      .then((e) => e.json())
      .then((e) => {
        let Fajr = (document.getElementById("Fajr").innerHTML =
          e.data.timings.Fajr);
        let Sunrise = (document.getElementById("Sunrise").innerHTML =
          e.data.timings.Sunrise);
        let Dhuhr = (document.getElementById("Dhuhr").innerHTML =
          e.data.timings.Dhuhr);
        let Asr = (document.getElementById("Asr").innerHTML =
          e.data.timings.Asr);
        let Maghrib = (document.getElementById("Maghrib").innerHTML =
          e.data.timings.Maghrib);
        let Isha = (document.getElementById("Isha").innerHTML =
          e.data.timings.Isha);
      });
    displayTimes();
  } else {
    alert("اكتب اسم المدينه");
  }
}
