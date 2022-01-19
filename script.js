// I used your starting example as inspiration
let words = new Map();
let passwordExceptPreviousWord = ""
let previousWord = ""
let password = ""
function preload() {
  loadStrings('beale.wordlist.asc.txt', createMap);
}

let lookupKey = "12342";

function createMap(strings) {
  for (let line of strings) {
    let [key, word] = line.split('\t');
    if (key.length === 5) {
      words.set(key, word);
    }
  }
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 10);
  background('blue');
}

function draw() {
  fill('white');
  textSize(50);
  text('Password Generator', 30, 80);
  textSize(20);
  text("Press the button 5 times to generate", 30, 120);
  button = createButton('Create Password');
  button.position(width / 4, height / 2);
  button.mousePressed(getPassword);
  // Creates a button that you press in order to generate 5 words
  input = createInput(`${passwordExceptPreviousWord}${previousWord}`, "text")
  input.position(width / 2, height / 2);
  input.size(200)
  // Creates text box in which you can copy and paste your password for easy access
  noLoop();
  fill('white')
  textSize(20);


  // text('Press space to generate a word', 10, 30);
  // text('Press "s" to generate a special character', 10, 50);
  // text('Press "n" to generate a number', 10, 70);
}

function getPassword() {
  passwordExceptPreviousWord +=
    previousWord;
  previousWord = words.get
    (generateLookupKey());
  redraw();
  // uses lookupKey in order to generate unique words
}




function generateLookupKey() {
  //generates Lookupkey
  key = "";
  const dieFaces = [1, 2, 3, 4, 5, 6]
  for (let i = 0; i < 5; i++) {
    key = `${key}${random(dieFaces)}`;
  }
  return key;
}