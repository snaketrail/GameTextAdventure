const dialogText = document.querySelector('.dialog-text');
const optionButtons = document.querySelectorAll('.option-button');

const scenes = [
  {
    text: "Welcome to real life! Do not enjoy your stay, and if you ever feel overworked, tired, or just want a break, don't bother coming to work at all. We can't babysit losers like you.",
    options: [
      { text: "Press space to continue.", nextScene: 1 },
    ]
  },
  {
    text: "You feel a strange sensation as you ponder over the harsh words. What will you do?",
    options: [
      { text: "Go to work.", nextScene: 2 },
      { text: "Take a break.", nextScene: 3 }
    ]
  },
  {
    text: "You decided to go to work. As you enter the office, you see your boss giving you a stern look.",
    options: [
      { text: "Apologize and get to work.", nextScene: 4 },
      { text: "Ignore and continue with your tasks.", nextScene: 5 }
    ]
  },
  {
    text: "You decided to take a break. You feel relaxed and refreshed.",
    options: [
      { text: "Return to work.", nextScene: 2 },
      { text: "Extend the break.", nextScene: 6 }
    ]
  },
  {
    text: "You apologized and got to work. Your boss seems satisfied with your dedication.",
    options: [
      { text: "Continue working.", nextScene: 5 },
    ]
  },
  {
    text: "You ignore your boss and continue with your tasks. The day goes by uneventfully.",
    options: [
      { text: "Keep working hard.", nextScene: 5 },
    ]
  },
  {
    text: "You extended the break and eventually decided to quit your job. Freedom feels good!",
    options: [
      { text: "Start a new adventure.", nextScene: 0 },
    ]
  }
];

let currentScene = 0;

function showScene(sceneIndex) {
  const scene = scenes[sceneIndex];
  dialogText.textContent = scene.text;
  optionButtons.forEach((button, index) => {
    if (scene.options[index]) {
      button.textContent = scene.options[index].text;
      button.style.display = 'inline-block';
    } else {
      button.style.display = 'none';
    }
  });
}

function chooseOption(optionIndex) {
  const nextScene = scenes[currentScene].options[optionIndex].nextScene;
  currentScene = nextScene;
  showScene(currentScene);
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' && scenes[currentScene].options.length === 1) {
    chooseOption(0);
  }
});

showScene(currentScene);
