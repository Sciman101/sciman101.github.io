// Array of possible splash messages
const splash = [
  "Hello, World!",
  "9 out of 10 doctors reccomend",
  "1 out of 10 doctors do not reccomend",
  "Mk. II",
  "May contain nuts",
  "Trans rights!",
  "Black Lives Matter",
  "IndexOutOfBoundsException: Splash message index out of range: -1",
  "Self-contained!",
  "<button onclick='randomizeSplash()'>Click me!</button>",
  "Powered by HTML5",
  "Known to cause cancer in the state of CA",
  "Non machine-washable",
  "50 notes",
  "just three shots from Kitchen Gun",
  "Thank you, very cool",
  "Where's the robot, Mansley??",
  "Powered by Github Pages",
  "Powered by Jekyll",
  "<span style='color:red;'>LIGHTING NEEDS TO BE REBUILT (10 unbuilt object(s))<span>",
  "> cd /; sudo rm -rf --no-preserve-root *",
  "I <i>love</i> Bossfight",
  "I smoked this <a href='https://youtu.be/SKOFp4C4_zo'>juul</a>, and it did <strong>unthinkable</strong> things to my <i>mind</i> and  body",
  "Hope your day's going well!",
  "Pretend I put a funny reference here",
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
  "LEG? LEG? LEG?",
  "Surprise!",
  "Stay in drugs, don't do school",
  "Hug-Sized Robots",
  "Who?",
  "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Congradulations! You are our 10,000th visitor! Click now to claim your prize!</a>",
  "No Workplace Accidents in [0] Days",
  ":D",
  "The best thing since sliced bread",
  "Paul Blart: Mall Cop",
  "Baul Plart: Call Mop",
  "Maul Cart: Pall Bop",
  "Caul Mart: Ball Pop",
  "Critical Hit!",
  "Critical Fail!",
  "Gerome Wolfman",
  "BRING YOUR CASH! BRING YOUR TITLES! BRING YOUR WIFE!",
  "Home of Challenge Pissing",
  "... You know ;)",
  "404: Splash not found",
  "Best quality: Their Wiggles",
  "Powered by Clip Studio Paint",
  "#1, Victory Royale!",
  "Node Graph out of Date. Rebuilding..."
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
document.body.onload = function() {
  randomizeSplash();

  // Add onclick handlers for all expandable regions
  const coll = document.getElementsByClassName("toggle");
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

}