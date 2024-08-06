const dialogText = document.querySelector('.dialog-text');
const optionButtons = document.querySelectorAll('.option-button');
const mp = 0;
let hp = 100;
const inventory = [];
const skills = [];
const titles = [];
const karmaPoints = 0;
const malKarmaPoints = 0;

const scenes = {
  '1': {
    text: "What dragons? Where did you see them, boy? Oh! OH! RUUUUN!",
    options: [
      { text: "Run.", nextScene: '1.1' },
      { text: "Walk.", nextScene: '1.2' },
      { text: "Stay.", nextScene: '1.3' },
      { text: "Try to speak to the dragons.", nextScene: '1.3' }
    ]
  },
  '1.1': {
    text: "Your run as fast as possible. You don't even look behind to see if the dragosn are still around. Even if they were, you would not choose to reason with a legendary creature.",
    options: [
      { text: "Continue.", nextScene: '1.1.1' }
    ]
  },
  '1.2': {
    text: "You start walking. Eventually the dragons see you and one lands right next to you. It looks you in the eye and says something in Dragonic.",
    options: [
      { text: "No habla ingles.", nextScene: '1.2.1' },
      { text: "Sorry! I don't speak Dragonic.", nextScene: '1.2.2' },
      { text: "Do you happen to know Common?", nextScene: '1.2.3' },
      { text: "Scream like a little girl.", nextScene: '1.2.4' }

    ]
  },
  '1.1.1': {
    text: "You find a small cave to your left, but you also notice something in the bushes to your right..",
    options: [
      { text: "Enter the cave.", nextScene: '1.1.1.1' },
      { text: "Check the bushes.", nextScene: '1.1.1.2' }
    ]
  },
  '1.1.2': {
    text: "You decided to take a break. You feel relaxed and refreshed.",
    options: [
      { text: "Return to work.", nextScene: '1.1.1' },
      { text: "Extend the break.", nextScene: '1.1.2.1' }
    ]
  },
  
  '1.2.4': {
    text: "You let out a little girl scream. The dragon died laughing.",
    options: [
      { text: "No habla ingles.", nextScene: '1' },
      { text: "Sorry! I don't speak Dragonic.", nextScene: '1.2.2' },
      { text: "Do you happen to know Common?", nextScene: '1.2.3' },
      { text: "Scream like a little girl.", nextScene: '1.2.4' }

    ],
    effect: () => {
      hp -= 20;
      alert(`HP decreased by 20. Current HP: ${hp}`);
    }
  },

  '1.2.1': {
    text: "You joking said to the dragon. Unfortunetely, they don't appreciate jokes from inferior creatures. The dragon burned you alive with his breath.",
    options: [
      { text: "Start again.", nextScene: '1' }
    ]
  },
  '1.2.2': {
    text: "Ugh! Stupid creatures can't learn one damned tongue. I was asking where is the dungeon of Malagarth?",
    options: [
      { text: "F.. YOU!", nextScene: '1.2.2.1' },
      { text: "Yeah. It is right over the mountain range.", nextScene: '1.2.2.2' },
      { text: "If you let me ride you, I will show you exactly where it is.", nextScene: '1.2.2.3' },
      { text: "I thought dragons hated adventurers. Now you want to become one?", nextScene: '1.2.2.4' }

    ]
  },
  '1.2.2.1': {
    text: "It happened so fast that even you don't know how you died.",
    options: [
      { text: "Start over.", nextScene: '1' },
    ]
  },
  '1.1.1.1': {
    text: "You enter the cave and see that somebody or something turned it into a home. There's a bed, a table, a chair even something that looks like a shower.",
    options: [
      { text: "Take a shower.", nextScene: '1.1.1.2' },
      { text: "Sleep in the bed.", nextScene: '1.1.1.2' },
      { text: "Wait for the dragons to pass.", nextScene: '1.1.1.2' },
      { text: "Search for anything of value.", nextScene: '1.1.1.2' },

    ]
  },
  '1.1.1.2': {
    text: "A snake bit your face and melted it. You died!",
    options: [
      { text: "Start over.", nextScene: '1' },
    ]
  },
  '1.1.2.1': {
    text: "You extended the break and eventually decided to quit your job. Freedom feels good!",
    options: [
      { text: "Start a new adventure.", nextScene: '1' },
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
