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
let bestOfFiveMode = false;
let bestOfSevenMode = false;
let gameCount = 1;
let player1Score = 0;
let cpuScore = 0;
let unlocked = true;

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

// document.onkeydown = function (e) {
//     if (e.altKey && e.key == "r") {
//         e.preventDefault();
//         playerSelection = "Rock";
//         console.log("You selected: " + playerSelection);
//         if (againstCPU) playerVsCpu();
//         else {
//             playerVsPlayer();
//         }
//     }
//     else if (e.altKey && e.key == "p") {
//         e.preventDefault();
//         playerSelection = "Paper";
//         console.log("You selected: " + playerSelection);
//         if (againstCPU) playerVsCpu();
//         else {
//             playerVsPlayer();
//         }
//     }
//     else if (e.altKey && e.key == "s") {
//         e.preventDefault();
//         playerSelection = "Scissors";
//         console.log("You selected: " + playerSelection);
//         if (againstCPU) playerVsCpu();
//         else {
//             playerVsPlayer();
//         }
//     }
//     else if (e.altKey && e.key == "l") {
//         e.preventDefault();
//         playerSelection = "Lizard";
//         console.log("You selected: " + playerSelection);
//         if (againstCPU) playerVsCpu();
//         else {
//             playerVsPlayer();
//         }
//     }
//     else if (e.altKey && e.key == "k") {
//         e.preventDefault();
//         playerSelection = "Spock";
//         console.log("You selected: " + playerSelection);
//         if (againstCPU) playerVsCpu();
//         else {
//             playerVsPlayer();
//         }
//     }
// }

//Player vs CPU
async function playerVsCpu() {
    let injectResult = document.getElementById("injectResult");
    let player1ScoreAdd = document.getElementById("player1ScoreAdd");
    let cpuScoreAdd = document.getElementById("cpuScoreAdd");

    againstCPU = true;
    fetchItems.getData();
    let computerRandom = fetchItems.getValue();

    document.onkeydown = function (e) {
        if (e.altKey && e.key == "r" && unlocked) {
            unlocked = false;
            e.preventDefault();
            playerSelection = "Rock";
            let player1Img = document.getElementById("player1Img").src = "../images/rock.png";
            console.log("You selected: " + playerSelection);
            if (againstCPU) playerVsCpu();
            else {
                playerVsPlayer();
            }
        }
        else if (e.altKey && e.key == "p" && unlocked) {
            unlocked = false;
            e.preventDefault();
            playerSelection = "Paper";
            let player1Img = document.getElementById("player1Img").src = "../images/paper.png";
            console.log("You selected: " + playerSelection);
            if (againstCPU) playerVsCpu();
            else {
                playerVsPlayer();
            }
        }
        else if (e.altKey && e.key == "s" && unlocked) {
            unlocked = false;
            e.preventDefault();
            playerSelection = "Scissors";
            let player1Img = document.getElementById("player1Img").src = "../images/scissors.png";
            console.log("You selected: " + playerSelection);
            if (againstCPU) playerVsCpu();
            else {
                playerVsPlayer();
            }
        }
        else if (e.altKey && e.key == "l" && unlocked) {
            unlocked = false;
            e.preventDefault();
            playerSelection = "Lizard";
            let player1Img = document.getElementById("player1Img").src = "../images/lizard.png";
            console.log("You selected: " + playerSelection);
            if (againstCPU) playerVsCpu();
            else {
                playerVsPlayer();
            }
        }
        else if (e.altKey && e.key == "k" && unlocked) {
            unlocked = false;
            e.preventDefault();
            playerSelection = "Spock";
            let player1Img = document.getElementById("player1Img").src = "../images/spock.png";
            console.log("You selected: " + playerSelection);
            if (againstCPU) playerVsCpu();
            else {
                playerVsPlayer();
            }t
        }
    }

    if (computerRandom == playerSelection) {
        if (computerRandom == "Rock") {
            console.log("CPU selected: " + computerRandom);
            let cpuImg = document.getElementById("cpuImg").src = "../images/rock.png";
        }
        if (computerRandom == "Paper") {
            console.log("CPU selected: " + computerRandom);
            let cpuImg = document.getElementById("cpuImg").src = "../images/paper.png";
        }
        if (computerRandom == "Scissors") {
            console.log("CPU selected: " + computerRandom);
            let cpuImg = document.getElementById("cpuImg").src = "../images/scissors.png";
        }
        if (computerRandom == "Lizard") {
            console.log("CPU selected: " + computerRandom);
            let cpuImg = document.getElementById("cpuImg").src = "../images/lizard.png";
        }
        if (computerRandom == "Spock") {
            console.log("CPU selected: " + computerRandom);
            let cpuImg = document.getElementById("cpuImg").src = "../images/spock.png";
        }
        injectResult.innerText = "It's a draw!";
    }
    if (playerSelection == "Rock") {
        if (computerRandom == "Scissors") {
            console.log("CPU selected: " + computerRandom);
            player1Score++;
            let cpuImg = document.getElementById("cpuImg").src = "../images/scissors.png";
            player1ScoreAdd.innerText = player1Score;
            injectResult.innerText = "Winner! Rock smashes Scissors.";
        }

        if (computerRandom == "Lizard") {
            console.log("CPU selected: " + computerRandom);
            player1Score++;
            let cpuImg = document.getElementById("cpuImg").src = "../images/lizard.png";
            player1ScoreAdd.innerText = player1Score;
            injectResult.innerText = "Winner! Rock smashes Lizard.";
        }
        if (computerRandom == "Paper") {
            console.log("CPU selected: " + computerRandom);
            cpuScore++;
            let cpuImg = document.getElementById("cpuImg").src = "../images/paper.png";
            cpuScoreAdd.innerText = cpuScore;
            injectResult.innerText = "Aww you lost! Paper covers Rock.";
        }
        if (computerRandom == "Spock") {
            console.log("CPU selected: " + computerRandom);
            cpuScore++;
            let cpuImg = document.getElementById("cpuImg").src = "../images/spock.png";
            cpuScoreAdd.innerText = cpuScore;
            injectResult.innerText = "Aww you lost! Spock vaporizes Rock.";
        }
    }
    if (playerSelection == "Paper") {
        if (computerRandom == "Spock") {
            console.log("CPU selected: " + computerRandom);
            player1Score++;
            let cpuImg = document.getElementById("cpuImg").src = "../images/spock.png";
            player1ScoreAdd.innerText = player1Score;
            injectResult.innerText = "Winner! Paper disproves Spock.";
        }
        if (computerRandom == "Rock") {
            console.log("CPU selected: " + computerRandom);
            player1Score++;
            let cpuImg = document.getElementById("cpuImg").src = "../images/rock.png";
            player1ScoreAdd.innerText = player1Score;
            injectResult.innerText = "Winner! Paper covers Rock.";
        }
        if (computerRandom == "Scissors") {
            console.log("CPU selected: " + computerRandom);
            cpuScore++;
            let cpuImg = document.getElementById("cpuImg").src = "../images/scissors.png";
            cpuScoreAdd.innerText = cpuScore;
            injectResult.innerText = "Aww you lost! Scissors cuts Paper.";
        }
        if (computerRandom == "Lizard") {
            console.log("CPU selected: " + computerRandom);
            cpuScore++;
            let cpuImg = document.getElementById("cpuImg").src = "../images/lizard.png";
            cpuScoreAdd.innerText = cpuScore;
            injectResult.innerText = "Aww you lost! Lizard eats Paper.";
        }
    }
    if (playerSelection == "Scissors") {
        if (computerRandom == "Lizard") {
            console.log("CPU selected: " + computerRandom);
            player1Score++;
            let cpuImg = document.getElementById("cpuImg").src = "../images/lizard.png";
            player1ScoreAdd.innerText = player1Score;
            injectResult.innerText = "Winner! Scissors decapitates Lizard.";
        }
        if (computerRandom == "Paper") {
            console.log("CPU selected: " + computerRandom);
            player1Score++;
            let cpuImg = document.getElementById("cpuImg").src = "../images/paper.png";
            player1ScoreAdd.innerText = player1Score;
            injectResult.innerText = "Winner! Scissors cuts paper.";
        }
        if (computerRandom == "Rock") {
            console.log("CPU selected: " + computerRandom);
            cpuScore++;
            let cpuImg = document.getElementById("cpuImg").src = "../images/rock.png";
            cpuScoreAdd.innerText = cpuScore;
            injectResult.innerText = "Aww you lost! Rock smashes Scissors.";
        }
        if (computerRandom == "Spock") {
            console.log("CPU selected: " + computerRandom);
            cpuScore++;
            let cpuImg = document.getElementById("cpuImg").src = "../images/spock.png";
            cpuScoreAdd.innerText = cpuScore;
            injectResult.innerText = "Aww you lost! Spock smashes Scissors.";
        }
    }
    if (playerSelection == "Lizard") {
        if (computerRandom == "Paper") {
            console.log("CPU selected: " + computerRandom);
            player1Score++;
            let cpuImg = document.getElementById("cpuImg").src = "../images/paper.png";
            player1ScoreAdd.innerText = player1Score;
            injectResult.innerText = "Winner! Lizard eats Paper.";
        }
        if (computerRandom == "Spock") {
            console.log("CPU selected: " + computerRandom);
            player1Score++;
            let cpuImg = document.getElementById("cpuImg").src = "../images/spock.png";
            player1ScoreAdd.innerText = player1Score;
            injectResult.innerText = "Winner! Lizard poisons Spock.";
        }
        if (computerRandom == "Rock") {
            console.log("CPU selected: " + computerRandom);
            cpuScore++;
            let cpuImg = document.getElementById("cpuImg").src = "../images/rock.png";
            cpuScoreAdd.innerText = cpuScore;
            injectResult.innerText = "Aww you lost! Rock smashes Lizard.";
        }
        if (computerRandom == "Scissors") {
            console.log("CPU selected: " + computerRandom);
            cpuScore++;
            let cpuImg = document.getElementById("cpuImg").src = "../images/scissors.png";
            cpuScoreAdd.innerText = cpuScore;
            injectResult.innerText = "Aww you lost! Scissors decapitate Lizard.";
        }
    }
    if (playerSelection == "Spock") {
        if (computerRandom == "Rock") {
            console.log("CPU selected: " + computerRandom);
            player1Score++;
            let cpuImg = document.getElementById("cpuImg").src = "../images/rock.png";
            player1ScoreAdd.innerText = player1Score;
            injectResult.innerText = "Winner! Spock vaporizes Rock.";
        }
        if (computerRandom == "Scissors") {
            console.log("CPU selected: " + computerRandom);
            player1Score++;
            let cpuImg = document.getElementById("cpuImg").src = "../images/scissors.png";
            player1ScoreAdd.innerText = player1Score;
            injectResult.innerText = "Winner! Spock smashes Scissors.";
        }
        if (computerRandom == "Paper") {
            console.log("CPU selected: " + computerRandom);
            cpuScore++;
            let cpuImg = document.getElementById("cpuImg").src = "../images/paper.png";
            cpuScoreAdd.innerText = cpuScore;
            injectResult.innerText = "Aww you lost! Paper disproves Spock.";
        }
        if (computerRandom == "Lizard") {
            console.log("CPU selected: " + computerRandom);
            cpuScore++;
            let cpuImg = document.getElementById("cpuImg").src = "../images/lizard.png";
            cpuScoreAdd.innerText = cpuScore;
            injectResult.innerText = "Aww you lost! Lizard poisons Spock.";
        }
    }
    console.log(gameCount);
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
        if (computerRandom == "Spock") alert("Player 2 Wins! Spock smashes Scissors.")
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
                    let roundsAmount1 = document.getElementById("roundsAmount1").innerText = "Round";
                    let displayRounds = document.getElementById("displayRounds").classList.remove("d-none");

                }, 1000);
            });

            let bestOfFive = document.getElementById("bestOfFive");
            bestOfFive.addEventListener("click", () => {
                setTimeout(() => {
                    loadPlayerVsCpu("../pages/playerVsCpu.html");
                    playerVsCpu();
                    let removeBtn = document.getElementById("removeBtn").classList.add("abraCadabra");
                    let roundsAmount1 = document.getElementById("roundsAmount1").innerText = "Round";
                    let displayRounds = document.getElementById("displayRounds").classList.remove("d-none");
                    let roundsAmount4 = document.getElementById("roundsAmount4").innerText = "5";
                    let nextRound = document.getElementById("nextRound").classList.remove("d-none");

                    let nextRoundBtn = document.getElementById("nextRoundBtn");
                    nextRoundBtn.addEventListener("click", () => {
                        if (gameCount < 6) {
                            gameCount++;
                            unlocked = true;
                            setTimeout(() => {
                                if (gameCount == 6) {
                                    if (player1Score > cpuScore) {
                                        let injectResult = document.getElementById("injectResult").innerText = "Player 1 is the winner!";
                                    }
                                    if (player1Score < cpuScore) {
                                        let injectResult = document.getElementById("injectResult").innerText = "CPU is the winner!";
                                    }
                                    if (player1Score == cpuScore) {
                                        let injectResult = document.getElementById("injectResult").innerText = "You both tied!";
                                    }
                                    nextRoundBtn.classList.add("d-none");
                                }
                                else {

                                    console.log(gameCount)
                                    roundsAmount2.innerHTML = gameCount;
                                    let injectResult = document.getElementById("injectResult").innerText = "Select your weapon!";
                                    let player1Img = document.getElementById("player1Img").src = "../images/questionMark.png";
                                    let cpuImg = document.getElementById("cpuImg").src = "../images/questionMark.png";
                                }
                            }, 1000);
                        }
                    });

                }, 1000);
            });

            let bestOfSeven = document.getElementById("bestOfSeven");
            bestOfSeven.addEventListener("click", () => {
                let injectResult = document.getElementById("injectResult");
                setTimeout(() => {
                    loadPlayerVsCpu("../pages/playerVsCpu.html");
                    playerVsCpu();
                    let removeBtn = document.getElementById("removeBtn").classList.add("abraCadabra");
                    let roundsAmount1 = document.getElementById("roundsAmount1").innerText = "Round";
                    let displayRounds = document.getElementById("displayRounds").classList.remove("d-none");
                    let roundsAmount4 = document.getElementById("roundsAmount4").innerText = "7";
                    let nextRound = document.getElementById("nextRound").classList.remove("d-none");

                    let nextRoundBtn = document.getElementById("nextRoundBtn");
                    nextRoundBtn.addEventListener("click", () => {
                        if (gameCount < 8) {
                            gameCount++;
                            unlocked = true;
                            setTimeout(() => {
                                if (gameCount == 8) {
                                    if (player1Score > cpuScore) {
                                        let injectResult = document.getElementById("injectResult").innerText = "Player 1 is the winner!";
                                    }
                                    if (player1Score < cpuScore) {
                                        let injectResult = document.getElementById("injectResult").innerText = "CPU is the winner!";
                                    }
                                    if (player1Score == cpuScore) {
                                        let injectResult = document.getElementById("injectResult").innerText = "You both tied!";
                                    }
                                    nextRoundBtn.classList.add("d-none");
                                }
                                else {

                                    console.log(gameCount)
                                    roundsAmount2.innerHTML = gameCount;
                                    let injectResult = document.getElementById("injectResult").innerText = "Select your weapon!";
                                    let player1Img = document.getElementById("player1Img").src = "../images/questionMark.png";
                                    let cpuImg = document.getElementById("cpuImg").src = "../images/questionMark.png";
                                }
                            }, 1000);
                        }
                    });
                }, 1000);


            });

            function nextRound() {
                if (bestOfFiveMode) {

                }
            }

        });
}