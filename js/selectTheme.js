const theme_card = document.querySelectorAll(".theme_card");

const themes = [
    "desenhos",
    "sportCar",
    "animes",
    "theme4"
]


const selectionTheme = ({target}) => {
    const card = target.parentNode.querySelector(".face_card");
    const theme = card.getAttribute("data-theme");

    console.log(theme);

    if(themes.includes(theme)){
        localStorage.setItem("theme", theme);
    }else{
        localStorage.setItem("theme", "desenhos");
    }

    selectTheme.classList.add("disabled");
    startGame();
    game.classList.remove("disabled");
}

console.log(theme_card);

theme_card.forEach( element => {
    element.addEventListener("click", selectionTheme);
})