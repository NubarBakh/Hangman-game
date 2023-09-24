let hangmanGame = {
    genesis: "Illegal Alien",
    madonna: "Material Girl",
    toto:  "Rosanna",
    queen:  "Princes of the Universe",
    u2:  "With or Without You",
    metallica: "Master of Puppets",
    journey: "Don't Stop Believin'",
    inxs: "Need You Tonight",
    poison: "Fallen Angel",
    rush: "Limelight",
    blondie: "Call Me"
};

let win = 0;
let left9 = 9;
let compChoice = [];
let currentWord = [];
let guess = [];

let guesses = document.querySelector("#guess");
let songs = document.querySelector("#songs");
document.querySelector("#wins").innerHTML = win;
let current = document.querySelector("#currentWord");
document.querySelector("#left9").innerHTML = left9;

const group = Object.keys(hangmanGame);
const song = Object.values(hangmanGame);

function selectRandomGroup() {
    let randomIndex = Math.floor(Math.random() * group.length);
    return group[randomIndex];
}

compChoice = selectRandomGroup();

function putDashes(word, letters) {
    let dashes = '';
    for (let letter of word) {
        if (letters.includes(letter.toLowerCase())) {
            dashes += letter;
        } else if (letter === ' ') {
            dashes += ' ';
        } else {
            dashes += '-';
        }
    }
    return dashes;
}
console.log(compChoice)

currentWord = putDashes(compChoice, guess);
current.innerHTML = currentWord;

window.addEventListener("keyup", function (e) {
    const letter = e.key.toLowerCase();
    if (!guess.includes(letter)) {
        guess.push(letter);
        guesses.innerHTML = `${guess.join(", ")}`;
        currentWord = putDashes(compChoice, guess);
        current.innerHTML = currentWord;
        
        if (!compChoice.toLowerCase().includes(letter)) {
            left9--;
            document.querySelector("#left9").innerHTML = left9;
        }
        
        if (compChoice.toLowerCase() === currentWord.toLowerCase()) {
            win++;
            document.querySelector("#wins").innerHTML = win;
            compChoice==hangmanGame.
                songs.innerHTML=
            alert("You win!");
        }
        
        if (left9 === 0) {
            alert("Game over");
            guess.length=0;
      left9=9;
            // You might want to reset the game here.
        }
    }
});