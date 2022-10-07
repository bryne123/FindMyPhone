//calls the text and buttons in HTML
const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

// Sets Player's items to 0
let state = {};

// Function to start the game, sets items to 0 and shows the first Text element.
function startGame() {
  state = {};
  showTextNode(1);
}

// Function to change text
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }
  // Function to change Button
  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}
// text paths
const textNodes = [
  {
    id: 1,

    text: "You are in the kitchen, there is an Ikea dining table with a hammer on it.",
    options: [
      { text: "Ignore hammer", nextText: 2 },

      //picks up hammer
      {
        text: "Pick up hammer",
        setState: { hammer: true },
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "You are in the kitchen. To the left of the kitchen is the lounge, to the right is the bathroom",
    options: [
      {
        text: "Go left",
        nextText: 3,
      },

      {
        text: "Go right",
        nextText: 10,
      },
    ],
  },
  {
    id: 3,
    text: "You are in the Lounge, there is a large comfy sofa, and a spider on the coffee table",
    options: [
      {
        text: "Sit on Sofa",
        nextText: 4,
      },
      // presents option if player has hammer
      {
        text: "Kill spider",
        requiredState: (currentState) => currentState.hammer,
        nextText: 5,
      },
    ],
  },
  {
    id: 4,
    text: "You are so tired that you fall asleep on the sofa  and the spider bites you.",
    options: [
      {
        text: "Play again",
        nextText: -1,
      },
    ],
  },
  {
    id: 5,
    text: "You Kill the spider with the hammer, underneath the spider is some chocolate ",
    options: [
      {
        text: "Eat chocolate",
        nextText: 6,
      },
      {
        text: "Ignore chocolate",
        nextText: 7,
      },
    ],
  },
  {
    id: 6,
    text: "Ooops, the chocolate was poisonous.",
    options: [
      {
        text: "Play again",
        nextText: -1,
      },
    ],
  },
  {
    id: 7,
    text: "You are in the Lounge, there is a large comfy sofa, to the left is the bedroom, to the right is the kitchen.",
    options: [
      {
        text: "Sit on Sofa",
        nextText: 8,
      },
      {
        text: "left",
        nextText: 9,
      },
      {
        text: "right",

        nextText: 12,
      },
    ],
  },
  {
    id: 8,
    text: "Congratulations You found the phone under the cushion!",
    options: [
      {
        text: "You Won! Play again",
        nextText: -1,
      },
    ],
  },
  {
    id: 9,
    text: "You are in the bedroom, there is a credit card on the bed",
    options: [
      {
        text: "Buy new phone",
        nextText: 11,
      },
      {
        text: "Go back",
        nextText: 7,
      },
    ],
  },
  {
    id: 10,
    text: "You are in the bathroom, There's nothing here.",
    options: [
      {
        text: "Go back",
        nextText: 2,
      },
    ],
  },
  {
    id: 11,
    text: "You bought a new phone! not quite what we wanted but good enough!",
    options: [
      {
        text: "Congratulations. Play Again.",
        nextText: -1,
      },
    ],
  },
  {
    id: 12,
    text: "You are in the kitchen. To the left of the kitchen is the lounge, to the right is the bathroom",
    options: [
      {
        text: "Go left",
        nextText: 7,
      },

      {
        text: "Go right",
        nextText: 13,
      },
    ],
  },
  {
    id: 13,
    text: "You are in the bathroom, There's nothing here.",
    options: [
      {
        text: "Go back",
        nextText: 12,
      },
    ],
  },
];

startGame();
