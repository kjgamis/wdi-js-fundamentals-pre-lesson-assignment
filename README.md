# JavaScript Fundamentals: From Ruby to JavaScript

[See assignment in Alexa.](https://alexa.bitmaker.co/wdi/67/assignments/2048/latest)

## Intro
JavaScript is everywhere: in your browser, on servers using **node**, and more recently, developers are even creating desktop applications with **electron**.

This assignment will cover programming concepts that you're already familiar with in Ruby, and introduce you to how they're done in JavaScript.

We'll be using the 80's iconic classic arcade game Pac-Man for our example code.

Start by forking this repository to use as a shell for all the mini javascript files you'll be creating.

## A note about conventions
For all of the JavaScript examples provided, you should type in the code where appropriate. This will be at one of the following places:

- your operating system's command prompt
- the node prompt
- in your editor
If you see a `$`, that means enter the data at your command prompt:

```
$ pwd
/Users/sean/Desktop
```

If you see a `>`, that means enter data at a node prompt:

```
> 1 + 2 + 3
6
```

If you see `// filename.js`, that means you should:

1. create this file
2. enter code into your editor
3. save the file
4. run the file
5. add and commit your code to git

So for this example:

```
// pacman-console.js

console.log('Hello, Pac-Man!');
```
You should:

1. create a file called `pacman-console.js`
2. enter `console.log('Hello, Pac-Man!');` into the file in your editor
3. save the file
4. run it with `node pacman-console.js` in the terminal
5. add the code to git:
  1. `git status`
  2. `git add .`
  3. `git status`
  4. `git diff head`
  5. `git commit -m 'my first pacman program'`
  6. `git status`
  7. `git push`
  8. `git status`
Occasionally you'll see examples in Ruby as well, as many examples compare JavaScript with Ruby. If you already feel you fully understand the concept in Ruby, then you can skip typing in those examples.

## Node.js
Although much of the JavaScript you'll be creating in this course will be for the browser, Node, which allows you to run JavaScript on your computer from within your terminal, can be an easier way to experiment and learn.

**Is Node installed?**
From your terminal:

```
$ node -v
```

If a version is reported back to you, you already have Node installed and you can skip the next section **"Installing Node"**. If you get `command not found` or something similar, please install node as per the next section's instructions.

**Installing Node**
Please install Node as per your Operating System's instructions:

**Mac OS X**
From your command prompt, use brew to install node:

```
$ brew install node
```

***Ubuntu Linux***
Follow the instructions at http://www.hostingadvice.com/how-to/install-nodejs-ubuntu-14-04/#node-version-manager

**Verify Node is Installed**
```
$ node -v
```
It should report back the version of node install. If not, please ask an instructor for help.

**Node as a REPL (Read-Evaluate-Print-Loop)**
With Ruby, we use `irb` to bring up a REPL. With `node`, just type node at your command prompt and you should see a `>`, indicating that you're now in the Node REPL.

```
$ node
```
```
>
```

Try doing a little math with JavaScript code at the node prompt:

```
> 8 * 8;
64
>
```
The Node REPL is a great place to experiment with your code when you're trying to figure something out.

Like `irb` in Ruby, the Node REPL reports back the return value of the function you just ran. Often this will be `undefined` as that's the default return value of all functions.

```
> 4 * 10;
40 // 40 is the return value of 4 * 10
> var enemy = "Ghost";
undefined // Assigning a variable returns undefined
> console.log(enemy);
Ghost // console.log displays ghost on the screen
undefined // but then it returns undefined
> enemy;
'Ghost' // No undefined here -- that's because 'enemy' returned the string we set it to.
```

For help, type `.help`:

```
> .help
```

If you get stuck (i.e. you continue to see `...`), press `ctrl-c` or type `.break` to get back to the regular Node prompt:

```
> > var ghosts = [
... 'Inky',
... // Now press enter several times
...
...
... .break // or ctrl-c
> // Ahh relief... back to our regularly scheduled Node prompt.
```

Press `ctrl-d` or type `.exit` to exit the Node REPL.

**Running a Node script**
Let's create and run our first Node script.

Create a file:

```
$ touch pacman-console-log.js
```

Open up `pacman-console-log.js` in your editor, and add the following code:

```
// pacman-console-log.js

console.log('Pac-Man eats ghosts for lunch.');
```

And now, back at your command line, run the script by typing `node <filename>`:

```
$ node pacman-console-log.js
Pac-Man eats ghosts for lunch.
```

Notice that running a JavaScript file and entering the Node REPL both use the same command: `node`

## JavaScript
Now let's get on with while you're really here -- to learn some JavaScript (and help Pac-Man achieve his highest score yet!).

## Comments
In Ruby, we use a # for a comment. In JavaScript, use `//` for a single-line comment and `/* */` for multiline comments.

This assignment uses comments throughout -- you don't have to type those, it's just my way of letting you know something while you're in the middle of coding.

Ruby:

```
# I am a comment!
```

JavaScript:

```
// I am a comment!
var ghost = "Blinky!"; // <<-- this variable assignment is not a comment, but everything after the // in this sentence is a comment.
/*
  Each
  of
  theses
  lines
  are
  comments
*/
```

## Semi-colons
Every statement in JS ends with a semi-colon. If you forget it, things will probably still work, but it's best not to rely on that.

## Data Types
There are several data types that are `primitives` and one Object data type. A primitive data type is a basic building block of the language.

- Undefined
- Null
- Boolean
- Number
- String
- Object (not a primitive)

## Dynamic Typing
Like Ruby, JavaScript is a dynamic language. This means you don't have to declare the type of a variable ahead of time. The type will be determined automatically while the program is being processed.

Let's play around in the Node REPL to test this out.

```
$ node
```
```
> var ghost = 'Inky';
> ghost
'Inky'
> typeof(ghost);
'string' // JavaScript automatically made 'ghost' a 'string' data type
> var numberOfGhosts = 4;
> typeof(numberOfGhosts);
'number' // JavaScript automatically made 'numberOfGhosts' a 'number' data type
```

Notice how we used camel case for the `numberOfGhosts` variable, instead of underscores, like we do in Ruby (e.g. `number_of_ghosts`). Technically you could use underscores in your variable names, but the convention in JavaScript is camel case: the first word of the variable is all lowercase, and capitalize the first letter of each word following (if any).

## Variables
Variables can vary, and can be defined using the var keyword.

```
> var ghost = 'Inky';
> ghost
> ghost = 'Blinky'; // We're redefining the ghost variable
> ghost
```

## Strings
Strings are text. You set them up by putting quotes around them.

```
> var name = 'Pac-Man';
> name
```

By convention in JavaScript, developers prefer **single-quotes** unless **double-quotes** are needed (i.e. because the string has a single-quote within it).

You can concatenate (join together) strings together using a `+`.

```
> var num_ghosts = 4;
> var name = 'Pac-Man';
> var sentence = 'Our hero, ' + name + ', must eat ' + num_ghosts + ' ghosts for maximum points.';
> sentence
```
Strings have the length property and many useful methods.

```
> var name = 'Pac-Man';
> name.length;
> name.toUpperCase();
> name.replace('Man', 'Woman');
```

You can learn more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

## Booleans (true and false)
Truthiness and falsiness are a bit more complicated in JavaScript than in Ruby.

The following are falsey:

- undefined
- null
- false
- 0
- NaN
- '' (empty string)
Everything else is truthy.

Test this out in the Node REPL:

```
> Boolean(undefined)
> Boolean(null)
> Boolean(false)
> Boolean(true)
> Boolean(0)
> Boolean(1)
> Boolean('')
> Boolean('Waka Waka!')
```

## Numbers
In Ruby, we use Integers (Fixnum) for whole numbers, and Floats for numbers with a decimal. But in JavaScript, there's just Number, which are always floats, even if they look like Integers sometimes.

Let's go into irb (the Ruby REPL) to experiment:

```
$ irb
```

```
irb > num_that_looks_like_an_integer = 1
irb >  num_that_looks_like_an_float = 1.0
irb > num_that_looks_like_an_integer.class
irb > num_that_looks_like_an_float.class
irb > num_that_looks_like_an_integer
irb > num_that_looks_like_an_float
```

Now let's try a similar experiment in the Node:

```
> var numThatLooksLikeAnInteger = 1;
> var numThatLooksLikeAFloat = 1.0;
> typeof(numThatLooksLikeAnInteger);
"number"
> typeof(numThatLooksLikeAFloat);
"number"
> numThatLooksLikeAnInteger
1
> numThatLooksLikeAFloat
1 // Exact same as the number that looked like an Integer even though we defined it as 1.0
```

## Collections
Let's move to our editor to work on the following longer code blocks.

I'll show you the Ruby code as well where appropriate by indicating it's filename pacman.rb. You don't need to actually create this file and test the Ruby code: instead use it as a reference of something familiar to better understand the JavaScript code.

**Arrays**
Defining and working with arrays is similar to Ruby.

**Ruby:**
(You don't need to test this out)

```
# pacman.rb
ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde']
puts "There are #{ghosts.length}  ghosts."
puts 'Their names are: '
puts ghosts[0]
puts ghosts[1]
puts ghosts[2]
puts ghosts[3]
```

**JavaScript:**
(You should type in the JavaScript code)

```
// pacman-arrays.js
var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

console.log('There are ' + ghosts.length + ' ghosts.');
console.log('Their names are: ');
console.log(ghosts[0]);
console.log(ghosts[1]);
console.log(ghosts[2]);
console.log(ghosts[3]);
```
```
$ node pacman-arrays.js
```

**Objects**
Objects are defined using `objectName = {}` and properties are assigned using dot notation.

A JavaScript Object is kind of quirky; it's halfway between a Ruby Object and a Ruby Hash, as you'll see below.

**Ruby:**
```
# pacman.rb
class Ghost
  attr_accessor :colour, :personality
end
inky = Ghost.new
inky.colour = 'Cyan'
inky.personality = 'Shadow'
puts inky.inspect
```

**JavaScript:**

```
// pacman-objects-1.js
var inky = {};
inky.colour = 'Cyan';
inky.personality = 'Shadow';
console.log(inky);
```

We can also setup an object when we first define it:

```
// pacman-objects-2.js
var ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange' };
console.log(ghosts);
```

You can retrieve the values in your object using either dot-notation or square bracket notation.

```
// pacman-objects-2.js
...
console.log(ghosts.inky); // => 'Cyan'
console.log(ghosts.blinky); // => 'Red'

// same as above
console.log(ghosts['inky']); // => 'Cyan'
console.log(ghosts['blinky']); // => 'Red'
```

The square bracket notation is used when the property you want to retrieve on the object is stored in a variable:

```
var ghostName = 'clyde';
ghosts[ghostName]; // => 'Orange'
```

## Loops
Now that we have a way to define collections as Arrays and Objects, let's move on to loops.

In Ruby, we often use `each` for iterating over a collection:

```
ghosts = %w(Inky Blinky Pinky Clyde)
ghosts.each do |ghost|
  puts ghost
end
```

Most of the looping and iteration functionality in JavaScript is performed at a lower level than in Ruby.

**For Loop**
Often loops in JavaScript will follow a more conventional approach:

```
for (<<initializer>>; <<condition>>; <<post iteration>>) {
  <<statement>>
}
```

Pac-Man just ate a power-pellet and wants to eat all four ghosts!

```
// pacman-for-loop.js
var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

for (var index = 0; index < ghosts.length; index++) {
  console.log('Pac-Man eats ' + ghosts[index]);
}
```

That unusual `index++` notation increments the value of `index` by 1. You can also use `index--` to decrement (reduce) the value by 1.

## Conditionals

**If..else**
If statements work the same as Ruby, where you evaluate a condition to see if it's true.

**Ruby:**

```
# pacman.rb
power_pellet_eaten = false
ghosts = 4
while true do
  puts "Ghosts remaining: #{ghosts}"

  if power_pellet_eaten == false
    puts 'Pac-Man eats the power pellet.'
    power_pellet_eaten = true
  elsif ghosts > 0
    puts 'Pac-Man eats a ghost.'
    ghosts--
  else
    break
  end
end

puts 'Pac-Man goes home after a long day in the maze.'
```

**JavaScript:**

```
// pacman-if-else.js
var powerPelletEaten = false;
var ghosts = 4;

while (true) {
  console.log('Ghosts remaining: ' + ghosts);

  if (powerPelletEaten == false) {
    console.log('Pac-Man eats the power pellet.');
    powerPelletEaten = true;
  } else if (ghosts > 0) {
    console.log('Pac-Man eats a ghost.');
    ghosts--;
  } else {
    break;
  }
}

console.log('Pac-Man returns home after a long day in the maze.');
```

**Switch**
The `switch` statement in JavaScript is like the case statement in Ruby.

**Ruby:**

```
# pacman.rb
ghost = 'Pinky'
case ghost
when 'Inky'
  colour = 'Cyan'
when 'Blinky'
  colour = 'Red'
when 'Pinky'
  colour = 'Pink'
when 'Clyde'
  colour = 'Orange'
end
puts "#{ghost} is the colour #{colour}"
```

**JavaScript:**

```
// pacman-switch.js
var ghost = 'Blinky';
var colour;

switch (ghost) {
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

console.log(ghost + ' is the colour ' + colour);
```

## Functions
Functions are similar to `methods` in Ruby, but they are also more powerful. Technically speaking, the difference between a function and a method is that functions stand alone, but methods are behaviours of an object.

JavaScript has **first-order functions**. This means you can define functions on their own (without an object), you can store a function in a variable and you can provide a function as an argument to a different function!

**Defining a Function**

**Ruby:**

```
# pacman.rb
def eat_dot
  puts "MUNCH!"
end
```

**JavaScript:**
There are two main ways to define functions in JavaScript:

```
// Named function
function eatDot() {
  console.log("MUNCH!");
}

// Anonymous function
// Here we assign the function to a variable instead of giving it a name directly
var eatDot = function() {
  console.log("MUNCH!");
}
```

Note that you shouldn't actually see anything yet if you typed that in -- that's because we never called the function.

**Calling a function**
Functions are called by putting `()` after the function name. Let's try this out in Node REPL.

```
> function eatDot() {
    console.log("MUNCH!");
  }
> eatDot();
MUNCH!
```

Let's try calling the function without the brackets:

```
> eatDot
[Function: eatDot] // eatDot without () returns the actual function, but doesn't execute it
```

We can see evidence of trying to call the function without brackets by testing it out with the built in JavaScript String data type:

```
> var hero = 'Pac-Man'
> hero.toUpperCase;
[Function: toUpperCase] // no (), so we didn't call this function
> hero.toUpperCase();
'PAC-MAN' // now we have (), so we did call this function
> hero.length;
7 // length returned 7, the number of characters in 'Pac-Man', because length is a property of the String type, not a function of the String type
```
**Passing parameters to functions**
Often you'll pass parameters into the function, in which case you put the parameters between the brackets. Let's create a function to keep track of high scores.

```
> var highScores = [];
> function addHighScore(highScoreList, playerInitials, score) {
    var record = { player: playerInitials, score: score };
    highScoreList.push(record); // add record to array
  }
> highScores
[] // empty array to start
> addHighScore(highScores, 'SDL', 2000);
> highScores
[ { player: 'SDL', score: 2000 } ]
> addHighScore(highScores, 'JSL', 10000);
> highScores
[ { player: 'SDL', score: 2000 },
  { player: 'JSL', score: 10000 } ]
```

**Return Values**
With Ruby, the last expression of a method is returned, however, as you've likely noticed in the Node REPL, `undefined` is returned in JavaScript by default. To return a value in JavaScript, we have to explicitly return it.


Let's have Pac-Man earn some points:

```
// pacman-return.js
function addScore(currentScore, eaten) {
  switch (eaten) {
  case 'dot':
    scoreToAdd = 10;
    break;
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
console.log('Your score: ' + score);
```

## Game Over
That's it for this gentle introduction to JavaScript. I hope you feel a little more comfortable with the syntax and basic concepts, and are eager to take on your next lesson in which you'll be introduced to new programming concepts that make JavaScript a unique a powerful language.
