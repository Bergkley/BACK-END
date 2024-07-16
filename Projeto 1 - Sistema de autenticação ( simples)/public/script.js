const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordconfirmation = document.getElementById("password-confirmation")

form.addEventListener('submit',function(e){
    e.preventDefault()

    checkInputs()
});

function checkInputs () {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordconfirmationValue = passwordconfirmation.value;

    if(usernameValue === ""){
        setErrorFor(username, "o nome de usuário é obrigatório")

    }else {
        setSuccessFor(username)
    }

    if(emailValue === ""){
        setErrorFor(email, "o email é obrigatório")
    }else if(!checkEmail(emailValue)){
        setErrorFor(email,"por favor,insira um email válido")
    }else {
        setSuccessFor(email)
    }

    if(passwordValue === ""){
        setErrorFor(password,"A senha é obrigatória")
    }else if (passwordValue.length <7){
        setErrorFor(password,"a senha  precisa ter no mínimo 7 caractere ")
    }else{
        setSuccessFor(password)
    }

    if(passwordconfirmationValue === ""){
        setErrorFor(passwordconfirmation,"A confirmação da senha é obrigatória")
    }else if (passwordconfirmationValue !== passwordValue) {
        setErrorFor(passwordconfirmation,"As senhas não conferem")
    }else {
        setSuccessFor(passwordconfirmation)
    }

    const formControls = form.querySelectorAll('.form-control')

    const formIsvalid = [ ...formControls].every((formControl) => {
        return formControl.className === "form-control success";
    });
    if (formIsvalid) {
        alert("o formulário foi enviado com sucesso")
    }
}




function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")

    small.innerText = message;

    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success"
}


function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }