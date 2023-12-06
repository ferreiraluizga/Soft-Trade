//validação do criar conta
function validar() {
    event.preventDefault();
    var valGeral = true;

    if (document.getElementById('nome').value == "") {
        alert("O campo Nome Completo está vazio");
        valGeral = false;
    }

    if (document.getElementById('username').value == "") {
        alert("O campo Username está vazio");
        valGeral = false;
    }

    if (document.getElementById('telefone').value == "") {
        alert("O campo Telefone está vazio");
        valGeral = false;
    }

    if (document.getElementById('cidade').value == "") {
        alert("O campo Cidade está vazio");
        valGeral = false;
    }

    if (document.getElementById('estado').value == "") {
        alert("Selecione um Estado");
        valGeral = false;
    }

    if (document.getElementById('genero').value == "") {
        alert("Selecione um Gênero");
        valGeral = false;
    }

    if (document.getElementById('date').value == "") {
        alert("Insira sua Data de Nascimento");
        valGeral = false;
    }

    if (document.getElementById('cpf').value == "") {
        alert("O campo CPF está vazio");
        valGeral = false;
    } else {
        var cpf = document.getElementById('cpf').value;
        const cpfModel = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
        if (!cpfModel.test(cpf)) {
            alert("Verifique se o CPF foi digitado no seguinte modelo: XXX.XXX.XXX-XX");
            valGeral = false;
        }
    }

    if (document.getElementById('rg').value == "") {
        alert("O campo RG está vazio");
        valGeral = false;
    } else {
        var rg = document.getElementById('rg').value;
        const rgModel = /^\d{2}\.\d{3}\.\d{3}\-\d{1}$/;
        if (!rgModel.test(rg)) {
            alert("Verifique se o RG foi digitado no seguinte modelo: XX.XXX.XXX-X");
            valGeral = false;
        }
    }

    if (document.getElementById('email').value == "") {
        alert("O campo E-mail está vazio");
        valGeral = false;
    }

    if (document.getElementById('password').value == "") {
        alert("O campo Senha está vazio");
        valGeral = false;
    } else {
        var senha = document.getElementById('password').value;
        const senhaModel = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!senhaModel.test(senha)) {
            alert("Verifique se a Senha cumpre os seguintes requisitos: Letras maiúsculas e minúsculas; números; no mínimo 8 caracteres.");
            valGeral = false;
        }
    }

    if (document.getElementById('password').value != document.getElementById('passwordC').value) {
        alert("As senhas digitadas são diferentes");
        valGeral = false;
    }

    if (!document.getElementById('check').checked) {
        alert("Aceite os Termos de Uso");
        valGeral = false;
    }

    return valGeral;
}

//complementar de criar conta
function avancar() {
    if (validar()) {
        window.location.href = 'usuario.html';
    }
}

//validação de login
function validar2() {
    event.preventDefault();
    var valGeral = true;

    if (document.getElementById('email').value == "") {
        alert("O campo E-mail / Username está vazio");
        valGeral = false;
    }

    if (document.getElementById('password').value == "") {
        alert("O campo Senha está vazio");
        valGeral = false;
    }

    return valGeral;
}

//complementar de login
function avancar2() {
    if (validar2()) {
        window.location.href = 'usuario.html';
    }
}

//validação de afiliação
function validar3() {
    event.preventDefault();
    var valGeral = true;

    if (document.getElementById('nome').value == "") {
        alert("O campo Nome está vazio");
        valGeral = false;
    }

    if (document.getElementById('email').value == "") {
        alert("O campo E-mail está vazio");
        valGeral = false;
    }

    if (document.getElementById('cpf').value == "") {
        alert("O campo CPF está vazio");
        valGeral = false;
    } else {
        var cpf = document.getElementById('cpf').value;
        const cpfModel = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
        if (!cpfModel.test(cpf)) {
            alert("Verifique se o CPF foi digitado no seguinte modelo: XXX.XXX.XXX-XX");
            valGeral = false;
        }
    }

    if (document.getElementById('text').value == "") {
        alert("Escreve o motivo da sua afiliação");
        valGeral = false;
    }

    return valGeral;
}

//complementar de afiliação
function avancar3() {
    if (validar3()) {
        alert('A Soft+Trade agradece o contato!');
        window.location.reload();
    }
}

//validação de lua
function validar4() {
    event.preventDefault();
    var valGeral = true;

    if (document.getElementById('chat').value == "") {
        alert("Escreve sua dúvida, reclamação ou feedback!");
        valGeral = false;
    }

    return valGeral;
}

//complementar de lua
function avancar4() {
    if (validar4()) {
        alert('A Soft+Trade agradece o contato!');
        window.location.reload();
    }
}

//date picker
$(function () {
    $('#datepicker').datepicker();
});

//pagamento
function cart() {
    var opcoes = document.getElementsByName('opcao');
    var selecionado = false;

    for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            selecionado = true;
            break;
        }
    }

    if (!selecionado) {
        alert('Escolha uma Forma de Pagamento');
    } else {
        window.location.href = 'carregamento.html';
    }
}