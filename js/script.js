import * as fetchItems from './fetch.js';

fetchItems.setUrl("https://csa2020studentapi.azurewebsites.net/rpsls");
fetchItems.getData();

let playerSelection = "";
let player2Selection = "";
let computerRandom = "";
let againstCPU = false;
let player1Response = false;
let player2Response = false;
let oneGameMode = false;
let bestOfThreeMode = false;
let bestOfSevenMode = false;
let gameCount = 0


let hideCpu = document.getElementById("hideCpu");


let cpuBtn = document.getElementById("cpuBtn");
cpuBtn.addEventListener("click", () => {
    setTimeout(() => {
        loadGameModeBtns("../gameModeBtns.html");
    }, 1000);
});

let pvpBtn = document.getElementById("pvpBtn")
pvpBtn.addEventListener("click", () => {
    setTimeout(() => {
        loadGameModeBtns("../gameModeBtns.html");
    }, 1000);
});

document.onkeydown = function (e) {
    if (e.ctrlKey && e.key == "r") {
        e.preventDefault();
        playerSelection = "Rock";
        console.log("You selected: " + playerSelection);
        if (againstCPU) playerVsCpu();
        else {
            playerVsPlayer();
        }
    }
    else if (e.ctrlKey && e.key == "p") {
        e.preventDefault();
        playerSelection = "Paper";
        console.log("You selected: " + playerSelection);
        if (againstCPU) playerVsCpu();
        else {
            playerVsPlayer();
        }
    }
    else if (e.ctrlKey && e.key == "s") {
        e.preventDefault();
        playerSelection = "Scissors";
        console.log("You selected: " + playerSelection);
        if (againstCPU) playerVsCpu();
        else {
            playerVsPlayer();
        }
    }
    else if (e.ctrlKey && e.key == "l") {
        e.preventDefault();
        playerSelection = "Lizard";
        console.log("You selected: " + playerSelection);
        if (againstCPU) playerVsCpu();
        else {
            playerVsPlayer();
        }
    }
    else if (e.ctrlKey && e.key == "k") {
        e.preventDefault();
        playerSelection = "Spock";
        console.log("You selected: " + playerSelection);
        if (againstCPU) playerVsCpu();
        else {
            playerVsPlayer();
        }
    }
}

//Player vs CPU
async function playerVsCpu() {
    let injectResult = document.getElementById("injectResult");
    let player1ScoreAdd = document.getElementById("player1ScoreAdd");
    let cpuScoreAdd = document.getElementById("cpuScoreAdd");
    let player1Score = 0;
    let cpuScore = 0;

    againstCPU = true;
    let computerRandom = await fetchItems.getValue();
    console.log("CPU selected: " + computerRandom);
    if (computerRandom == playerSelection) {
        injectResult.innerText = "It's a draw!";
    }
    if (playerSelection == "Rock") {
        if (computerRandom == "Scissors") {
            player1Score++;
            player1Scoredd.innerText = player1Score;
            injectResult.innerText = "Winner! Rock smashes Scissors.";
        }

        if (computerRandom == "Lizard") {
            player1Score++;
            player1ScoreAdd.innerText = player1Score;
            injectResult.innerText = "Winner! Rock smashes Lizard.";
        }
        if (computerRandom == "Paper") {
            cpuScore++;
            cpuScoreAdd.innerText = cpuScore;
            injectResult.innerText = "Aww you lost! Paper covers Rock.";
        }
        if (computerRandom == "Spock") {
            cpuScore++;
            cpuScoreAdd.innerText = cpuScore;
            injectResult.innerText = "Aww you lost! Spock vaporizes Rock.";
        }
    }
    if (playerSelection == "Paper") {
        if (computerRandom == "Spock") {
            player1Score++;
            player1ScoreAdd.innerText = player1Score;
            injectResult.innerText = "Winner! Paper disproves Spock.";
        }
        if (computerRandom == "Rock") {
            player1Score++;
            player1ScoreAdd.innerText = player1Score;
            injectResult.innerText = "Winner! Paper covers Rock.";
        }
        if (computerRandom == "Scissors") {
            cpuScore++;
            cpuScoreAdd.innerText = cpuScore;
            injectResult.innerText = "Aww you lost! Scissors cuts Paper.";
        }
        if (computerRandom == "Lizard") {
            cpuScore++;
            cpuScoreAdd.innerText = cpuScore;
            injectResult.innerText = "Aww you lost! Lizard eats Paper.";
        }
    }
    if (playerSelection == "Scissors") {
        if (computerRandom == "Lizard") {
            player1Score++;
            player1ScoreAdd.innerText = player1Score;
            injectResult.innerText = "Winner! Scissors decapitates Lizard.";
        }
        if (computerRandom == "Paper") {
            player1Score++;
            player1ScoreAdd.innerText = player1Score;
            injectResult.innerText = "Winner! Scissors cuts paper.";
        }
        if (computerRandom == "Rock") {
            cpuScore++;
            cpuScoreAdd.innerText = cpuScore;
            injectResult.innerText = "Aww you lost! Rock smashes Scissors.";
        }
        if (computerRandom == "Spock") {
            cpuScore++;
            cpuScoreAdd.innerText = cpuScore;
            injectResult.innerText = "Aww you lost! Spock smasges Scissors.";
        }
    }
    if (playerSelection == "Lizard") {
        if (computerRandom == "Paper") {
            player1Score++;
            player1ScoreAdd.innerText = player1Score;
            injectResult.innerText = "Winner! Lizard eats Paper.";
        }
        if (computerRandom == "Spock") {
            player1Score++;
            player1ScoreAdd.innerText = player1Score;
            injectResult.innerText = "Winner! Lizard poisons Spock.";
        }
        if (computerRandom == "Rock") {
            cpuScore++;
            cpuScoreAdd.innerText = cpuScore;
            injectResult.innerText = "Aww you lost! Rock smashes Lizard.";
        }
        if (computerRandom == "Scissors") {
            cpuScore++;
            cpuScoreAdd.innerText = cpuScore;
            injectResult.innerText = "Aww you lost! Scissors decapitate Lizard.";
        }
    }
    if (playerSelection == "Spock") {
        if (computerRandom == "Rock") {
            player1Score++;
            player1ScoreAdd.innerText = player1Score;
            injectResult.innerText = "Winner! Spock vaporizes Rock.";
        }
        if (computerRandom == "Scissors") {
            player1Score++;
            player1ScoreAdd.innerText = player1Score;
            injectResult.innerText = "Winner! Spock smashes Scissors.";
        }
        if (computerRandom == "Paper") {
            cpuScore++;
            cpuScoreAdd.innerText = cpuScore;
            injectResult.innerText = "Aww you lost! Paper disproves Spock.";
        }
        if (computerRandom == "Lizard") {
            cpuScore++;
            cpuScoreAdd.innerText = cpuScore;
            injectResult.innerText = "Aww you lost! Lizard poisons Spock.";
        }
    }
    console.log(player1Score)
}


//Player1 vs Player 2
function playerVsPlayer() {
    let injectResult = document.getElementById("injectResult");
    let player1ScoreAdd = document.getElementById("player1ScoreAdd");
    let player2ScoreAdd = document.getElementById("cpuScoreAdd");
    let player1Score = 0;
    let player2Score = 0;

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


//Injecting game pages and buttons
function loadPlayerVsCpu() {
    fetch("../pages/playerVsCpu.html")
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            injectHere.innerHTML = html;
        });
    setTimeout(() => {
        console.log("test");
        playerVsCpu();
    }, 1000);

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

            let oneGame = document.getElementById("oneGame");
            oneGame.addEventListener("click", () => {
                setTimeout(() => {
                    loadPlayerVsCpu("../pages/playerVsCpu.html");
                    //loadGameModeBtns("../gameModeBtns.html");
                    playerVsCpu();
                    let removeBtn = document.getElementById("removeBtn").classList.add("abraCadabra");
                    let roundsAmount1 = document.getElementById("roundsAmount1").classList.add("abraCadabra");
                    let displayRounds = document.getElementById("displayRounds").classList.remove("d-none");
                }, 1000);
            });

            let bestOfThree = document.getElementById("bestOfThree");
            bestOfThree.addEventListener("click", () => {
                setTimeout(() => {
                    loadPlayerVsCpu("../pages/playerVsCpu.html");
                    //loadGameModeBtns("../gameModeBtns.html");
                    playerVsCpu();
                    let removeBtn = document.getElementById("removeBtn").classList.add("abraCadabra");
                    let roundsAmount1 = document.getElementById("roundsAmount1").classList.add("abraCadabra");
                    let displayRounds = document.getElementById("displayRounds").classList.remove("d-none");
                    let roundsAmount4 = document.getElementById("roundsAmount4").innerText = "3";
                }, 1000);
            });

            let bestOfSeven = document.getElementById("bestOfSeven");
            bestOfSeven.addEventListener("click", () => {
                setTimeout(() => {
                    loadPlayerVsCpu("../pages/playerVsCpu.html");
                    //loadGameModeBtns("../gameModeBtns.html");
                    playerVsCpu();
                    let removeBtn = document.getElementById("removeBtn").classList.add("abraCadabra");
                    let roundsAmount1 = document.getElementById("roundsAmount1").classList.add("abraCadabra");
                    let displayRounds = document.getElementById("displayRounds").classList.remove("d-none");
                    let roundsAmount4 = document.getElementById("roundsAmount4").innerText = "7";
                }, 1000);
            });
        });
}