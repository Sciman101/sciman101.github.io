// Splash randomizer
const splashes = [
  "Hi there!",
  "The most fun you can have on-line",
  "Part of a healthy breakfast!",
  "The only site that's not on fire (yet)",
  "Get your parents permission before going online",
  "undefined",
  "sciman dot info",
  "That's right! Challenge pissing!",
  "Hello world",
  "9 out of 10 doctors reccomend",
  "1 out of 10 doctors do not reccomend",
  "Known to cause cancer in the state of California",
  "Splash message",
  "This shit ain't nothin' to me, man",
  ":)",
  "No running in the halls!",
  "Slaves to Armok: God of Blood, Chapter III: sciman.info",
  "This is Frog Fractions 4",
  "Weed Eater",
  "Stop quipping!",
  "Which one of you took <i>4 SNAPSHOTS</i> of this site on the wayback machine on November 1st 2020???",
  "I could go for some nice drywall right now",
  "Welcome to our cyberhome!",
  "Do what you can",
  "toki!",
  "Don't be evil!",
  "Water your plants!",
  "Like hell you are!",
];
const splashDiv = document.getElementById("splash");
let prevSplash = -1;
function randomizeSplash() {
  let idx = prevSplash;
  while (idx === prevSplash) {
    idx = Math.floor(Math.random() * splashes.length);
  }
  splashDiv.innerHTML = splashes[idx];
  prevSplash = idx;
}
randomizeSplash();
