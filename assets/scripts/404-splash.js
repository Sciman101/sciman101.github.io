const splashes = [
  "Not sure what you were expecting",
  "We don't serve that, here",
  "You'll need another website for that",
  "I am error",
  "What??",
  "You need to install Counter Strike: Source to view that page",
  "You need the RED KEY to open that page",
  "On your way to that page, you are eaten by a grue",
];

document.getElementById("splash").innerHTML =
  splashes[Math.floor(Math.random() * splashes.length)];
