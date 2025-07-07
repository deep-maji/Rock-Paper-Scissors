/*

Rock <beats> Scissors
paper <beats> rock
Scissors <beats> paper 

*/

const rockPaperScissor = {
    1: "rock",
    2: "paper",
    3: "scissors"
}

function computerSelect() {
    let random = Math.floor(Math.random() * 3 + 1);
    return rockPaperScissor[random];
}

const rpss = document.querySelectorAll(".rps");
const won = document.querySelector(".won");
const userresult = document.querySelector(".user");
const computerresult = document.querySelector(".computer");

function showresult(user, computer) {
    
    switch (user.toLowerCase()) {
        case "rock":
            userresult.innerHTML = `<img src="./assets/rock.png" alt=""><h2>User</h2>`;
            break;
        case "paper":
            userresult.innerHTML = `<img src="./assets/paper.png" alt=""><h2>User</h2>`;
            break;
        default:
            userresult.innerHTML = `<img src="./assets/scissor.png" alt=""><h2>User</h2>`;
            break;
    }

    switch (computer.toLowerCase()) {
        case "rock":
            computerresult.innerHTML = `<img src="./assets/rock.png" alt=""><h2>Computer</h2>`;
            break;
        case "paper":
            computerresult.innerHTML = `<img src="./assets/paper.png" alt=""><h2>Computer</h2>`;
            break;
        default:
            computerresult.innerHTML = `<img src="./assets/scissor.png" alt=""><h2>Computer</h2>`;
            break;
    }
}

rpss.forEach((rps) => {
    rps.addEventListener("click", () => {
        let computer = computerSelect();
        let user = rps.id;

        if (user.toLowerCase() == computer.toLowerCase()) {
            won.innerHTML = `<h1>Tie</h1>`;
            showresult(user,computer);
        }
        else if (
            user.toLowerCase() == "paper" && computer.toLowerCase() == "rock" ||
            user.toLowerCase() == "scissors" && computer.toLowerCase() == "paper" ||
            user.toLowerCase() == "rock" && computer.toLowerCase() == "scissors"
        ) {
            won.innerHTML = `<h1>You Won</h1>`;
            showresult(user,computer);
        }
        else {
            won.innerHTML = `<h1>You lost</h1>`;
            showresult(user,computer);
        }
    })
})




