let gameState = "intro";
let img, img2, img3, img4, img5, img6, img7, img8;
let font;
let ringsound;
let jazzsound; 
let isRinging = false;

function preload() {
  img = loadImage('assets/resizedimage1.jpg');
  img2 = loadImage('assets/resizedimage2.jpg');
  img3 = loadImage('assets/upclosethought.jpg');
  img4 = loadImage('assets/gettingdressed.jpg');
  img5 = loadImage('assets/maintalking.jpg');
  img6 = loadImage('assets/placeholder1jpg.webp');
  img7 = loadImage('assets/placeholder2.webp');
  img8 = loadImage('assets/placeholder3.jpeg');
  font = loadFont('assets/Comicbon-personaluse.ttf')
  ringsound = loadSound('assets/ringingsounds.wav')
  jazzsound = loadSound('assets/jazzsounds.mp3')
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  switch (gameState) {
    case "intro":
      displayIntro();
      break;
    case "choice1":
      displayChoice1();
      break;
    case "outcomeA":
      displayOutcomeA();
      break;
    case "gettingReady":
      displayGettingReady();
      break;
    case "outcomeB":
      displayOutcomeB();
      break;
    case "reflect":
      displayReflection();
      break;
    case "gameOver":
      displayGameOver();
      break;
    case "gallery1":
      displayGalleryScene1();
      break;
    case "gallery2":
      displayGalleryScene2();
      break;
    case "gallery3":
      displayGalleryScene3();
      break;
    case "galleryFinal":
      displayGalleryFinalScene();
      break;
    default:
      text("Error: Unknown state", width / 2, height / 2);
  }
}

// Intro Scene
function displayIntro() {
  textFont(font)
  textSize(24);
  textAlign(CENTER);
  fill(0);
  text("WELCOME TO YOUR BUTTERFLY EFFECT GAME", width / 2, height / 2 - 50);
  text("CLICK TO BEGIN YOUR JOUNREY", width / 2, height / 2);

}

// First choice scene
function displayChoice1() {
  background(img);

  // Draw the text bubble in the bottom-right corner
  drawTextBubble(
    "MY FRIEND IS CALLING I WONDER WHAT SHE WANTS",
    width - 480, // Position the bubble near the right edge
    height - 140, // Position the bubble slightly above the bottom
    460,         // Width of the bubble
    100          // Height of the bubble
  );

  // Draw buttons for player choices
  drawButton(50, 150, 200, 50, "PICK UP THE PHONE");
  drawButton(300, 150, 250, 50, "LET IT GO TO VOICEMAIL");
}
// Outcome A: Friend invites you to the gallery
function displayOutcomeA() {
  background(img2);
  drawTextBubble(
    "HEY IM GOING TO MY FRIENDS GALLERY TONIGHT WOULD YOU LIKE TO JOIN?",
    20,
    height - 140,
    760,
    120);
  drawButton(50, 400, 200, 50, "SURE LETS GO");
  drawButton(300, 400, 250, 50, "NOT TONIGHT");
}

// Getting Ready Scene
function displayGettingReady() {
  background(img4);
  drawTextBubble(
    "YOU DECIDE TO GO OUT AND START TO GET READY YOU PICK OUT AN OUTFIT FIX YOUR HAIR AND PREPARE TO LEAVE",
    20,
    height - 140,
    760,
    120);
}

// Outcome B: Voicemail
function displayOutcomeB() {
  background(img3);
  drawTextBubble(
    "MAYBE IT WASNT IMPORTANT",
    20,
    height - 140,
    760,
    120);
}

// Reflection Scene
function displayReflection() {
  background(img3);
  drawTextBubble(
    "SHOULD I HAVE ANSWERED? MAYBE ITS BETTER TO STAY HOME BUT THE THOUGHT LINGERS IT MIGHT BE AWKWARD IF I DONT KNOW ANYONE SHOULD I INTRODUCE MYSELF? WHAT IF I MAKE NEW FRIENDS?",
    20,
    height - 140,
    760,
    120);
  drawButton(50, 400, 200, 50, "DWELL ON IT");
  drawButton(300, 400, 250, 50, "CALL HER BACK");
}

// Game Over Scene
function displayGameOver() {
  background(img3);
  drawTextBubble(
    "MAYBE NEXT TIME CLICK TO PLAY AGAIN",
    20,
    height - 140,
    760,
    120);
}

// Gallery Scenes
function displayGalleryScene1() {
  background(img5);
  drawTextBubble(
    "THIS GALLERY IS INCREDIBLE LOOK AT THAT PAINTING OVER THERE ITS MESMERIZING",
    20,
    height - 140,
    760,
    120);
}

function displayGalleryScene2() {
  background(img6);
  drawTextBubble(
    "HEY IM SO GLAD YOU CAME I WANTED TO TELL YOU ABOUT AN ART RESIDENCY IN COLORADO I THINK YOU SHOULD APPLY FOR IT",
    20,
    height - 140,
    760,
    120);
}

function displayGalleryScene3() {
  background(255, 200, 200);
  drawTextBubble("THANK YOU FOR COMING THIS PIECE WAS INSPIRED BY MY TRAVELS TO KYOTO I WANTED TO CAPTURE THE SERENITY OF THE TEMPLES EXPERIENCES LIKE THESE INSPIRE US",20,height - 140,760, 120);
}

function displayGalleryFinalScene() {
  background(50, 50, 100);
  drawTextBubble(
    "AS THE EVENING ENDS YOURE GLAD YOU SAID YES IT UNLOCKED OPPORTUNITIES YOU NEVER KNEW WERE POSSIBLE CLICK TO PLAY AGAIN",20,height - 140,760, 120);
}

// Reusable Text Bubble Function
function drawTextBubble(textContent, x, y, w, h) {
  fill(255, 240, 200); // Light yellow background for the bubble
  stroke(0); // Black border
  rect(x, y, w, h, 10); // Rounded rectangle
  fill(0); // Black text
  textFont(font);
  textSize(18);
  textAlign(LEFT, TOP);
  text(textContent, x + 10, y + 10, w - 20, h - 20); // Padding inside the bubble
}

// Button Helper
function drawButton(x, y, w, h, label) {
  fill(200);
  rect(x, y, w, h);
  fill(0);
  textFont(font);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(label, x + w / 2, y + h / 2);
}

function mousePressed() {
  switch (gameState) {
    case "intro":
      gameState = "choice1";
      break;

    case "choice1":
      if (mouseInRect(50, 150, 200, 50)) {
        gameState = "outcomeA"; // Choosing "PICK UP THE PHONE"
      } else if (mouseInRect(300, 150, 250, 50)) {
        gameState = "outcomeB"; // Choosing "LET IT GO TO VOICEMAIL"
      }
      break;

    case "outcomeA":
      if (mouseInRect(50, 400, 200, 50)) {
        gameState = "gettingReady"; // Choosing "SURE LETS GO"
      } else if (mouseInRect(300, 400, 250, 50)) {
        gameState = "reflect"; // Choosing "NOT TONIGHT"
      }
      break;

    case "outcomeB":
      gameState = "gameOver"; // Outcome B transitions to Game Over directly
      break;

    case "reflect":
      if (mouseInRect(50, 400, 200, 50)) {
        gameState = "gameOver"; // Choosing "DWELL ON IT" goes to Game Over
      } else if (mouseInRect(300, 400, 250, 50)) {
        gameState = "gettingReady"; // Choosing "CALL HER BACK" goes to Getting Ready
      }
      break;

    case "gettingReady":
      gameState = "gallery1";
      break;

    case "gallery1":
      gameState = "gallery2";
      break;

    case "gallery2":
      gameState = "gallery3";
      break;

    case "gallery3":
      gameState = "galleryFinal";
      break;

    case "galleryFinal":
    case "gameOver":
      resetGame();
      break;
  }
}


// Reset the game
function resetGame() {
  gameState = "intro";
}

// Check if the mouse is inside a rectangle
function mouseInRect(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}