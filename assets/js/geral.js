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

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()

        }

        form.classList.add('was-validated')

        if (form.checkValidity() == true){
          var cnpj = document.getElementById("validationCNPJ");
          var nomeLoja = document.getElementById("validationStoreName");
          var endereco = document.getElementById("validationAdress");
          var cidade = document.getElementById("validationCity");
          var estado = document.getElementById("validationState")
          var telefone = document.getElementById("validationTel");
          var cep = document.getElementById("validationCEP");
          var responsavel = document.getElementById("validationResp");
          var email = document.getElementById("validationEmail");
        
          console.log(cnpj.value);
          console.log(nomeLoja.value);
          console.log(endereco.value);
          console.log(cidade.value);
          console.log(estado.value);
          console.log(telefone.value);
          console.log(cep.value)
          console.log(responsavel.value);
          console.log(email.value);
    
          
          window.location.href = './index.html'; 
          alert("Loja cadastrada com sucesso!");  
        }
        
      }, false)
    })
})()
