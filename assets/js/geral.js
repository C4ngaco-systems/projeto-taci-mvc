function desabilitar(valor) {
  var statusCnpj = document.getElementById("validationCNPJ").disabled;
  var statusNomeLoja = document.getElementById("validationStoreName").disabled;
  var statusEndereco = document.getElementById("validationAdress").disabled;
  var statusTelefone = document.getElementById("validationTel").disabled;
  var statusResponsavel = document.getElementById("validationResp").disabled;
  var statusCelular = document.getElementById("validationCelular").disabled;
  var statusEmail = document.getElementById("validationEmail").disabled;
  var statusCidade = document.getElementById("validationCity").disabled;
  var statusEstado = document.getElementById("validationState").disabled;
  var statusCep = document.getElementById("validationCEP").disabled;

  if (valor == "sim" && !statusCnpj) {
    document.getElementById("validationCNPJ").disabled = true;
  } else {
    document.getElementById("validationCNPJ").disabled = false;
  }
  if (valor == "sim" && !statusNomeLoja) {
    document.getElementById("validationStoreName").disabled = true;
  } else {
    document.getElementById("validationStoreName").disabled = false;
  }
  if (valor == "sim" && !statusEndereco) {
    document.getElementById("validationAdress").disabled = true;
  } else {
    document.getElementById("validationAdress").disabled = false;
  }
  if (valor == "sim" && !statusTelefone) {
    document.getElementById("validationTel").disabled = true;
  } else {
    document.getElementById("validationTel").disabled = false;
  }
  if (valor == "sim" && !statusResponsavel) {
    document.getElementById("validationResp").disabled = true;
  } else {
    document.getElementById("validationResp").disabled = false;
  }
  if (valor == "sim" && !statusCelular) {
    document.getElementById("validationCelular").disabled = true;
  } else {
    document.getElementById("validationCelular").disabled = false;
  }
  if (valor == "sim" && !statusEmail) {
    document.getElementById("validationEmail").disabled = true;
  } else {
    document.getElementById("validationEmail").disabled = false;
  }
  if (valor == "sim" && !statusCidade) {
    document.getElementById("validationCity").disabled = true;
  } else {
    document.getElementById("validationCity").disabled = false;
  }
  if (valor == "sim" && !statusCidade) {
    document.getElementById("validationState").disabled = true;
  } else {
    document.getElementById("validationState").disabled = false;
  }
  if (valor == "sim" && !statusCep) {
    document.getElementById("validationCEP").disabled = true;
  } else {
    document.getElementById("validationCEP").disabled = false;
  }
}

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");

        if (form.checkValidity() == true) {
          var cnpj = document.getElementById("validationCNPJ");
          var nomeLoja = document.getElementById("validationStoreName");
          var endereco = document.getElementById("validationAdress");
          var cidade = document.getElementById("validationCity");
          var estado = document.getElementById("validationState");
          var telefone = document.getElementById("validationTel");
          var cep = document.getElementById("validationCEP");
          var responsavel = document.getElementById("validationResp");
          var email = document.getElementById("validationEmail");
          var celular = document.getElementById("validationCelular");

          console.log(cnpj.value);
          console.log(nomeLoja.value);
          console.log(endereco.value);
          console.log(cidade.value);
          console.log(estado.value);
          console.log(telefone.value);
          console.log(cep.value);
          console.log(responsavel.value);
          console.log(email.value);
          console.log(celular);

          window.location.href = "./index.html";
          alert("Loja cadastrada com sucesso!");
        }
      },
      false
    );
  });
})();

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginRight = "90px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}