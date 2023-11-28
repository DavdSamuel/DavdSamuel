const keywordInclude = document.querySelector('.include');
const libs = document.querySelector('.h');
const perguntas = document.querySelector('.perguntas');

function explicarInclude() {
  let explicacao = document.createElement('section');
  let paragrafo = document.createElement('p');

  explicacao.classList.add('pergunta');

  paragrafo.textContent = 'O #include serve para incluir bibliotecas, como <stdio.h> e <math.h>';
  paragrafo.style.fontFamily = 'Nunito';

  explicacao.appendChild(paragrafo);
  perguntas.appendChild(explicacao);
  
    keywordInclude.removeEventListener('click', explicarInclude);
    libs.removeEventListener('click', explicarInclude);

  setTimeout(function() {
    paragrafo.remove();
    explicacao.remove();
    keywordInclude.addEventListener('click', explicarInclude);
    libs.addEventListener('click', explicarH);
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

    keywordInclude.removeEventListener('click', explicarInclude);
    libs.removeEventListener('click', explicarInclude);

  setTimeout(function() {
    paragrafo.remove();
    explicacao.remove();
    keywordInclude.addEventListener('click', explicarInclude);
    libs.addEventListener('click', explicarH);
  }, 5000);
}

keywordInclude.addEventListener('click', explicarInclude);
libs.addEventListener('click', explicarH);