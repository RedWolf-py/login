var x = function(e) {
  return document.querySelector(e);
}

let nome = x('#nome');
let labelnome = x('#labelnome');
var validenome = false;

let usuario = x('#usuario');
let labelusuario = x('#labelusuario');
var valideusuario = false;

let senha = x('#senha');
let labelsenha = x('#labelsenha');
var validesenha = false;

let senharepetir = x('#senharepetir');
let labelrepetirsenha = x('#labelrepetirsenha');
var validesenharepetir = false;

var sucesso = x('.sucesso');
var error = x('.error');
var corrigir = x('.corrigir');

let cadeadoF = x('.cadeadoF');
let cadeadoF2 = x('.cadeadoF2');
let cadeadoA = x('.cadeadoA');
let cadeadoA2 = x('.cadeadoA2');


cadeadoF.addEventListener('click', function() {

  if (senha.getAttribute('type') == 'password') {
    cadeadoF.style.display = 'none';
    cadeadoA.style.display = 'block';

    senha.setAttribute('type', 'text');
    cadeadoA.addEventListener('click', function() {
      if (senha.getAttribute('type') == 'text') {
        cadeadoF.style.display = 'block';
        cadeadoA.style.display = 'none';
        senha.setAttribute('type', 'password');
      }

    })

  } else {

    senha.setAttribute('type', 'password')

  }
});

cadeadoF2.addEventListener('click', function() {

  if (senharepetir.getAttribute('type') == 'password') {
    cadeadoF2.style.display = 'none';
    cadeadoA2.style.display = 'block';

    senharepetir.setAttribute('type', 'text');
    cadeadoA2.addEventListener('click', function() {
      if (senharepetir.getAttribute('type') == 'text') {
        cadeadoF2.style.display = 'block';
        cadeadoA2.style.display = 'none';
         senharepetir.setAttribute('type', 'password');
      }

    })

  } else {

    repetirsenha.setAttribute('type', 'password')

  }
});


nome.addEventListener('keyup', function() {
  if (nome.value.length <= 3) {
    labelnome.setAttribute('style', 'color:red');
    corrigir.innerHTML = `Insira no minimo 4 caracterios`
    nome.setAttribute('style', 'border-color:red')
    validenome = false
  } else {
    labelnome.setAttribute('style', 'color:green');
    corrigir.innerHTML = '';

    nome.setAttribute('style', 'border-color:green')
    validenome = true
  }
});

usuario.addEventListener('keyup', function() {
  if (usuario.value.length <= 3) {
    labelusuario.setAttribute('style', 'color:red');
    corrigir.innerHTML = `Insira no minimo 4 caracterios`
    usuario.setAttribute('style', 'border-color:red')
    valideusuario = false
  } else {
    labelusuario.setAttribute('style', 'color:green');
    corrigir.innerHTML = '';

    usuario.setAttribute('style', 'border-color:green')
  }
  valideusuario = true
});

senha.addEventListener('keyup', function() {
  if (senha.value.length <= 5) {
    labelsenha.setAttribute('style', 'color:red');
    corrigir.innerHTML = `Insira no minimo 6 caracterios`
    senha.setAttribute('style', 'border-color:red')
    validesenha = false
  } else {
    labelsenha.setAttribute('style', 'color:green');
    corrigir.innerHTML = '';

    senha.setAttribute('style', 'border-color:green')
    validesenha = true
  }
});


senharepetir.addEventListener('keyup', function() {
  if (senharepetir.value != senha.value) {
    labelrepetirsenha.setAttribute('style', 'color:red');
    corrigir.innerHTML = `As senhas não Conferem !`
    senharepetir.setAttribute('style', 'border-color:red')
    validesenharepetir = false
  } else {
    labelrepetirsenha.setAttribute('style', 'color:green');
    corrigir.innerHTML = '';

    senharepetir.setAttribute('style', 'border-color:green')
    validesenharepetir = true
  }
});

function cadastrar() {

  if (validenome && valideusuario && validesenha && validesenharepetir) {

    let user = JSON.parse(localStorage.getItem('user') || '[]');
    user.push({
      nomeimput: nome.value,
      usuarioimput: usuario.value,
      senhaimput: senha.value
    })
    localStorage.setItem('user', JSON.stringify(user));

    sucesso.innerHTML = `Cadastrando Usuario(a)...!`
    error.innerHTML = "";

    setTimeout(function() {
      window.location.href = '/index.html'
    }, 3000);

  } else {
    error.innerHTML = `Preencha Todos os Campos antes de Cadastrar !`
    sucesso.innerHTML = "";

  }

 
}

