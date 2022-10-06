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

// Function to hide the
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

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

const textNodes = [
  {
    id: 1,

    text: "You are in the kitchen, there is an Ikea dining table with a hammer on it.",
    options: [
      { text: "Ignore hammer", nextText: 2 },
      {
        text: "Pick up hammer",
        setState: { hammer: true },
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "You are in the kitchen. To the left of the kitchen is the lounge, to the right is the bedroom",
    options: [
      {
        text: "Go left",
        nextText: 3,
      },

      {
        text: "Go right",
        nextText: 4,
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
    text: "You are in the Lounge, there is a large comfy sofa, to the left is the bathroom, to the right is the kitchen.",
    options: [
      {
        text: "Sit on Sofa",
        nextText: 8,
      },
      {
        text: "left",
        nextText: 2,
      },
      {
        text: "right",

        nextText: 2,
      },
      {
        text: "Throw the hammer at it",
        requiredState: (currentState) => currentState.hammer,
        nextText: 11,
      },
    ],
  },
  {
    id: 8,
    text: "You found the phone under the cushion!",
    options: [
      {
        text: "Play again",
        nextText: -1,
      },
    ],
  },
  {
    id: 9,
    text: "You foolishly thought this monster could be slain with a single sword.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 10,
    text: "The monster laughed as you hid behind your shield and ate you.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 11,
    text: "You threw your hammer at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.",
    options: [
      {
        text: "Congratulations. Play Again.",
        nextText: -1,
      },
    ],
  },
];

startGame();

// const textElement = document.getElementById("text");
// const optionButtonsElement = document.getElementById("option-buttons");
// //Create the Rooms
// let inventory = {};

// function startGame() {
//   inventory = {};
//   showTextNode(1);
// }
// function showTextNode(textNodeIndex) {
//   const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
//   textElement.innerText = textNode.text;
//   while (optionButtonsElement.firstChild) {
//     optionButtonsElement.removeChild(optionButtonsElement.firstChild);
//   }
// }
// textNode.options.forEach((option) => {
//   if (showOption(option)) {
//     const button = document.createElement("button");
//     button.innerText = option.text;
//     button.classList.add("btn");
//     button.addEventListener("click", () => selectOption(option));
//     optionButtonsElement.appendChild(button);
//   }
// });
// function showOption(option) {
//   return true;
// }
// function selectOption(option) {
//   const nextTextNodeId = option.nextText;
//   if (nextTextNodeId <= 0) {
//     return startGame();
//   }
//   inventory = Object.assign(inventory, option.changeInventory);
//   showTextNode(nextTextNodeId);
// }

// const textNodes = [
//   {
//     id: 1,
//     text: "You are in the kitchen, there is an Ikea dining table with a hammer on it.",
//     options: [
//       { text: "Ignore hammer", nextText: 2 },
//       {
//         text: "Pick up hammer",
//         changeInventory: { hammer: true },
//         nextText: 2,
//       },
//     ],
//   },
//   {
//     id: 2,
//     text: "To the left of the kitchen is the lounge, to the right is the bedroom",
//     options: [
//       {
//         text: "Go left",
//         nextText: 3,
//       },
//       {
//         text: "Go right",
//         nextText: 4,
//       },
//     ],
//   },
// ];

// startGame();

//   roomInfo(kitchen);
//   window.addEventListener("keydown", function keyDown(event) {
//     if ((event.key = "Enter")) {
//       command == document.getElementById("roomInput").value;
//     }
//   });
// }

// class Room {
//   constructor(name, description) {
//     this._name = name;
//     this._desc = description;
//     this._linkedRooms = {};
//   }
//   linkRooms(direction, room) {
//     this._linkedRooms[direction] = room;
//   }
// }

// function changeRoom(roomToChangeTo) {}
// function roomInfo(room) {
//   document.getElementById("roomDescription").innerHTML = room._desc;
// }

// coffeeTable = new Room("coffee table", "a beautiful glass table");
// kitchen = new Room(
//   "Kitchen",
//   "You are in the kitchen, there is an Ikea dining table in the middle, with a sink and cupboards. to the left is the lounge, to the right is the bathroom."
// );

// kitchen.linkRooms("left", coffeeTable);
// console.log(kitchen._linkedRooms);

// function startGame() {
//   roomInfo(kitchen);
//   window.addEventListener("keydown", function keyDown(event) {
//     if ((event.key = "Enter")) {
//       command == document.getElementById("roomInput").value;
//     }
//   });
// }
// startGame();
//  sofa = new Room("Sofa", "A Sofa with 3 large cushions");

// let current = kitchenTable;
// kitchenTable._linkedRooms = [this.coffeeTable]

// //Link the rooms
// console.log(kitchenTable);

// Your Project
// The game should be created using HTML, CSS and JavaScript. The game should include the
// following functionality:
// 1. A Single HTML page. The user should not move from the page when playing the
// game.
// 2. The ability to move around the game to different “rooms”.
// 3. The display of a description of the room when the adventurer enters the room.
// 4. The display of a description of any objects or characters who are in the room.
// 5. The ability to interact with characters and /or objects / rooms in the game (e.g. fight a
// character, solve a puzzle, collect an object).
// 6. The ability to “loose” the game if certain conditions occur (e.g. in interaction with a
// character, object or room).
// 7. The ability to “win” the game if certain conditions occur (e.g. in interaction with a
// character, object or room).
// Deliverables
// The address for the GitHub repository.
// The address for the GitHub pages.
// Extension
// Create a win condition that is dependent on several actions during the game (defeat several
// enemy characters, collect objects from friendly characters and defeat a final “boss” character)
// Reuse the classes and methods to create a second game in a different setting (the second
// game could be much simpler and only include navigation around the setting)
