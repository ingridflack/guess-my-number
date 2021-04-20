// Variável que cria um número secreto
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// Variável com a pontuação inicial
let score = 20;

document.querySelector("#secretNumber").textContent = secretNumber;

document.querySelector("#btn-check").addEventListener("click", function () {
  // Evento que pega o valor do número digitado no input
  const awnserInput = Number(document.querySelector("#awnser-input").value);
  console.log(typeof awnserInput);

  // Lógica do jogo
  if (!awnserInput) {
    document.querySelector("#message").textContent = "⛔ No number!";
    // Se o input estiver vazio
  } else if (awnserInput === secretNumber) {
    // Se o input for igual ao número secreto
    document.querySelector("#message").textContent = "🎉 Correct Number!";
  } else if (awnserInput > secretNumber) {
    console.log(score);

    if (score > 1) {
      document.querySelector("#message").textContent = "📈 Too high!";
      score--;
      // Se o input for um número maior que o secret number, diminui 1 do score
      document.querySelector("#score").textContent = score;
    } else {
      document.querySelector("#message").textContent = "💥 You lost the game!";
      document.querySelector("#score").textContent = 0;
    }
  } else if (awnserInput < secretNumber) {
    if (score > 1) {
      document.querySelector("#message").textContent = "📉 Too low!";
      score--;
      // Se o input for um número menor que o secret number, diminui 1 do score
      document.querySelector("#score").textContent = score;
    } else {
      document.querySelector("#message").textContent = "💥 You lost the game!";
      document.querySelector("#score").textContent = 0;
    }
  }
});
