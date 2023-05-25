var aleatorio; // Variavel global para armazenar o numero aleatorio
var tentativas = 0;



var frase = [
  "Ele perdeu tudo naquele jogo.",
  "Seu desempenho foi vergonhoso.",
  "O publico riu de sua derrota.",
  "Ele foi humilhado diante de todos.",
  "Sua habilidade e nula.",
  "Nao tem talento algum.",
  "E um completo fracassado.",
  "As pessoas nao acreditam nele.",
  "Nao merece nem participar.",
  "Seu esforco e em vao.",
  "Todos sabiam que perderia.",
  "Foi uma decepcao total.",
  "Ele nao tem futuro nisso.",
  "Nunca conseguira ser bom.",
  "Ridiculo em todos os aspectos.",
  "E o pior competidor de todos.",
  "Nao tem o minimo de tecnica.",
  "Nao sabe nem o basico.",
  "Sempre acaba derrotado.",
  "Suas chances sao zero.",
  "Todos estao torcendo contra ele.",
  "Ninguem acredita em seu potencial.",
  "Deveria desistir de uma vez.",
  "E uma vergonha para sua equipe.",
  "Nunca vai alcancar a vitoria.",
  "Nao tem forca mental para competir.",
  "Seu nome sera lembrado pela derrota.",
  "E um exemplo de inaptidao.",
  "Falhou miseravelmente mais uma vez.",
  "Seu desempenho e patetico.",
  "Nao consegue nem se classificar.",
  "E o ultimo colocado em tudo.",
  "Ninguem se importa com seu esforco.",
  "Suas tentativas sao risiveis.",
  "E um competidor mediocre.",
  "Seu lugar e no banco de reserva.",
  "Nao tem coragem de enfrentar os melhores.",
  "Perdeu para alguem muito mais fraco.",
  "E um eterno perdedor.",
  "Seu historico e uma sequencia de derrotas.",
  "Nunca ganhara um trofeu.",
  "Nao merece o respeito dos demais.",
  "Sua presenca e indesejada.",
  "Esta fadado ao fracasso.",
  "Nem seu treinador acredita nele.",
  "Nao tem instinto competitivo.",
  "Seus resultados sao vergonhosos.",
  "E motivo de piada entre os competidores.",
  "Ate mesmo os iniciantes o vencem.",
  "Ele e um verdadeiro desastre.",
  "Sua performance e lamentavel.",
  "Nao tem garra nem determinacao.",
  "E um peso morto para sua equipe.",
  "Todos esperavam mais dele, mas se decepcionaram.",
  "Sua presenca so causa constrangimento.",
  "Seus erros sao constantes e previsiveis.",
  "Nao tem capacidade de aprender com as derrotas.",
  "Esta destinado a ser um perdedor cronico.",
  "Sua falta de talento e evidente para todos.",
  "Nao consegue se destacar em nada.",
  "Cada competicao e um show de horrores para ele.",
  "Nunca alcancara a grandeza dos campeoes.",
  "E uma nulidade no esporte.",
  "Suas tentativas desesperadas nao surtem efeito.",
  "Todos sabem que ele e um fiasco ambulante.",
  "Falta-lhe habilidade e inteligencia para competir.",
  "E um verdadeiro fracasso em forma de atleta.",
  "Seu nome sera esquecido rapidamente.",
  "Nao ha espaco para perdedores como ele.",
  "Nao merece nem um lugar no podio de participacao.",
  "E um verdadeiro desastre em movimento.",
  "Seu desempenho e digno de pena.",
  "Ele nao merece nem uma mencao honrosa.",
  "Ate mesmo os amadores o superam com facilidade.",
  "Sua incompetencia e um espetaculo a parte.",
  "Nao consegue lidar com a pressao do palco.",
  "Sua trajetoria e uma triste comedia de erros.",
  "E um exemplo vivo de como nao se deve competir.",
  "Nao tem nada a oferecer ao esporte.",
  "Seu potencial e um poco sem fundo de mediocridade.",
  "Todos estao cansados de suas derrotas previsiveis.",
  "Ele e a personificacao da derrota em carne e osso.",
  "Suas tentativas desesperadas sao risiveis.",
  "Nao ha talento algum escondido nele.",
  "E um verdadeiro zero a esquerda no esporte.",
  "Nem seus fas conseguem defender suas derrotas constantes.",
  "Sua persistencia so revela sua teimosia sem nocao.",
  "Ele e um exemplo de como nao se deve competir.",
  "Seus adversarios o veem como uma presa facil.",
  "Nao passa de um joguete nas maos dos vencedores.",
  "Suas esperancas de vitoria sao meros devaneios.",
  "Nao consegue acompanhar o ritmo dos verdadeiros competidores.",
  "Sua trajetoria e uma sequencia interminavel de derrotas.",
  "Ele e uma mancha na historia do esporte.",
  "Sua falta de talento e uma afronta aos verdadeiros atletas.",
  "Seu desempenho e um verdadeiro desastre natural.",
  "Ate mesmo os azaroes o superam com facilidade.",
  "E uma maquina de colecionar fracassos.",
  "Suas habilidades sao tao impressionantes quanto uma lesma.",
  "Ele e o prototipo da incompetencia no esporte."
  // Restante das frases
  // ...
];

function novoJogo() {
  tentativas = 0; // Reiniciar o contador de tentativas
  aleatorio = Math.floor(Math.random() * 99) + 1; // Gerar um novo numero aleatorio
  document.getElementById("numero").value = ""; // Limpar o campo de entrada
  document.getElementById("adivinhe").innerHTML = "Eu espero vai..."; // Reiniciar a mensagem de adivinhacao
  document.getElementById("maiorMenor").innerHTML = ""; // Reiniciar a mensagem de maior/menor
  console.log(aleatorio);
}


function numero() {
  var digitado = parseInt(document.getElementById("numero").value);
  var labelResult = document.getElementById("adivinhe");
  var labelMaiorMenor = document.getElementById("maiorMenor");

  if (digitado < 1 || digitado > 100 || isNaN(digitado)) {
    labelResult.innerHTML = "Usou qual? que eu quero tambem kkkkk so vale de 1 a 100";
    return;
  }

  tentativas++; // Incrementar o contador de tentativas

  if (digitado !== aleatorio) {
    if (digitado > aleatorio) {
      labelMaiorMenor.innerHTML = "Numero grande em, nada a ver, o outro e menor";
    } else {
      labelMaiorMenor.innerHTML = "Xiii numero pequeninho, o outro e maior";
    }
    if (tentativas <= frase.length) {
      // Ainda há frases disponíveis no array
      var fraseAtual = frase[tentativas - 1];
      labelResult.innerHTML = fraseAtual;
    } else {
      // Todas as frases foram exibidas, não há mais frases disponíveis
      labelResult.innerHTML = "Não há mais frases disponíveis";
    }
  } else {
    var pontos = 101 - tentativas; // Calcular os pontos
    labelResult.innerHTML = "Aeee acabouuuu, mandou mt nessa em! " + pontos + " pontos";
    labelMaiorMenor.innerHTML = "";
  }
}
