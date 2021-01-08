import * as fetchItems from './fetch.js';

fetchItems.setUrl("https://csa2020studentapi.azurewebsites.net/rpsls");
fetchItems.getData();

let playerSelection = "";
let player2Selection = "";
let computerRandom = "";
let againstCPU = false;
let player1Response = false;
let player2Response = false;

let cpuBtn = document.getElementById("cpuBtn").addEventListener("click", () => {
    setTimeout(() => {
        loadPlayerVsCpu("../pages/playerVsCpu.html");
        loadGameModeBtns("../gameModeBtns.html");
        playerVsCpu();
    }, 1000);
})

let pvpBtn = document.getElementById("pvpBtn").addEventListener("click", () => {
    setTimeout(() => {
        loadPlayerVsPlayer("../pages/pvp.html");
        loadGameModeBtns("../gameModeBtns.html");
        playerVsplayer();
    }, 1000);
})

document.onkeydown = function (e) {
    if (e.ctrlKey && e.key == "r") {
        e.preventDefault();
        playerSelection = "Rock";
        console.log(playerSelection);
        if (againstCPU) playerVsCpu();
        else {
            playerVsPlayer();
        }
    }
    else if (e.ctrlKey && e.key == "p") {
        e.preventDefault();
        playerSelection = "Paper";
        console.log(e.key);
        if (againstCPU) playerVsCpu();
        else {
            playerVsPlayer();
        }
    }
    else if (e.ctrlKey && e.key == "s") {
        e.preventDefault();
        playerSelection = "Scissors";
        console.log(e.key);
        if (againstCPU) playerVsCpu();
        else {
            playerVsPlayer();
        }
    }
    else if (e.ctrlKey && e.key == "l") {
        e.preventDefault();
        playerSelection = "Lizard";
        console.log(e.key);
        if (againstCPU) playerVsCpu();
        else {
            playerVsPlayer();
        }
    }
    else if (e.ctrlKey && e.key == "k") {
        e.preventDefault();
        playerSelection = "Spock";
        console.log(e.key);
        if (againstCPU) playerVsCpu();
        else {
            playerVsPlayer();
        }
    }
}

//Player vs CPU
async function playerVsCpu() {
    againstCPU = true;
    let computerRandom = await fetchItems.getValue();
    console.log(computerRandom);
    if (computerRandom == playerSelection)
        alert("It's a draw!");
    if (playerSelection == "Rock") {
        if (computerRandom == "Scissors") alert("Winner! Rock smashes Scissors.")
        if (computerRandom == "Lizard") alert("Winner! Rock smashes Lizard.")
        if (computerRandom == "Paper") alert("Aww you lost! Paper covers Rock.")
        if (computerRandom == "Spock") alert("Aww you lost! Spock vaporizes Rock.")
    }
    if (playerSelection == "Paper") {
        if (computerRandom == "Spock") alert("Winner! Paper disproves Spock.")
        if (computerRandom == "Rock") alert("Winner! Paper covers Rock.")
        if (computerRandom == "Scissors") alert("Aww you lost! Scissors cuts Paper.")
        if (computerRandom == "Lizard") alert("Aww you lost! Lizard eats Paper.")
    }
    if (playerSelection == "Scissors") {
        if (computerRandom == "Lizard") alert("Winner! Scissors decapitates Lizard.")
        if (computerRandom == "Paper") alert("Winner! Scissors cuts paper.")
        if (computerRandom == "Rock") alert("Aww you lost! Rock smashes Scissors.")
        if (computerRandom == "Spock") alert("Aww you lost! Spock smasges Scissors.")
    }
    if (playerSelection == "Lizard") {
        if (computerRandom == "Paper") alert("Winner! Lizard eats Paper.")
        if (computerRandom == "Spock") alert("Winner! Lizard poisons Spock.")
        if (computerRandom == "Rock") alert("Aww you lost! Rock smashes Lizard.")
        if (computerRandom == "Scissors") alert("Aww you lost! Scissors decapitate Lizard.")
    }
    if (playerSelection == "Spock") {
        if (computerRandom == "Rock") alert("Winner! Spock vaporizes Rock.")
        if (computerRandom == "Scissors") alert("Winner! Spock smashes Scissors.")
        if (computerRandom == "Paper") alert("Aww you lost! Paper disproves Spock.")
        if (computerRandom == "Lizard") alert("Aww you lost! Lizard poisons Spock.")
    }
}
//async function that does fetching call function and pass api response into that function

//Player1 vs Player 2
function playerVsPlayer() {
    if (playerSelection == player2Selection)
        alert("It's a draw!");
    if (playerSelection == "Rock") {
        if (computerRandom == "Scissors") alert("Player 1 Wins! Rock smashes Scissors.")
        if (computerRandom == "Lizard") alert("Player 1 Wins! Rock smashes Lizard.")
        if (computerRandom == "Paper") alert("Player 2 Wins! Paper covers Rock.")
        if (computerRandom == "Spock") alert("Player 2 Wins! Spock vaporizes Rock.")
    }
    if (playerSelection == "Paper") {
        if (computerRandom == "Spock") alert("Player 1 Wins! Paper disproves Spock.")
        if (computerRandom == "Rock") alert("Player 1 Wins! Paper covers Rock.")
        if (computerRandom == "Scissors") alert("Player 2 Wins! Scissors cuts Paper.")
        if (computerRandom == "Lizard") alert("Player 2 Wins! Lizard eats Paper.")
    }
    if (playerSelection == "Scissors") {
        if (computerRandom == "Lizard") alert("Player 1 Wins! Scissors decapitates Lizard.")
        if (computerRandom == "Paper") alert("Player 1 Wins! Scissors cuts paper.")
        if (computerRandom == "Rock") alert("Player 2 Wins! Rock smashes Scissors.")
        if (computerRandom == "Spock") alert("Player 2 Wins! Spock smasges Scissors.")
    }
    if (playerSelection == "Lizard") {
        if (computerRandom == "Paper") alert("Player 1 Wins! Lizard eats Paper.")
        if (computerRandom == "Spock") alert("Player 1 Wins! Lizard poisons Spock.")
        if (computerRandom == "Rock") alert("Player 2 Wins! Rock smashes Lizard.")
        if (computerRandom == "Scissors") alert("Player 2 Wins! Scissors decapitate Lizard.")
    }
    if (playerSelection == "Spock") {
        if (computerRandom == "Rock") alert("Player 1 Wins! Spock vaporizes Rock.")
        if (computerRandom == "Scissors") alert("Player 1 Wins! Spock smashes Scissors.")
        if (computerRandom == "Paper") alert("Player 2 Wins! Paper disproves Spock.")
        if (computerRandom == "Lizard") alert("Player 2 Wins! Lizard poisons Spock.")
    }
}

function loadPlayerVsCpu() {
    fetch("../pages/playerVsCpu.html")
    .then((response) => { 
        return response.text();
    })
    .then((html) =>{
        injectHere.innerHTML = html;
    });
}

function loadPlayerVsPlayer() {
    fetch("../pages/pvp.html")
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            injectHere.innerHTML = html;
        });
}


function loadGameModeBtns() {
    fetch("../pages/gameModeBtns.html")
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            injectBtns.innerHTML = html;
        });
}