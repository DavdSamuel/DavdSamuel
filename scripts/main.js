const include1 = document.getElementById('include1');
const include2 = document.getElementById('include2');
const stdioh = document.getElementById('stdioh');
const mathh = document.getElementById('mathh');
const funcaoMain = document.getElementById('main');
const printf = document.getElementById('printf');
const printf2 = document.getElementById('printf2');
const creturn = document.getElementById('creturn');
const comentario = document.querySelector('.comentario');
const perguntas = document.querySelector('.perguntas');

function explicarInclude() {
  let explicacao = document.createElement('section');
  let paragrafo = document.createElement('p');

  explicacao.classList.add('pergunta');

  paragrafo.textContent = 'O #include serve para incluir bibliotecas, como <stdio.h> e <math.h>.';
  paragrafo.style.fontFamily = 'Nunito';

  explicacao.appendChild(paragrafo);
  perguntas.appendChild(explicacao);
  
  include1.removeEventListener('click', explicarInclude);
  include2.removeEventListener('click', explicarInclude);
  stdioh.removeEventListener('click', explicarH);
  mathh.removeEventListener('click', explicarH);
  comentario.removeEventListener('click', explicarComentario);
  funcaoMain.removeEventListener('click', explicarMain);
  printf.removeEventListener('click', explicarPrintf);
  printf2.removeEventListener('click', explicarPrintf);
  creturn.removeEventListener('click', explicarReturn);

  setTimeout(function() {
    paragrafo.remove();
    explicacao.remove();
    include1.addEventListener('click', explicarInclude);
    include2.addEventListener('click', explicarInclude);
    stdioh.addEventListener('click', explicarH);
    mathh.addEventListener('click', explicarH);
    comentario.addEventListener('click', explicarComentario);
    funcaoMain.addEventListener('click', explicarMain);
    printf.addEventListener('click', explicarPrintf);
    printf2.addEventListener('click', explicarPrintf);
    creturn.addEventListener('click', explicarReturn);
  }, 5000);
}

function explicarH() {
  let explicacao = document.createElement('section');
  let paragrafo = document.createElement('p');

  explicacao.classList.add('pergunta');

  paragrafo.textContent = 'As <bibliotecas.h> são partes de código que podemos usar nos nossos códigos, por exemplo: <stdio.h> pra entrada e saída e <math.h> pra matemática.';
  paragrafo.style.fontFamily = 'Nunito';

  explicacao.appendChild(paragrafo);
  perguntas.appendChild(explicacao);

  include1.removeEventListener('click', explicarInclude);
  include2.removeEventListener('click', explicarInclude);
  stdioh.removeEventListener('click', explicarH);
  mathh.removeEventListener('click', explicarH);
  comentario.removeEventListener('click', explicarComentario);
  funcaoMain.removeEventListener('click', explicarMain);
  printf.removeEventListener('click', explicarPrintf);
  printf2.removeEventListener('click', explicarPrintf);
  creturn.removeEventListener('click', explicarReturn);

  setTimeout(function() {
    paragrafo.remove();
    explicacao.remove();
    include1.addEventListener('click', explicarInclude);
    include2.addEventListener('click', explicarInclude);
    stdioh.addEventListener('click', explicarH);
    mathh.addEventListener('click', explicarH);
    comentario.addEventListener('click', explicarComentario);
    funcaoMain.addEventListener('click', explicarMain);
    printf.addEventListener('click', explicarPrintf);
    printf2.addEventListener('click', explicarPrintf);
    creturn.addEventListener('click', explicarReturn);
  }, 5000);
}

function explicarComentario() {
  let explicacao = document.createElement('section');
  let paragrafo = document.createElement('p');

  explicacao.classList.add('pergunta');

  paragrafo.textContent = 'Os comentários servem pra explicar o código. Em C/C++ os comentários são com // ou com /* */.';
  paragrafo.style.fontFamily = 'Nunito';

  explicacao.appendChild(paragrafo);
  perguntas.appendChild(explicacao);

  include1.removeEventListener('click', explicarInclude);
  include2.removeEventListener('click', explicarInclude);
  stdioh.removeEventListener('click', explicarH);
  mathh.removeEventListener('click', explicarH);
  comentario.removeEventListener('click', explicarComentario);
  funcaoMain.removeEventListener('click', explicarMain);
  printf.removeEventListener('click', explicarPrintf);
  printf2.removeEventListener('click', explicarPrintf);
  creturn.removeEventListener('click', explicarReturn);

  setTimeout(function() {
    paragrafo.remove();
    explicacao.remove();
    include1.addEventListener('click', explicarInclude);
    include2.addEventListener('click', explicarInclude);
    stdioh.addEventListener('click', explicarH);
    mathh.addEventListener('click', explicarH);
    comentario.addEventListener('click', explicarComentario);
    funcaoMain.addEventListener('click', explicarMain);
    printf.addEventListener('click', explicarPrintf);
    printf2.addEventListener('click', explicarPrintf);
    creturn.addEventListener('click', explicarReturn);
  }, 5000);
}

function explicarMain() {
  let explicacao = document.createElement('section');
  let paragrafo = document.createElement('p');

  explicacao.classList.add('pergunta');

  paragrafo.textContent = 'No C/C++ essa é a função principal do código. Não é possível remover essa função sem receber um erro.';
  paragrafo.style.fontFamily = 'Nunito';

  explicacao.appendChild(paragrafo);
  perguntas.appendChild(explicacao);

  include1.removeEventListener('click', explicarInclude);
  include2.removeEventListener('click', explicarInclude);
  stdioh.removeEventListener('click', explicarH);
  mathh.removeEventListener('click', explicarH);
  comentario.removeEventListener('click', explicarComentario);
  funcaoMain.removeEventListener('click', explicarMain);
  printf.removeEventListener('click', explicarPrintf);
  printf2.removeEventListener('click', explicarPrintf);
  creturn.removeEventListener('click', explicarReturn);

  setTimeout(function() {
    paragrafo.remove();
    explicacao.remove();
    include1.addEventListener('click', explicarInclude);
    include2.addEventListener('click', explicarInclude);
    stdioh.addEventListener('click', explicarH);
    mathh.addEventListener('click', explicarH);
    comentario.addEventListener('click', explicarComentario);
    funcaoMain.addEventListener('click', explicarMain);
    printf.addEventListener('click', explicarPrintf);
    printf2.addEventListener('click', explicarPrintf);
    creturn.addEventListener('click', explicarReturn);
  }, 5000);
}

function explicarPrintf() {
  let explicacao = document.createElement('section');
  let paragrafo = document.createElement('p');

  explicacao.classList.add('pergunta');

  paragrafo.textContent = 'Imprime uma mensagem. A mensagem deve estar entre aspas, uma mensagem entre aspas é considerado um texto, ou uma string.';
  paragrafo.style.fontFamily = 'Nunito';

  explicacao.appendChild(paragrafo);
  perguntas.appendChild(explicacao);

  include1.removeEventListener('click', explicarInclude);
  include2.removeEventListener('click', explicarInclude);
  stdioh.removeEventListener('click', explicarH);
  mathh.removeEventListener('click', explicarH);
  comentario.removeEventListener('click', explicarComentario);
  funcaoMain.removeEventListener('click', explicarMain);
  printf.removeEventListener('click', explicarPrintf);
  printf2.removeEventListener('click', explicarPrintf);
  creturn.removeEventListener('click', explicarReturn);

  setTimeout(function() {
    paragrafo.remove();
    explicacao.remove();
    include1.addEventListener('click', explicarInclude);
    include2.addEventListener('click', explicarInclude);
    stdioh.addEventListener('click', explicarH);
    mathh.addEventListener('click', explicarH);
    comentario.addEventListener('click', explicarComentario);
    funcaoMain.addEventListener('click', explicarMain);
    printf.addEventListener('click', explicarPrintf);
    printf2.addEventListener('click', explicarPrintf);
    creturn.addEventListener('click', explicarReturn);
  }, 5000);
}

function explicarReturn() {
  let explicacao = document.createElement('section');
  let paragrafo = document.createElement('p');

  explicacao.classList.add('pergunta');

  paragrafo.textContent = 'Esse comando é usado para retornar um valor para a função , no caso da função int main(), quando o valor 0 é retornado, significa sucesso, quando o valor 1 é retornado, significa erro.';
  paragrafo.style.fontFamily = 'Nunito';

  explicacao.appendChild(paragrafo);
  perguntas.appendChild(explicacao);

  include1.removeEventListener('click', explicarInclude);
  include2.removeEventListener('click', explicarInclude);
  stdioh.removeEventListener('click', explicarH);
  mathh.removeEventListener('click', explicarH);
  comentario.removeEventListener('click', explicarComentario);
  funcaoMain.removeEventListener('click', explicarMain);
  printf.removeEventListener('click', explicarPrintf);
  printf2.removeEventListener('click', explicarPrintf);
  creturn.removeEventListener('click', explicarReturn);

  setTimeout(function() {
    paragrafo.remove();
    explicacao.remove();
    include1.addEventListener('click', explicarInclude);
    include2.addEventListener('click', explicarInclude);
    stdioh.addEventListener('click', explicarH);
    mathh.addEventListener('click', explicarH);
    comentario.addEventListener('click', explicarComentario);
    funcaoMain.addEventListener('click', explicarMain);
    printf.addEventListener('click', explicarPrintf);
    printf2.addEventListener('click', explicarPrintf);
    creturn.addEventListener('click', explicarReturn);
  }, 5000);
}

include1.addEventListener('click', explicarInclude);
include2.addEventListener('click', explicarInclude);
stdioh.addEventListener('click', explicarH);
mathh.addEventListener('click', explicarH);
comentario.addEventListener('click', explicarComentario);
funcaoMain.addEventListener('click', explicarMain);
printf.addEventListener('click', explicarPrintf);
printf2.addEventListener('click', explicarPrintf);
creturn.addEventListener('click', explicarReturn);