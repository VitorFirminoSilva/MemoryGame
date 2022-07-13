const grid = document.querySelector(".grid");
const spanPlayer = document.querySelector(".player");
const spanTries = document.querySelector(".tries");
const spanTimer = document.querySelector(".timer");
const main = document.querySelector(".game");

const images = [
    "image1",
    "image2",
    "image3",
    "image4",
    "image5",
    "image6",
    "image7",
    "image8",
    "image9",
    "image10",
    "image11",
    "image12",
];


let firstCard = "";
let secondCard = "";
let lenghtGame = 0;
let tryCards = 0;

let seconds = 0;
let minutes = 0;
let str = "";

let theme = "";

const resetGame = () => {
    firstCard = "";
    secondCard = "";
    lenghtGame = 0;
    tryCards = 0;
    seconds = 0;
    minutes = 0;
    str = "";
    theme = "";

    while (grid.firstChild) grid.firstChild.remove();

    clearInterval(this.loop);
}

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll(".disabled_card");
    
    if(disabledCards.length === lenghtGame){

        clearInterval(this.loop);

        const modalPlayer = document.querySelector(".modal_player");
        const modalTries = document.querySelector(".modal_tries");
        const modalTimer = document.querySelector(".modal_timer");

        modalPlayer.innerHTML = "Name:" + localStorage.getItem("player");
        modalTries.innerHTML = "Tries: " + tryCards;
        modalTimer.innerHTML = str;
        modal.style.display = "flex";
        
    }
}

const checkCards = () => {
    const firstElement = firstCard.getAttribute("data-element");
    const secondElement = secondCard.getAttribute("data-element");

    tryCards++;
    spanTries.innerHTML = "Tries: " + tryCards;

    if(firstElement === secondElement){
        firstCard.firstChild.classList.add("disabled_card");
        secondCard.firstChild.classList.add("disabled_card");
        
        firstCard = "";
        secondCard = "";
        checkEndGame();
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

    front.style.backgroundImage = `url(../img/${theme}/${image}.jpg)`;
    back.style.backgroundImage = `url(../img/${theme}/backcard.jpg)`;
    card.appendChild(front);
    card.appendChild(back);

    card.setAttribute("data-element", image);

    card.addEventListener("click", revealCard);

    return card;
}

const loadGame = () => {

    const duplicatedArray = [ ...images, ...images];

    lenghtGame = duplicatedArray.length;

    duplicatedArray.sort(() => Math.random() - 0.5);

    duplicatedArray.forEach((element) =>{
        const card = createCard(element);
        grid.appendChild(card);
    });
}

const startTimer = () => {
    this.loop = setInterval(() => {
        
        seconds ++;

        if(seconds > 60){
            minutes++;
            seconds = 0;
        }

        if(minutes < 10){
            str = "0" + minutes;
        }
        else{
            str = minutes; 
        }


        if(seconds < 10){
            str += ":0" + seconds;
        }
        else{
            str += ":" + seconds; 
        }

        spanTimer.innerHTML = str;
    }, 1000);
}

const startGame = () => {

    const playerName = localStorage.getItem("player");
    theme = localStorage.getItem("theme");
    main.style.backgroundImage = `url(../img/${theme}/background.jpg)`;
    loadGame();
    startTimer();
    spanPlayer.innerHTML = "Name:" + playerName;
    spanTries.innerHTML = "Tries: " + tryCards;
}
