function desabilitar(valor) {
  var statusCnpj = document.getElementById("cnpj").disabled;
  var statusNomeLoja = document.getElementById("nome-loja").disabled;
  var statusEndereco = document.getElementById("endereco").disabled;
  var statusTelefone = document.getElementById("telefone").disabled;
  var statusResponsavel = document.getElementById("responsavel").disabled;
  var statusCelular = document.getElementById("celular").disabled;
  var statusEmail = document.getElementById("e-mail").disabled;

  if (valor == "sim" && !statusCnpj) {
    document.getElementById("cnpj").disabled = true;
  } else {
    document.getElementById("cnpj").disabled = false;
  }
  if (valor == "sim" && !statusNomeLoja) {
    document.getElementById("nome-loja").disabled = true;
  } else {
    document.getElementById("nome-loja").disabled = false;
  }
  if (valor == "sim" && !statusEndereco) {
    document.getElementById("endereco").disabled = true;
  } else {
    document.getElementById("endereco").disabled = false;
  }
  if (valor == "sim" && !statusTelefone) {
    document.getElementById("telefone").disabled = true;
  } else {
    document.getElementById("telefone").disabled = false;
  }
  if (valor == "sim" && !statusResponsavel) {
    document.getElementById("responsavel").disabled = true;
  } else {
    document.getElementById("responsavel").disabled = false;
  }
  if (valor == "sim" && !statusCelular) {
    document.getElementById("celular").disabled = true;
  } else {
    document.getElementById("celular").disabled = false;
  }
  if (valor == "sim" && !statusEmail) {
    document.getElementById("e-mail").disabled = true;
  } else {
    document.getElementById("e-mail").disabled = false;
  }
}

function enviarDados(e) {
  e.preventDefault()
  // aqui controlaremos o envio futuramente
  var cnpj = document.getElementById("cnpj");
  var nomeLoja = document.getElementById("nome-loja");
  var endereco = document.getElementById("endereco");
  var telefone = document.getElementById("telefone");
  var responsavel = document.getElementById("responsavel");
  var celular = document.getElementById("celular");
  var email = document.getElementById("e-mail");

  console.log(cnpj.value);
  console.log(nomeLoja.value);
  console.log(endereco.value);
  console.log(telefone.value);
  console.log(responsavel.value);
  console.log(celular.value);
  console.log(email.value);
}

const lojistaForm = document.getElementById('form-lojista');
lojistaForm.addEventListener('submit', enviarDados);