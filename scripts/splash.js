const splashes = [
  "Random splash message!",
  "The most fun you can have on-line",
  "Powered by HTML5",
  "NFT-Free!",
  "It's like a website",
  "The only site that's not on fire (yet)",
  "Ai-Free!",
  "Just like mom used to make",
  "Dairy-Free!",
  "Actually 2 smaller websites in a trenchcoat",
  "You'll pay for what you've done!",
  "Soon to be a major motion picture",
  "What!",
  "Bring your cash! Bring your titles! Bring your wife!",
  "9 out of 10 doctors reccomend!",
  "1 out of 10 doctors do not reccomend!",
  "Now for the low low price of NaN!",
  "R.I.P Cohost",
  "splashes[Math.floor(Math.random() * splashes.length)];",
  "PDGH BRX ORRN",
  "<span style='display: none'>You're trying to make it sound like</span> I think Coolsville sucks!",
  "Powered by Phantomake",
  "Mk. III",
  "Made with blood, sweat, and JavaScript",
];

document.getElementById("splash").innerHTML =
  splashes[Math.floor(Math.random() * splashes.length)];
