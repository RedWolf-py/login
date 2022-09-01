var xt = function(e) {
  return document.querySelector(e);
}

var xts = function(e) {
  return document.querySelectorAll(e);
}


var clic = document.getElementById("password");

clic.addEventListener("keyup", function() {

  if (clic.value.length < 1) {
    xt(".monkeyO img").style.display = 'block';
  } else {
    xt('.monkeyolho img').style.display = 'block';
    xt(".monkeyO img").style.display = 'none';

  }

});

var monkeyolho = xt('.monkeyolho img');
var monkeyO = xt('.monkeyO img');

monkeyolho.addEventListener('click', function() {
  let inputSenha = xt('#password');
  if (inputSenha.getAttribute('type') == 'password') {
    xt('.monkeyolho img').style.display = 'none';
    xt('.monkeyO img').style.display = 'block';

    inputSenha.setAttribute('type', 'text');

  } else {

    inputSenha.setAttribute('type', 'password')
  }
});

monkeyO.addEventListener('click', function() {
  let inputSenha = xt('#password');
  inputSenha.setAttribute('type', 'text');
  xt('.monkeyO img').style.display = 'none';
  xt('.monkeyolho img').style.display = 'block';
  inputSenha.setAttribute('type', 'password')
});



var submyt = xt('.bt');

submyt.addEventListener('click', function() {
  let labelLogin = xt('.labelLogin')
  let labelSenha = xt('.labelSenha')
  let loguin = xt('.loguin').value;
  let password = xt('.senha').value;
  let user = []
  let usuariovalidacao = {
    login: "",
    senha: ""
  }

  user = JSON.parse(localStorage.getItem('user'))
  console.log(user)


  user.forEach((item) => {
    if (loguin == item.usuarioimput && password == item.senhaimput) {
      usuariovalidacao = {
        loguin: item.usuarioimput,
        senha: item.senhaimput
      }
      
    }
    console.log(usuariovalidacao)
  });
  
  if (loguin == usuariovalidacao.loguin && password == usuariovalidacao.senha) {
   
    window.location.href = 'https://colab.research.google.com/github/RedWolf-py/Trabalho_Grafico/blob/main/feminicidio.ipynb'
  
  } else {
    
    labelLogin.setAttribute('style', 'color: red')
    labelSenha.setAttribute('style', 'color: red')
    xt('.error').innerHTML = `O Usuario ou a Senha não conferem !`
    limparCampos();
    
  }
 
})


function limparCampos() {
  let loguin = xt('.loguin').value = '';
  let password = xt('.senha').value = '';
  

}


