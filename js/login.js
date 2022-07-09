const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button");
const form = document.querySelector(".login_form");
const section = document.querySelector(".login");
const selectTheme = document.querySelector(".theme");

const game = document.querySelector(".game");
const isHidden = () => form.classList.contains("submited");

const validateInput = ({target}) => {
    if(target.value.length > 2){
        button.removeAttribute("disabled");
        return;
    }

    button.setAttribute("disabled", "");
}

const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("player", input.value);
    form.classList.add("submited");
}

const hiddenForm = (event) => {
    
    if(isHidden()){
        form.classList.remove("submited");
        section.classList.add("disabled");
        selectTheme.classList.remove("disabled");
    }
}



input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
form.addEventListener("transitionend", hiddenForm);