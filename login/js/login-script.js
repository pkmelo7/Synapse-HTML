const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', ()=>{
    container.classList.add("active");
});

loginBtn.addEventListener('click', ()=>{
    container.classList.remove("active");
});

const $passwordUp = document.getElementById('txtSenhaUp');
const $togglerUp = document.getElementById('tpEyeUp');

const showHidePasswordUp = () => {
    if ($passwordUp.type == 'password'){
        $passwordUp.setAttribute('type', 'text');
    }
    else {
        $passwordUp.setAttribute('type', 'password',);
    }

    $togglerUp.classList.toggle('fa-eye');
    $togglerUp.classList.toggle('fa-eye-slash');
};

$togglerUp.addEventListener(
    'click', showHidePasswordUp,
);

const $passwordIn = document.getElementById('txtSenhaIn');
const $togglerIn = document.getElementById('tpEyeIn');

const showHidePasswordIn = () => {
    if ($passwordIn.type == 'password'){
        $passwordIn.setAttribute('type', 'text');
    }
    else {
        $passwordIn.setAttribute('type', 'password',);
    }

    $togglerIn.classList.toggle('fa-eye');
    $togglerIn.classList.toggle('fa-eye-slash');
};

$togglerIn.addEventListener(
    'click', showHidePasswordIn,
);

function cadastrarUsuario(){
    txtNome = document.getElementById("txtNome");
    nome = txtNome.value;
    txtUsuario = document.getElementById("txtUsuario");
    usuario = txtUsuario.value;
    txtEmail = document.getElementById("txtEmail");
    email = txtEmail.value;
    txtSenha = document.getElementById("txtSenha");
    senha = txtSenha.value

    alert("Usuário cadastrado. \nNome: "+nome+"\nUsuario: "+usuario+"\nEmail: "+email+"\nSenha: "+senha)
}

document.addEventListener("DOMContentLoaded", function () {
    let inputs = document.querySelectorAll(".inputstxt input");

    inputs.forEach(input => {
        let icon = input.closest(".inputstxt").querySelector("i");

        if (icon) {
            input.addEventListener("input", function () {
                icon.style.color = this.value.length > 0 ? "black" : "#919191";
            });
        }
    });
});