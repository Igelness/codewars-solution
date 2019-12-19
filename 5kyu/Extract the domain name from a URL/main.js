"use strict"

function domainName(url) {
  if (url.split(".")[0] == "www") {
    return url.split(".")[1];
  } else if (url.split("//") == url) {
    return url.split(".")[0];
  } else if (url.split("//")[1].substr(0, 3) == "www") {
    return url.split("//")[1].split(".")[1];
  }
  return url.split("//")[1].split(".")[0];
}