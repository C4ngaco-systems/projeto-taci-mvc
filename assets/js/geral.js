const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => document.body.classList.toggle('nav-open'));

navLinks.forEach(link => {
    link.addEventListener('click', () => document.body.classList.remove('nav-open'));
})

/* Caixa de aviso (ação feita com sucesso)*/
function fecharModal() {
    document.getElementById('fundo').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal2').style.display = 'none';
    document.getElementById('modal3').style.display = 'none';
}

function abrirModal() {
    document.getElementById('fundo').style.display = 'block';
    document.getElementById('modal').style.display = 'grid';
}

function abrirModal2() {
    document.getElementById('fundo').style.display = 'block';
    document.getElementById('modal2').style.display = 'grid';
}

function modalConfirmacao() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal2').style.display = 'grid';
}

function modalConclusao() {
    document.getElementById('modal2').style.display = 'none';
    document.getElementById('modal3').style.display = 'grid';
}

var inputs = $('input').on('keyup', verificarInputs);

function verificarInputs() {
    const preenchidos = inputs.get().every(({ value }) => value)
    $('#botao').prop('disabled', !preenchidos);
}

/* Colapse do FAQ */
$('li.faq-resposta').hide();
$('li.faq-pergunta').click(function() {
    $(this).next().slideToggle();
});

/* Ativa o botão de login*/
function recaptcha_callBack() {
    var ctaBtn = document.querySelector('.cta-button');
    ctaBtn.removeAttribute('disabled');
    ctaBtn.style.cursor = 'pointer';
    ctaBtn.style.background = "#EB8FA9";
    ctaBtn.style.color = '#303030'
}

/* Controle de fluxo do login  */
function mySubmit(){
    var action = $('#option').val()
    if(action !== '') {
        document.getElementById('form-login').action = action;
        document.getElementById('form-login').submit();
    }
  }

/* Alertas formulários */

function enviarDados(){
    var cnpj = document.getElementById("cnpj");
    var nomeLoja = document.getElementById("nomeDaLoja");
    var endereco = document.getElementById("endereco");
    var cidade = document.getElementById("cidade");
    var telefone = document.getElementById("telefone");
    var celular = document.getElementById("celular");
    var responsavel = document.getElementById("responsavel");
    var email = document.getElementById("email");

    if(cnpj.value===""){
        alert("Cnpj é obrigatório!");
        return false;
    }
    if(nomeLoja.value===""){
        alert("Nome da loja é obrigatório!");
        return false;
    }
    if(endereco.value===""){
        alert("Endereço é obrigatório!");
        return false;
    }
    if(cidade.value===""){
        alert("Informe a cidade!");
        return false;
    }
    if(telefone.value===""){
        alert("Telefone é obrigatório!");
        return false;
    }
    if(celular.value===""){
        alert("Celular é obrigatório!");
        return false;
    }
    if(responsavel.value===""){
        alert("Nome do responsável é obrigatório!");
        return false;
    }
    if(email.value===""){
        alert("E-mail é obrigatório!");
        return false;
    }
    if(!this.value){
        alert("Estado deve ser selecionado!");
        return false;
    }
    alert("Cadastro realizado com sucesso!")
    return true;
    

}

