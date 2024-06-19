let images = [];
let currentImageIndex = 0;
let button;
let input_group;
let container_get_started;

function preload() {
  // Cargar las imágenes
  images[0] = loadImage("images/no.gif");
  images[1] = loadImage("images/adventure-time.jpg");
  images[2] = loadImage("images/question1.gif");
  images[3] = loadImage("images/question2.gif");
  images[4] = loadImage("images/question3.gif");
  images[5] = loadImage("images/question4.gif");
  images[6] = loadImage("images/question5.gif");
  images[7] = loadImage("images/celebration.gif");
}

function setup() {
  var canvas = createCanvas(600, 400);
  canvas.parent("canvas-container");

  // Inicializar con la primera imagen
  currentImageIndex = 1;

  let button = select("#btn-get-started");
  button.mousePressed(changeScene);
}

function draw() {
  // Mostrar la imagen actual
  background("white");

  if (currentImageIndex == 0) {
    drawCoverImage(images[currentImageIndex], 100, 25, 400, 350);
  } else {
    drawCoverImage(images[currentImageIndex], 0, 0, 600, 400);
  }
}

function changeScene() {
  // Si llega al final, puede reiniciar o parar
  if (currentImageIndex < images.length - 1) {
    // Cambiar a la siguiente imagen
    currentImageIndex++;
  }

  let option_1 = document.querySelector("#btn-1");
  let option_2 = document.querySelector("#btn-2");
  let option_3 = document.querySelector("#btn-3");
  let option_4 = document.querySelector("#btn-4");

  // Remover event listeners anteriores
  option_1.removeEventListener("click", changeScene);
  option_1.removeEventListener("click", incorrectAnswer);
  option_2.removeEventListener("click", changeScene);
  option_2.removeEventListener("click", incorrectAnswer);
  option_3.removeEventListener("click", changeScene);
  option_3.removeEventListener("click", incorrectAnswer);
  option_4.removeEventListener("click", changeScene);
  option_4.removeEventListener("click", incorrectAnswer);

  // Ocultar las opciones de botones
  option_1.classList.add("hidden");
  option_2.classList.add("hidden");
  option_3.classList.add("hidden");
  option_4.classList.add("hidden");

  // incorrect answer
  if (currentImageIndex === 0) {
    incorrectAnswer();

    return;
  }

  // Initial Image
  if (currentImageIndex === 1) {
    let question = document.querySelector(".question");
    question.innerHTML =
      "Help finn and jake answer questions from the Adventure Time animated series.";

    let story_text = document.querySelector(".storyText");
    story_text.innerHTML = "Test your knowledge, see how much you know.";

    let btn_start = document.querySelector("#btn-get-started");
    btn_start.value = "Get Started";

    let container_buttons = document.querySelector(".input-group");
    container_buttons.classList.add("hidden");

    let container = document.querySelector(".container-get-started");
    container.classList.remove("hidden");

    return;
  }

  // enable the options buttons
  let container = document.querySelector(".container-get-started");
  container.classList.add("hidden");

  let container_buttons = document.querySelector(".input-group");
  container_buttons.classList.remove("hidden");

  let story_text = document.querySelector(".storyText");
  story_text.innerHTML = "Please choose the correct answer.";

  // QUESTION 1
  if (currentImageIndex === 2) {
    let question = document.querySelector(".question");
    question.innerHTML = "1. What is Finn's full name?";

    // Options
    option_1.innerHTML = "Finn Mertens";
    option_1.classList.remove("hidden");
    option_1.addEventListener("click", changeScene);

    option_2.innerHTML = "Finn Smith";
    option_2.classList.remove("hidden");
    option_2.addEventListener("click", incorrectAnswer);

    let option_3 = document.querySelector("#btn-3");
    option_3.innerHTML = "Finn Johnson";
    option_3.classList.remove("hidden");
    option_3.addEventListener("click", incorrectAnswer);

    option_4.innerHTML = "Finn Anderson";
    option_4.classList.remove("hidden");
    option_4.addEventListener("click", incorrectAnswer);

    return;
  }

  // QUESTION 2
  if (currentImageIndex === 3) {
    let question = document.querySelector(".question");
    question.innerHTML =
      "2. What is the name of Finn's best friend and adoptive brother?";

    // Options
    option_1.innerHTML = "Jacobo";
    option_1.classList.remove("hidden");
    option_1.addEventListener("click", incorrectAnswer);

    option_2.innerHTML = "Jane";
    option_2.classList.remove("hidden");
    option_2.addEventListener("click", incorrectAnswer);

    option_3.innerHTML = "Jake";
    option_3.classList.remove("hidden");
    option_3.addEventListener("click", changeScene);

    option_4.innerHTML = "John";
    option_4.classList.remove("hidden");
    option_4.addEventListener("click", incorrectAnswer);

    return;
  }

  // QUESTION 3
  if (currentImageIndex === 4) {
    let question = document.querySelector(".question");
    question.innerHTML =
      "3. What magical item does Finn use as his main weapon?";

    // Options
    option_1.innerHTML = "A bow";
    option_1.classList.remove("hidden");
    option_1.addEventListener("click", incorrectAnswer);

    option_2.innerHTML = "A spear";
    option_2.classList.remove("hidden");
    option_2.addEventListener("click", incorrectAnswer);

    option_3.innerHTML = "A sword";
    option_3.classList.remove("hidden");
    option_3.addEventListener("click", changeScene);

    option_4.innerHTML = "An axe";
    option_4.classList.remove("hidden");
    option_4.addEventListener("click", incorrectAnswer);

    return;
  }

  // QUESTION 4
  if (currentImageIndex === 5) {
    let question = document.querySelector(".question");
    question.innerHTML =
      "4. What is the Ice King's true identity?";

    // Options
    option_1.innerHTML = "Simon Petrikov";
    option_1.classList.remove("hidden");
    option_1.addEventListener("click", changeScene);

    option_2.innerHTML = "Martin Mertens";
    option_2.classList.remove("hidden");
    option_2.addEventListener("click", incorrectAnswer);

    option_3.innerHTML = "Billy";
    option_3.classList.remove("hidden");
    option_3.addEventListener("click", changeScene);

    option_4.innerHTML = "Richard";
    option_4.classList.remove("hidden");
    option_4.addEventListener("click", incorrectAnswer);

    return;
  }

  // QUESTION 5
  if (currentImageIndex === 6) {
    let question = document.querySelector(".question");
    question.innerHTML =
      "5. What is BMO and what is his function?";

    // Options
    option_1.innerHTML = " A combat robot";
    option_1.classList.remove("hidden");
    option_1.addEventListener("click", incorrectAnswer);

    option_2.innerHTML = "A video game console";
    option_2.classList.remove("hidden");
    option_2.addEventListener("click", changeScene);

    option_3.innerHTML = "A kitchen assistant";
    option_3.classList.remove("hidden");
    option_3.addEventListener("click", incorrectAnswer);

    option_4.innerHTML = "A guardian of Ooo";
    option_4.classList.remove("hidden");
    option_4.addEventListener("click", incorrectAnswer);

    return;
  }

  // End Game
  let question = document.querySelector(".question");
  question.innerHTML ="End Over";

  story_text.innerHTML = "Congratulations you have completed the game.";
}

function drawCoverImage(img, x, y, w, h) {
  let imgRatio = img.width / img.height;
  let canvasRatio = w / h;
  let newWidth, newHeight;

  if (canvasRatio > imgRatio) {
    newWidth = w;
    newHeight = w / imgRatio;
  } else {
    newWidth = h * imgRatio;
    newHeight = h;
  }

  // Centrar la imagen
  let offsetX = (w - newWidth) / 2;
  let offsetY = (h - newHeight) / 2;

  image(img, x + offsetX, y + offsetY, newWidth, newHeight);
}

function incorrectAnswer() {
  currentImageIndex = 0;

  let question = document.querySelector(".question");
  question.innerHTML = "You can try again at any time.";

  let story_text = document.querySelector(".storyText");
  story_text.innerHTML = "It seems that your answer was not the right one.";

  let btn_start = document.querySelector("#btn-get-started");
  btn_start.value = "Try again";

  let container_buttons = document.querySelector(".input-group");
  container_buttons.classList.add("hidden");

  let container = document.querySelector(".container-get-started");
  container.classList.remove("hidden");
}

function celebration(){

}
