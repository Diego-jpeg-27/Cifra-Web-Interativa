# Atividades – Segurança da Informação – IFPE Campus Igarassu (2025)

Curso Superior em **Tecnologia em Sistemas para Internet (TSI)** – IFPE Campus Igarassu  
**Semestre:** 2025.2  
**Professor:** Ramon Mota de Souza Farias  

---

## Introdução: Criptografia Alternativa

Essa atividade foi desenvolvida como parte de um exercício prático da disciplina de **Segurança da Informação**, no qual a turma foi desafiada a **criar um algoritmo de criptografia próprio**, inspirado em métodos clássicos.

A base escolhida pelo grupo foi a **Cifra de César**, uma das técnicas de criptografia mais antigas, que consiste em deslocar letras do alfabeto por um número fixo de posições.  

Para tornar o algoritmo mais interessante e desafiador, decidimos **personalizar a lógica original**, criando variações importantes:

---

## Objetivo da Atividade

O propósito principal foi aplicar os **conhecimentos teóricos em uma situação prática**, incentivando:
- O raciocínio lógico  
- A criatividade na criação de padrões personalizados  
- O entendimento mais profundo de como funcionam os **algoritmos de criptografia clássica**

Após a realização em sala, o professor solicitou que cada grupo **desenvolvesse um algoritmo funcional** capaz de simular a criptografia criada.  

Pensando nisso, decidi propor também uma **interface web interativa**, que:
- Receba um texto inserido pelo usuário  
- Execute a **criptografia** e também a **descriptografia**  
- Apresente o resultado de forma **visual**

---

##  Oportunidades de Aprendizado

Essa atividade proporcionou a oportunidade de:
- Trabalhar em equipe  
- Experimentar diferentes formas de codificação  
- Traduzir ideias em um **algoritmo funcional**, que poderá ser executado por meio de uma **interface web (HTML/CSS/JS/PHP)**  

---

## Principais Características do Algoritmo Criado

### Contagem Inclusiva  

Na Cifra de César original, a contagem do deslocamento **começa após a letra atual**.  
Já no nosso algoritmo, a **contagem é inclusiva,** a **letra original já é considerada como a primeira posição do salto**.

#### Exemplo:
- Letra original: **A**  
- Salto: **2 posições**  
- Contagem: A (1), B (2) = Resultado: **B**  

Na Cifra de César tradicional, o mesmo salto geraria:  
A (ignora), B (1), C (2) = Resultado: **C**

Esse pequeno ajuste **muda toda a lógica de deslocamento** e torna a cifra única em seu funcionamento.

---

### Saltos Alternados por Palavra (Bloco)

A frase é dividida em **palavras**, e cada palavra é considerada um **bloco independente de criptografia**.  
O diferencial está no padrão de saltos: cada bloco alterna o número de posições a serem deslocadas.

#### Regras:
- A **primeira palavra** usa um salto de **2 posições**  
- A **segunda palavra** usa um salto de **3 posições**  
- A terceira volta para **2**  
- A quarta para **3**  
- E assim por diante: **2 , 3 , 2 , 3...**

Esse esquema de alternância **dificulta ataques por padrões fixos**, como análise de frequência, e simula um comportamento semelhante ao de cifras polialfabéticas simples.

---

Chave (K) – Personalização do Deslocamento

Para atender à nova exigência da atividade, o algoritmo passou a aceitar uma chave (K) definida pelo usuário.
Essa chave é somada ao salto alternado de cada palavra, modificando dinamicamente o deslocamento e tornando a cifra única para cada execução.

Regras com a chave K:

Se o bloco for par → salto = K + 2

Se o bloco for ímpar → salto = K + 3

Assim, mesmo com a mesma frase, cada valor de K gera uma criptografia diferente, tornando o resultado dependente da chave escolhida.

Exemplo:

Texto: SEGURANCA DIGITAL

Com K = 1 → Saltos = 3 e 4

Com K = 5 → Saltos = 7 e 8

Isso garante que sem a chave correta, a descriptografia não é possível — incorporando o conceito de chave secreta das criptografias simétricas.

---

### Rotação Circular no Alfabeto

O alfabeto é tratado de forma **circular**.  
Ou seja, ao ultrapassar a letra **Z**, o algoritmo retorna ao início do alfabeto, continuando a contagem normalmente.

#### Exemplo:
- Letra: **Y**  
- Salto: **3 posições inclusivas**  
- Contagem: Y (1), Z (2), A (3) O Resultado: **A**

---

## Tecnologias Utilizadas

<table>
  <tr>
    <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40px" /><br><strong>HTML5</strong></td>
    <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40px" /><br><strong>CSS3</strong></td>
    <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40px" /><br><strong>JavaScript</strong></td>
    <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="40px" /><br><strong>Git</strong></td>
    <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="40px" /><br><strong>GitHub</strong></td>
  </tr>
</table>


## Desenvolvedor

- [Diego Nunes](https://github.com/Diego-jpeg-27)