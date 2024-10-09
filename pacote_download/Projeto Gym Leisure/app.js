
function mudartema() {
    var body = document.body;

    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }

    else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
}

function bemvindo() {
    alert("Seja bem-vindo a melhor academia do universo!")
}