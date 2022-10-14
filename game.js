//Create the Rooms: Kitchen, Bathroom, Lounge, Bedroom
class Room {
  constructor(name, description) {
    this._name = name;
    this._description = description;
    this._linkedRooms = {};
    this._linkedItems = {};
  }
}
const Kitchen = new Room(
  "Kitchen",
  "You are in the Kitchen. To the left of the kitchen is the lounge, to the right is the bathroom"
);

const Lounge = new Room(
  "Lounge",
  "You are in the Lounge, there is a large comfy sofa, and a spider on the coffee table"
);

const Bathroom = new Room(
  "Bathroom",
  "You are in the bathroom, There's nothing here"
);
const Bedroom = new Room(
  "Bedroom",
  "You are in the bedroom, there is a credit card on the bed"
);
// Link the rooms: Bathroom> kitchen> Lounge> bedroom<
Bathroom._linkedRooms = { Kitchen, Bedroom };
Kitchen._linkedRooms = { Bathroom, Lounge };
Lounge._linkedRooms = { Kitchen, Bedroom };
Bedroom._linkedRooms = { Lounge, Bathroom };
//Create Items: Credit card, Hammer
class Item {
  constructor(name) {
    this._name = name;
  }
}

const Hammer = new Item("hammer");
const Credit_Card = new Item("credit card");

// link items to rooms: hammer to kitchen, credit card to bedroom
Hammer._linkedRooms = Kitchen;
Kitchen._linkedItems = Hammer;
Bedroom._linkedItems = Credit_Card;
Credit_Card._linkedRooms = Bedroom;

// Create character: Spider
class Character {
  constructor(name) {
    this._name = name;
  }
}
// Link Spider to lounge
const Spider = new Character("Spider");
Spider._linkedRooms = Lounge;

//Display Kitchen at start
currentRoom = Kitchen;
document.getElementById("text").innerHTML = currentRoom._description;
document.getElementById("option-1").innerHTML = "Next Room";
document.getElementById("option-2").innerHTML = "Previous";
// Link buttons to Bedroom and bathroom

function nextRoom() {
  currentRoom = Lounge;
  document.getElementById("text").innerHTML = currentRoom._description;
}
function previousRoom() {
  currentRoom = Bathroom;
  document.getElementById("text").innerHTML = currentRoom._description;
}
