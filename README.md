🛡️ Desafio Classificador de Nível de Herói (DIO)
Este projeto é uma solução para o desafio de classificação de nível de herói proposto pela DIO, implementado com uma interface web interativa utilizando HTML, CSS e JavaScript. A tela de consulta adota um estilo visual de Pixel Art / Fantasia para maior engajamento.

🚀 Tecnologias Utilizadas
HTML5 - Estrutura da página (Corpo.html);
CSS3 - Estilização e layout (estilizacao.css), com tema Pixel Art;
JavaScript (JS)Lógica de classificação de XP (Script.js).

🌟 Objetivo do DesafioCriar um classificador que armazene o nome e a experiência (XP) de um herói e, através de estruturas de decisão, determine e exiba seu nível com base nos seguintes critérios:
Nível - Faixa de XP
Ferro Menor que 1.000
Bronze 1.001 a 2.000
Prata 2.001 a 5.000
Ouro 5.001 a 7.000 
Platina 7.001 a 8.000
Ascendente 8.001 a 9.000
Imortal 9.001 a 10.000 
RadianteMaior ou igual a 10.001 

Exemplo de Saída Esperada: 
  "O Herói de nome {nome} está no nível de {nivel}"

📂 Estrutura do ProjetoO projeto é organizado nos seguintes arquivos, conforme definido:.
├── Corpo.html         # Contém a estrutura da interface (inputs e botão).
├── estilizaçao.css    # Contém todos os estilos CSS (incluindo o tema Pixel Art).
└── Script.js          # Contém a lógica JavaScript para classificar o herói e interagir com a interface.

⚙️ Como Executar 
1. Clone o repositório (se estiver usando Git) ou baixe os arquivos para sua máquina. 
2. Certifique-se de que os arquivos Corpo.html, estilizacao.css e Script.js estão na mesma pasta.
3. Abra o arquivo Corpo.html em qualquer navegador moderno (Chrome, Firefox, Edge, etc.).
4. Insira o nome e o XP do herói nos campos e clique em Consultar para ver o resultado.

💻 Funcionalidades no Código 
O Script.js utiliza: 
1. Variáveis e Operadores: Para armazenar e processar o nome (string) e XP (number).
2. Estruturas de Decisão (if/else if/else): Para realizar a classificação em cada faixa de nível.
3. Interação com o DOM: O código pega os valores dos inputs e injeta o resultado final no parágrafo de saída (id="resultado"), garantindo uma experiência interativa.
