const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Gera letras iniciais
function gerarLetrasAleatorias(qtd = 10) {
  const container = document.getElementById('embaralhador');
  container.innerHTML = '';
  for (let i = 0; i < qtd; i++) {
    const letra = document.createElement('div');
    letra.classList.add('letra-bloco');
    letra.textContent = alfabeto[Math.floor(Math.random() * alfabeto.length)];
    container.appendChild(letra);
  }
}

// Efeito digital
function embaralharLetras(duracao = 1500) {
  const blocos = document.querySelectorAll('.letra-bloco');
  const intervalos = [];

  blocos.forEach(bloco => {
    const intervalo = setInterval(() => {
      bloco.textContent = alfabeto[Math.floor(Math.random() * alfabeto.length)];
    }, 100);
    intervalos.push(intervalo);
  });

  setTimeout(() => {
    intervalos.forEach(i => clearInterval(i));
    blocos.forEach(bloco => {
      bloco.textContent = alfabeto[Math.floor(Math.random() * alfabeto.length)];
    });
  }, duracao);
}

// Criptografar 
function criptografarTexto(texto) {
  const palavras = texto.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
  let resultado = [];

  for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i];
    const salto = i % 2 === 0 ? 2 : 3;
    let novaPalavra = '';

    for (let letra of palavra) {
      if (alfabeto.includes(letra)) {
        const indexAtual = alfabeto.indexOf(letra);
        const novoIndex = (indexAtual + salto - 1) % alfabeto.length;
        novaPalavra += alfabeto[novoIndex];
      } else {
        novaPalavra += letra;
      }
    }

    resultado.push(novaPalavra);
  }

  return resultado.join(" ");
}

// Descriptografar
function descriptografarTexto(texto) {
  const palavras = texto.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
  let resultado = [];

  for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i];
    const salto = i % 2 === 0 ? 2 : 3;
    let novaPalavra = '';

    for (let letraCripto of palavra) {
      if (alfabeto.includes(letraCripto)) {
        let indexOriginal = -1;
        for (let j = 0; j < alfabeto.length; j++) {
          const indexTeste = (j + salto - 1) % alfabeto.length;
          if (alfabeto[indexTeste] === letraCripto) {
            indexOriginal = j;
            break;
          }
        }
        novaPalavra += alfabeto[indexOriginal];
      } else {
        novaPalavra += letraCripto;
      }
    }

    resultado.push(novaPalavra);
  }

  return resultado.join(" ");
}

// Funções de interface
function criptografar() {
  const entrada = document.getElementById('entrada').value;
  const resultado = criptografarTexto(entrada);
  document.getElementById('saida').value = resultado;
  embaralharLetras();
}

function descriptografar() {
  const criptografado = document.getElementById('saida').value;
  const resultado = descriptografarTexto(criptografado);
  document.getElementById('resultadoFinal').value = resultado;
  embaralharLetras();
}

// Inicializa letras no topo
window.onload = () => gerarLetrasAleatorias();