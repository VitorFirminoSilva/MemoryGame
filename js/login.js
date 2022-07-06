const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button");
const form = document.querySelector(".login_form");
const isHidden = () => form.classList.contains("submit");

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
    form.classList.add("submit");
}

const hiddenForm = (event) => {
    
    if(isHidden()){
        console.log("Alo Romario");
        form.classList.remove("submit");
        form.classList.add("disabled");
    }
}



input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
form.addEventListener("transitionend", hiddenForm);