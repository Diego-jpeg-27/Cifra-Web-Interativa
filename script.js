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

// Criptografar com chave K
function criptografarTexto(texto, k) {
  const palavras = texto.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
  let resultado = [];

  for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i];
    const salto = i % 2 === 0 ? k + 2 : k + 3;
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

// Descriptografar com chave K
function descriptografarTexto(texto, k) {
  const palavras = texto.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
  let resultado = [];

  for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i];
    const salto = i % 2 === 0 ? k + 2 : k + 3;
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

// Criptografar e exibir resultado
function criptografar() {
  const entrada = document.getElementById('entrada').value;
  const k = parseInt(document.getElementById('chave').value);

  if (isNaN(k)) {
    alert("Digite um valor numérico para a chave (K).");
    return;
  }

  const resultado = criptografarTexto(entrada, k);
  document.getElementById('saida').value = resultado;
  embaralharLetras();
}

// Descriptografar e exibir resultado
function descriptografar() {
  const criptografado = document.getElementById('saida').value;
  const k = parseInt(document.getElementById('chave').value);

  if (isNaN(k)) {
    alert("Digite o mesmo valor numérico da chave (K) usada na criptografia.");
    return;
  }

  const resultado = descriptografarTexto(criptografado, k);
  document.getElementById('resultadoFinal').value = resultado;
  embaralharLetras();
}

// Novo: copia e prepara automaticamente para o teste de descriptografia
function testarDescriptografia() {
  const textoCriptografado = document.getElementById('saida').value;

  if (!textoCriptografado) {
    alert("Criptografe um texto antes de testar a descriptografia!");
    return;
  }

  // Copia automaticamente o texto criptografado
  navigator.clipboard.writeText(textoCriptografado).then(() => {
    alert("Texto criptografado copiado e preparado para teste de descriptografia!");

    // Limpa campos originais
    document.getElementById('entrada').value = '';
    document.getElementById('resultadoFinal').value = '';

    // Mantém o texto criptografado visível para o teste
    document.getElementById('saida').value = textoCriptografado;

    // Move automaticamente o texto criptografado para a área de teste
    setTimeout(() => {
      document.getElementById('saida').value = textoCriptografado;
      embaralharLetras();
    }, 300);
  });
}

// Inicializa letras no topo
window.onload = () => gerarLetrasAleatorias();