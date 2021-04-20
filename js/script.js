// Função que gera o número
const generateSecretNumber = () => Math.trunc(Math.random() * 20) + 1;

// Função que gera mensagem
const displayMessage = function (message) {
  document.querySelector("#message").textContent = message;
};

// Variável que armazena a função que cria um número secreto
let secretNumber = generateSecretNumber();

// Variável com a pontuação inicial
let score = 20;

// Variável com o highscore
let highscore = 0;

document.getElementById("answer-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Evento que pega o valor do número digitado no input
  const awnserInput = Number(document.querySelector("#awnser-input").value);

  // Lógica do jogo
  if (!awnserInput) {
    displayMessage("⛔ No number!");
    // Se o input estiver vazio
  } else if (awnserInput === secretNumber) {
    // Se o input for igual ao número secreto
    displayMessage("🎉 Correct Number!");

    // Define que o número secreto vai ser igual ao número da const "secretNumber"
    document.querySelector("#secretNumber").textContent = secretNumber;

    // Para mudar a cor do body quando o número secreto for descoberto
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector("#secretNumber").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector("#highscore").textContent = highscore;
    }

    // Quando o número estiver errado
  } else if (awnserInput !== secretNumber) {
    if (score > 1) {
      const message =
        awnserInput > secretNumber ? "📈 Too high!" : "📉 Too low!";
      displayMessage(message);
      score--;

      // Se o input for um número maior que o secret number, diminui 1 do score
      document.querySelector("#score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector("#score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#b34747";
    }
  }
});

// Coding Challenge: implementando o botão "again"
document.querySelector("#btn-again").addEventListener("click", function () {
  score = 20;
  secretNumber = generateSecretNumber();

  document.querySelector("#score").textContent = score;
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = " #222222";
  document.querySelector("#secretNumber").style.width = "15rem";
  document.querySelector("#secretNumber").textContent = "?";
  document.querySelector("#awnser-input").value = "";
});
