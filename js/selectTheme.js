const theme_card = document.querySelectorAll(".theme_card");

const themes = [
    "desenhos",
    "sportCar",
    "animes",
]


const selectionTheme = ({target}) => {
    const card = target.parentNode.querySelector(".face_card");
    const theme = card.getAttribute("data-theme");
    if(themes.includes(theme)){
        localStorage.setItem("theme", theme);
    }else{
        localStorage.setItem("theme", "desenhos");
    }

    selectTheme.classList.add("disabled");
    startGame();
    game.classList.remove("disabled");
}

const returnTheme = () => {
    selectTheme.classList.remove("disabled");
    game.classList.add("disabled");
}

theme_card.forEach( element => {
    element.addEventListener("click", selectionTheme);
})