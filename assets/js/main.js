// Array of possible splash messages
const splash = [
  "",
  "Hello, World!",
  "9 out of 10 doctors recommend",
  "1 out of 10 doctors do not recommend",
  "Mk. II",
  "May contain nuts",
  "IndexOutOfBoundsException: Splash message index out of range: -1",
  "Self-contained!",
  "<button onclick='randomizeSplash()'>Click me!</button>",
  "Powered by HTML5",
  "Known to cause cancer in the state of CA",
  "Non machine-washable",
  "Thank you, very cool",
  "Powered by Github Pages",
  "Powered by Jekyll",
  "<span style='color:red;'>LIGHTING NEEDS TO BE REBUILT (10 unbuilt object(s))<span>",
  "> sudo rm -rf --no-preserve-root /",
  "I <i>love</i> Bossfight",
  "Hope your day's going well!",
  "Pretend I put a funny joke here",
  "The only site that's not on fire (yet)",
  "Importing small assets...",
  "Your daily source of fiber",
  "Good for your heart",
  "Made with 100% real vitamins and minerals",
  "Splash Message",
  "Thanks for stopping by!",
  "Leg?",
  "Art is subjective, and I am a very bad subject",
  "Art machine broke",
  "I'm running out of splash messages",
  "Good for your hair!",
  "Gotta go fast",
  "Don't forget to like and subscribe",
  "Made with Unity",
  "Made with Godot",
  "Made with love2d",
  "I can make spaghetti",
  "Surprise!",
  "Who?",
  "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Congradulations! You are our 10,000th visitor! Click now to claim your prize!</a>",
  "No Workplace Accidents in [0] Days",
  ":D",
  "The best thing since sliced bread",
  "Paul Blart: Mall Cop",
  "Baul Plart: Call Mop",
  "Maul Cart: Pall Bop",
  "Caul Mart: Ball Pop",
  "Gerome Wolfman",
  "BRING YOUR CASH! BRING YOUR TITLES! BRING YOUR WIFE!",
  "Powered by Clip Studio Paint",
  "Node Graph out of Date. Rebuilding...",
  "Take a seat, Douglath",
  "Heehoo",
  "Just a baby, drinking coffee",
  "[-]",
  "Has this ever happened to you?",
  "Helps with eyesight!",
  "Here in my garage",
  "I'm above elite, I'm stratospheric",
  "The Cooler Daniel",
  "SS Tier",
  "B Tier",
  "D Tier",
  "Never finished Homestuck",
  "What conspiracies are we cooking on the menu, today?",
  "10 different flavors!",
  "Minceraft",
  "Two trucks",
  "No running in the halls!",
  "Full of bees!",
  "Nutritional values based on an average 2000 calorie diet",
  "Cheese and Rice",
  "Weed eater",
  "I love refrigerators",
  "Comes with a free drink",
  "Mortal!",
  "Slime time...",
  "Everyone loves a potato monkey!",
  "Water your plants!",
  "Hey peebrain, you teleport?",
  "Secret Classroom Superpowers?",
  "(Clearly) I don't own an air fryer",
  "Don't forget to stay hydrated!",
  "Sit up straight!",
  "Like hell you are!",
  "Stretch your wrists!",
  "On a stick!",
  "Procrastinating",
  "I'm a real web-dev now",
  "Covered in skin!",
  "Cut to the chase, are there beans in here?",
  "Not a brand!",
  "<span style='display:none;'>You're trying to make it look like </span>I think Coolsville sucks!",
  "Be Good",
  "Don't be evil!",
  "Be careful on the internet",
  "Peepy loves you(?)",
  "Elephant boys! Elephant boys!",
  "Behold my unimaginable power, I have slaughtered him",
  "Throwing children since 2021",
  "GMO Free",
  "You have [2] PlayCoins!",
  "Now entering a no NFT zone",
  "Speed Limit 60 mph",
  "Total misplay",
  "Stop quipping!",
  "Pondering my orb",
  "You are about to build a robot in the comfort of your own home",
  "Which one of you took <i>4 SNAPSHOTS</i> of this site on the wayback machine on November 1st 2020???",
  "I could go for some nice drywall right now",
  "Welcome to our cyberhome!"
];

// Randomize the splash currently displayed in the 'splash' div
let previousSplashIndex = -1;
function randomizeSplash() {
  let index;
  // Don't let us pick the same index twice in a row
  do {
    index = Math.floor(Math.random()*splash.length);
  }while (index == previousSplashIndex);
  // Display and update
  document.getElementById('splash').innerHTML = splash[index];
  previousSplashIndex = index;
}

// When the document loads...
window.onload = function() {
  randomizeSplash();

  // Add onclick handlers for all expandable regions
  const coll = document.getElementsByClassName("expandable-toggle");
  for (let i = 0; i < coll.length; i++) {
    // Add click listener
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      // Modify content height
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

  document.getElementById('currYear').innerText = new Date().getFullYear();

}