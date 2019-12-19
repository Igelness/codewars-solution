"use strict"

function goodVsEvil(good, evil) {
  let goodStats = [1, 2, 3, 3, 4, 10];
  let evilStats = [1, 2, 2, 2, 3, 5, 10];

  let goodForces = 0;
  let evilForces = 0;

  for (let i = 0; i < good.split(" ").length; i++) {
    goodForces = goodForces + goodStats[i] * parseInt(good.split(" ")[i]);
  }

  for (let i = 0; i < evil.split(" ").length; i++) {
    evilForces = evilForces + evilStats[i] * parseInt(evil.split(" ")[i]);
  }

  if (goodForces > evilForces) {
    return "Battle Result: Good triumphs over Evil";
  } else if (goodForces < evilForces) {
    return "Battle Result: Evil eradicates all trace of Good";
  }
  return "Battle Result: No victor on this battle field";
}