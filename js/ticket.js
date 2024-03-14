$(function () {
  const speed = 4.5;
  const r = gsap.timeline({ repeat: -1 });
  const o = gsap.timeline({ repeat: -1 });
  const h = gsap.timeline({ repeat: -1 });

  r.to("#app", {
    "--r": "180deg",
    "--p": "0%",
    duration: speed,
    ease: "sine.in",
  });
  r.to("#app", {
    "--r": "360deg",
    "--p": "100%",
    duration: speed,
    ease: "sine.out",
  });
  o.to("#app", {
    "--o": 1,
    duration: speed / 2,
    ease: "power1.in",
  });
  o.to("#app", {
    "--o": 0,
    duration: speed / 2,
    ease: "power1.out",
  });

  h.to("#app", {
    "--h": "100%",
    duration: speed / 2,
    ease: "sine.in",
  });
  h.to("#app", {
    "--h": "50%",
    duration: speed / 2,
    ease: "sine.out",
  });
  h.to("#app", {
    "--h": "0%",
    duration: speed / 2,
    ease: "sine.in",
  });
  h.to("#app", {
    "--h": "50%",
    duration: speed / 2,
    ease: "sine.out",
  });
  window.addEventListener("load", () => {
    clock();
    function clock() {
      const today = new Date();

      // get time components
      const hours = today.getHours();
      const minutes = today.getMinutes();
      const seconds = today.getSeconds();

      //add '0' to hour, minute & second when they are less 10
      const hour = hours < 10 ? "0" + hours : hours;
      const minute = minutes < 10 ? "0" + minutes : minutes;
      const second = seconds < 10 ? "0" + seconds : seconds;

      //make clock a 12-hour time clock
      const hourTime = hour > 12 ? hour - 12 : hour;

      if (hour === 0) {
        hour = 12;
      }
      //assigning 'am' or 'pm' to indicate time of the day
      const ampm = hour < 12 ? " AM" : " PM";

      // get date components
      const month = today.getUTCMonth();
      //   const year = today.getFullYear();
      const day = today.getDate();
      const weekDay = today.getDay();

      //declaring a list of all months in  a year
      const monthList = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const dayList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
      //get current date and time
      const date = dayList[weekDay] + " " + monthList[month] + " " + day;
      const time = hourTime + ":" + minute + ":" + second + ampm;

      //print current date and time to the DOM
      document.getElementById("time").innerHTML = time;
      document.getElementById("date").innerHTML = date;
      setTimeout(clock, 1000);
    }
  });
});
