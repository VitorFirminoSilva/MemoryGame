const theme_card = document.querySelector(".theme_card");

const themes = [
    "owlTheme",
    "theme2",
    "theme3",
    "theme4"
]


const selectionTheme = ({target}) => {
    const card = target.parentNode.querySelector(".face_card");
    const theme = card.getAttribute("data-theme");

    if(themes.includes(theme))
        localStorage.setItem("theme", theme);
    else
        localStorage.setItem("theme", "owlTheme");

    sectionTheme.classList.add("disabled");
    startGame();
    game.classList.remove("disabled");
}

theme_card.addEventListener("click", selectionTheme);