const grid = document.querySelector(".grid");
const spanPlayer = document.querySelector(".player");
const spanTimer = document.querySelector(".timer");

const images = [
    "91_days",
    "accel",
    "Beatless",
    "Boku_no_hero",
    "Boruto",
    "charlotte"
];

let firstCard = "";
let secondCard = "";
let lenghtGame = 0;

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll(".disabled_card");
    
    if(disabledCards.length === lenghtGame){
        console.log("Acabou as cartas!! em: " + timer + " segundos");
        clearInterval(this.loop);
    }
}

const checkCards = () => {
    const firstElement = firstCard.getAttribute("data-element");
    const secondElement = secondCard.getAttribute("data-element");

    if(firstElement === secondElement){
        firstCard.firstChild.classList.add("disabled_card");
        secondCard.firstChild.classList.add("disabled_card");
        
        firstCard = "";
        secondCard = "";

        checkEndGame()
    
    }else{
        setTimeout( () => {
            firstCard.classList.remove("reveal_card");
            secondCard.classList.remove("reveal_card");

            firstCard = "";
            secondCard = "";
        }, 500);
    }
}

const revealCard = ({target}) => {
    if(target.parentNode.className.includes("reveal_card"))
        return;
    
    if(firstCard === ""){
        firstCard = target.parentNode;
        target.parentNode.classList.add("reveal_card");
    }else if(secondCard === ""){
        secondCard = target.parentNode;
        target.parentNode.classList.add("reveal_card");
        checkCards();
    }


}

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const createCard = (image) => {

    const card = createElement("div", "card");
    const front = createElement("div", "face front");
    const back = createElement("div", "face back");

    front.style.backgroundImage = `url(../img/${image}.jpg)`;
    card.appendChild(front);
    card.appendChild(back);

    card.setAttribute("data-element", image);

    card.addEventListener("click", revealCard);

    return card;
}

const loadGame = () => {

    const duplicatedArray = [ ...images, ...images];

    lenghtGame = duplicatedArray.length;

    console.log(lenghtGame);

    duplicatedArray.sort(() => Math.random() - 0.5);

    duplicatedArray.forEach((element) =>{
        const card = createCard(element);
        grid.appendChild(card);
    });
}

var timer = 0;

const startTimer = () => {
    this.loop = setInterval(() => {
        timer ++;
        spanTimer.innerHTML = timer;
    }, 1000);
}

window.onload = () => {

    const playerName = localStorage.getItem("player");
    startTimer();
    spanPlayer.innerHTML = "Name:" + playerName;
    loadGame();
}
