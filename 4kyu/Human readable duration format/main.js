"use strict"

// don't hurt me for this awful solution :)

function formatDuration(seconds) {
  if (seconds <= 0 || typeof seconds != "number") return "now";

  let ans = [];

  // main logic

  if (seconds / 60 >= 1) {
    let minutes = Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;
    if (minutes / 60 >= 1) {
      let hours = Math.floor(minutes / 60);
      minutes = minutes - hours * 60;
      if (hours / 24 >= 1) {
        let days = Math.floor(hours / 24);
        hours = hours - days * 24;
        if (days / 365 >= 1) {
          let years = Math.floor(days / 365);
          days = days - years * 365;
          years == 1 ? ans.push(years + " year") : ans.push(years + " years");
          days == 1 ? ans.push(days + " day") : ans.push(days + " days");
          hours == 1 ? ans.push(hours + " hour") : ans.push(hours + " hours");
          minutes == 1 ? ans.push(minutes + " minute") : ans.push(minutes + " minutes");
          seconds == 1 ? ans.push(seconds + " second") : ans.push(seconds + " seconds");
        } else {
          days == 1 ? ans.push(days + " day") : ans.push(days + " days");
          hours == 1 ? ans.push(hours + " hour") : ans.push(hours + " hours");
          minutes == 1 ? ans.push(minutes + " minute") : ans.push(minutes + " minutes");
          seconds == 1 ? ans.push(seconds + " second") : ans.push(seconds + " seconds");
        }
      } else {
        hours == 1 ? ans.push(hours + " hour") : ans.push(hours + " hours");
        minutes == 1 ? ans.push(minutes + " minute") : ans.push(minutes + " minutes");
        seconds == 1 ? ans.push(seconds + " second") : ans.push(seconds + " seconds");
      }
    } else {
      minutes == 1 ? ans.push(minutes + " minute") : ans.push(minutes + " minutes");
      seconds == 1 ? ans.push(seconds + " second") : ans.push(seconds + " seconds");
    }
  } else {
    seconds == 1 ? ans.push(seconds + " second") : ans.push(seconds + " seconds");
  }

  // get rid of zero values

  ans = ans.filter(item => !(item[0] === "0"));
  
  // commas and "and"

  if (ans.length == 1) {
    return ans.join("");
  } else {
    for (let i = 0; i < ans.length; i++) {
      if (i == ans.length - 1) {
        ans[i] = " and " + ans[i];
      } else if (i == ans.length - 2) {
        continue;
      } else {
        ans[i] = ans[i] + ", ";
      }
    }
    return ans.join("");
  }
}