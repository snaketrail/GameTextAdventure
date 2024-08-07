const dialogText = document.querySelector('.dialog-text');
const optionButtons = document.querySelectorAll('.option-button');
const mp = 0;
let hp = 100;
const inventory = [];
const skills = [];
const titles = [];
const karmaPoints = 0;
const malKarmaPoints = 0;
// ,
//     effect: () => {
//       hp -= 20;
//       alert(`HP decreased by 20. Current HP: ${hp}`);
//     }
const scenes = {
  '1': {
    text: "What dragons? Where did you see them, boy? Oh! OH! RUUUUN!",
    options: [
      { text: "Run.", nextScene: '1.1' },
      { text: "Walk.", nextScene: '1' },
      { text: "Stay.", nextScene: '1' },
      { text: "Try to speak to the dragons.", nextScene: '1' }
    ]
  },
  '1.1': {
    text: "Your run as fast as possible. You don't even look behind to see if the dragosn are still around. Even if they were, you would not choose to reason with a legendary creature.",
    options: [
      { text: "Continue.", nextScene: '1.1.1' }
    ]
  },
  '1.1.1': {
    text: "You find a small cave to your left, but you also notice something in the bushes to your right..",
    options: [
      { text: "Enter the cave.", nextScene: '1.1.1.1' },
      { text: "Check the bushes.", nextScene: '1.1.1.2' }
    ]
  },
  '1.1.1.1': {
    text: "You enter the cave and see that somebody or something turned it into a home. There's a bed, a table, a chair even something that looks like a shower.",
    options: [
      { text: "Take a shower.", nextScene: '1.1.1.1.1' },
      { text: "Sleep in the bed.", nextScene: '1.1.1.1.2' },
      { text: "Wait for the dragons to pass.", nextScene: '1.1.1.1.3' },
      { text: "Search for anything of value.", nextScene: '1.1.1.1.4' }

    ]
  },
  '1.1.1.1.1': {
    text: "You tried using the shower but you had no idea how to turn it on. Also, it seemed kind of silly to take a shower in the home of a random stranger, specially if it is in a cave in the forest.",
    options: [
      { text: "Sleep in the bed.", nextScene: '1.1.1.1.2' },
      { text: "Wait for the dragons to pass.", nextScene: '1.1.1.1.3' },
      { text: "Search for anything of value.", nextScene: '1.1.1.1.4' }

    ]
  },
  '1.1.1.1.2': {
    text: "You tried sleeping in the bed, but to no avail. Your heart is still beating too fast because you ran from the dragons. Maybe you should wait until you calm down.",
    options: [
      { text: "Wait a bit more to calm down.", nextScene: '1.1.1.1.2.1' },
      { text: "Check to see if the dragons are gone.", nextScene: '1.1.1.1.2.2' }

    ]
  },
  '1.1.1.2': {
    text: "You check the bushes. Nothing is there. Suddently you feel a sharp pain in your neck. You faint.",
    options: [
      { text: "Continue.", nextScene: '1.1.1.2.1' }

    ]
  }
};

let currentScene = '1';

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

  // Check if the scene has an effect and execute it
  if (scene.effect) {
    scene.effect();
  }
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
