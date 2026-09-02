const btnE = document.getElementById('btnabrir');
const modal = document.getElementById('modal');
const btnCancelar = document.getElementById('cancel');
const btnOp1 = document.getElementById('op1');
const btnOp2 = document.getElementById('op2');

function formatarValor(valor) {
    return Number(valor).toFixed(2);
}

btnE.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

btnCancelar.addEventListener('click', () => {
    modal.classList.add('hidden');
});

btnOp1.addEventListener('click', () => {
    real();
    modal.classList.add('hidden');
});

btnOp2.addEventListener('click', () => {
    converter();
    modal.classList.add('hidden');
});

btnCancelar.addEventListener('click', () => {
    document.getElementById("valor").value = "";
    document.getElementById("sel").value = "";
    document.getElementById("res").innerHTML = "";
});

function real() {
    let valor, opcoes, resultado;
    valor = parseFloat(document.getElementById("valor").value);
    opcoes = parseInt(document.getElementById("sel").value);

    switch (opcoes) {
        case 1:
            resultado = valor / 5.97;
            document.getElementById("res").innerHTML = "O valor convertido é: " + formatarValor(resultado) + " EUR";
            break;
        case 2:
            resultado = valor / 5.15;
            document.getElementById("res").innerHTML = "O valor convertido é: " + formatarValor(resultado) + " USD";
            break;
        case 3:
            resultado = valor / 0.0034;
            document.getElementById("res").innerHTML = "O valor convertido é: " + formatarValor(resultado) + " ARS";
            break;
        case 4:
            resultado = valor / 0.0056;
            document.getElementById("res").innerHTML = "O valor convertido é: " + formatarValor(resultado) + " KZ";
            break;
        case 5:
            resultado = valor / 0.032;
            document.getElementById("res").innerHTML = "O valor convertido é: " + formatarValor(resultado) + " JPY";
            break;
        default:
            document.getElementById("res").innerHTML = "Opção inválida!";
            break;
    }

}

function converter() {
    let valor, opcoes, resultado;
    valor = parseFloat(document.getElementById("valor").value);
    opcoes = parseInt(document.getElementById("sel").value);

    switch (opcoes) {
        case 1:
            resultado = valor * 5.97;
            document.getElementById("res").innerHTML = "O valor convertido é: " + formatarValor(resultado) + " BRL";
            break;
        case 2:
            resultado = valor * 5.15;
            document.getElementById("res").innerHTML = "O valor convertido é: " + formatarValor(resultado) + " BRL";
            break;
        case 3:
            resultado = valor * 0.0034;
            document.getElementById("res").innerHTML = "O valor convertido é: " + formatarValor(resultado) + " BRL";
            break;
        case 4:
            resultado = valor * 0.0056;
            document.getElementById("res").innerHTML = "O valor convertido é: " + formatarValor(resultado) + " BRL";
            break;
        case 5:
            resultado = valor * 0.032;
            document.getElementById("res").innerHTML = "O valor convertido é: " + formatarValor(resultado) + " BRL";
            break;
        default:
            document.getElementById("res").innerHTML = "Opção inválida!";
            break;
    }
}