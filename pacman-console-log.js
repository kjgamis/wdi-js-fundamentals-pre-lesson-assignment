console.log('Pac-Man eats ghosts for lunch.');
console.log(0.2 + 0.1);

var num_ghosts = 4;
var name = 'Pac-Man';
var sentence = 'Our hero, ' + name + ', must eat ' + num_ghosts + ' ghosts for maximum points.';
console.log(sentence);
console.log(name.length);

// Array
var ghosts_array = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

console.log('There are ' + ghosts_array.length + ' ghosts.')
console.log('Their names are:');
console.log(ghosts_array[0]);
console.log(ghosts_array[1]);
console.log(ghosts_array[2]);
console.log(ghosts_array[3]);

// Objects
var ghosts_objects = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange'};

console.log(ghosts_objects);
console.log(ghosts_objects.inky);
console.log(ghosts_objects.blinky);
console.log(ghosts_objects.pinky);
console.log(ghosts_objects.clyde);
// The square bracket notation is used when the property you want to retrieve is stored in a variable
var ghostName = 'clyde';
console.log(ghosts_objects[ghostName]);

// Loops
var ghosts_loops = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

for (var index = 0; index < ghosts_loops.length; index++) {
  console.log('Pac-Man eats ' + ghosts_loops[index]);
}

// If..else
var powerPelletEaten = false;
var ghosts_ie = 4;

while (true) {
  console.log('Ghosts remaining: ' + ghosts_ie);

  if (powerPelletEaten == false) {
    console.log('Pac-Man eats the power pellet.');
    powerPelletEaten = true;
  } else if (ghosts_ie > 0) {
    console.log('Pan-Man eats a ghost.');
    ghosts_ie--;
  } else {
    break;
  }
}

console.log('Pac-Man returns home after a long day in the maze.');

// Switch
var ghost_switch = 'Blinky';
var colour;

switch (ghost_switch) {
  case 'Inky':
    colour = 'Cyan';
    break;
  case 'Blinky':
    colour = 'Red';
    break;
  case 'Pinky':
    colour = 'Pink';
    break;
  case 'Clyde':
    colour = 'Orange';
    break;
}

console.log(ghost_switch + ' is the colour ' + colour);

// Functions
function eatDot() {
  console.log("MUNCH!");
}

// Calling a function
eatDot();
eatDot; // returns the actual function in node
// Passing parameters to functions
var highScores = [];
function addHighScore(highScoreList, playerInitials, score) {
  var record = { player: playerInitials, score: score };
  highScoreList.push(record);
}

addHighScore(highScores, 'KJG', 2000);
console.log(highScores);

// Return Values
function addScore(currentScore, eaten) {
  switch (eaten) {
    case 'dot':
      scoreToAdd = 10;
      break
    case 'powerPellet':
      scoreToAdd = 50;
      break;
    case 'firstGhost':
      scoreToAdd = 200;
      break;
    case 'secondGhost':
      scoreToAdd = 400;
      break;
  }
  return currentScore + scoreToAdd;
}

var score = 0;
score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'powerPellet');
score = addScore(score, 'firstGhost');
score = addScore(score, 'secondGhost');
console.log('Your score: ' + score);
