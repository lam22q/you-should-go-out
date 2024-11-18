let gameState = "intro";
let img, img2, img3;

function preload() {
  img = loadImage('assets/resizedimage1.jpg');
  img2 = loadImage('assets/resizedimage2.jpg');
  img3 = loadImage('assets/upclosethought.jpg');
  img4 = loadImage('assets/gettingdressed.jpg');
  img5 = loadImage('assets/maintalking.jpg');
  img6 = loadImage('assets/placeholder1jpg.webp');
  img7 = loadImage('assets/placeholder2.webp');
  img8 = loadImage('assets/placeholder3.jpeg');
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
  textSize(24);
  textAlign(CENTER);
  fill(0);
  text("Welcome to Your Butterfly Effect Game!", width / 2, height / 2 - 50);
  text("Click to begin your journey...", width / 2, height / 2);

}

// First choice scene
function displayChoice1() {
  background(img);
  textSize(20);
  textAlign(LEFT);
  fill(0);
  text("My friend is calling! I wonder what she wants?", 50, 100);

  drawButton(50, 150, 200, 50, "Pick up phone");
  drawButton(300, 150, 250, 50, "Let it go to voicemail");
}

// Outcome A: Friend invites you to the gallery
function displayOutcomeA() {
  background(img2);
  textSize(24);
  textAlign(CENTER);
  fill(0);
  text("Hey... I'm going to my friend's gallery opening tonight. Would you like to join?", width / 2, height / 2);

  drawButton(50, 400, 200, 50, "Sure, let's go!");
  drawButton(300, 400, 250, 50, "Not tonight...");
}

// Getting Ready Scene
function displayGettingReady() {
  background(img4);
  textSize(24);
  textAlign(CENTER);
  fill(0);
  text("You decide to go out and start getting ready.", width / 2, height / 2 - 50);
  text("You pick out an outfit, fix your hair, and prepare to leave.", width / 2, height / 2);

  textSize(20);
  textAlign(CENTER);
  fill(0);
  text("Click to continue to the gallery...", width / 2, height / 2 + 100);

}

// Outcome B: Voicemail
function displayOutcomeB() {
  background(img3);
  textSize(24);
  textAlign(CENTER);
  fill(0);
  text("You decide to let the call go to voicemail. Maybe it's not important...", width / 2, height / 2);

  if (mouseIsPressed) {
    gameState = "reflect";
  }
}

// Reflection Scene
function displayReflection() {
  background(img3);
  textSize(20);
  textAlign(LEFT);
  fill(0);
  text(
    "You sit at home and think about the call. Should you have answered? Maybe it’s better to stay home, but the thought lingers...",
    50,
    100,
    700
  );

  drawButton(50, 400, 200, 50, "Dwell on it");
  drawButton(300, 400, 250, 50, "Call her back");
}

// Game Over Scene
function displayGameOver() {
  background(img3);
  textSize(28);
  textAlign(CENTER);
  fill(255);
  text("You stayed home. Maybe next time...", width / 2, height / 2);
  text("Click to play again.", width / 2, height / 2 + 50);

  if (mouseIsPressed) resetGame();
}

// Gallery Scenes
function displayGalleryScene1() {
  background(img5);
  textSize(24);
  textAlign(CENTER);
  fill(0);
  text(
    "This gallery is incredible! Look at that abstract painting over there—it’s mesmerizing.",
    width / 2,
    height / 2
  );

  if (mouseIsPressed) gameState = "gallery2";
}

function displayGalleryScene2() {
  background(img6);
  textSize(24);
  textAlign(CENTER);
  fill(0);
  text(
    "Hey! I am so glad that you came, I wanted to tell you about this art recidency in colorado I think you should apply for",
    width / 2,
    height / 2
  );

  if (mouseIsPressed) gameState = "gallery3";
}

function displayGalleryScene3() {
  background(255, 200, 200);
  textSize(24);
  textAlign(CENTER);
  fill(0);
  text(
    "Artist: Thank you for coming. This piece is inspired by my travels to Kyoto. I wanted to capture the serenity of the temples.",
    width / 2,
    height / 2
  );

  if (mouseIsPressed) gameState = "galleryFinal";
}

function displayGalleryFinalScene() {
  background(50, 50, 100);
  textSize(28);
  textAlign(CENTER);
  fill(255);
  text(
    "As the evening ends you're glad you said yes, you made memories and it unlocked new oppuntunities you never knew where possible!",
    width / 2,
    height / 2 - 50
  );
  text("Click to play again.", width / 2, height / 2 + 50);

  if (mouseIsPressed) resetGame();
}

// Button Helper
function drawButton(x, y, w, h, label) {
  fill(200);
  rect(x, y, w, h);
  fill(0);
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
        gameState = "outcomeA";
      } else if (mouseInRect(300, 150, 250, 50)) {
        gameState = "outcomeB";
      }
      break;
    case "reflect":
      if (mouseInRect(50, 400, 200, 50)) {
        gameState = "gameOver";
      } else if (mouseInRect(300, 400, 250, 50)) {
        gameState = "gallery1";
      }
      break;
    case "gettingReady":
      gameState = "gallery1";
      break;
  }

}

function mouseInRect(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function resetGame() {
  gameState = "intro";
}
