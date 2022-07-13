const modal = document.getElementById("end_game");
const span = document.querySelector(".close_modal");
const content = document.querySelector(".modal_animation");

const reload = document.querySelector(".reload_game");
const change = document.querySelector(".change_theme");

const modalClose = () => {

    content.classList.remove("modal_animation");
    content.classList.add("modal_animation_exit");

    setTimeout( () => {
        modal.style.display = "none";
    }, 200);
  
}

const reloadGame = () => {
    resetGame();
    startGame();
    modalClose();
}

const changeTheme = () => {
    resetGame();
    returnTheme();
    modalClose();
}

span.addEventListener("click", modalClose);

reload.addEventListener("click", reloadGame);
change.addEventListener("click", changeTheme);