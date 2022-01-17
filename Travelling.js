var pooh = { character: "Winnie the Pooh" };
var tigger = { character: "Tigger" };
var bees = { character: "Bees" };
var piglet = { character: "Piglet" };
var rabbit = { character: "Rabbit" };
var robin = { character: "Christopher Robin" };
var owl = { character: "Owl" };
var kanga = { character: "Kanga" };
var gopher = { character: "Gopher" };
var heffa = { character: "Heffalumps" };
var eeyore = { character: "Eeyore" };

pooh.north = robin;
pooh.south = tigger;
pooh.east = bees;
pooh.west = piglet;


heffa.west = eeyore;

gopher.west = rabbit;

tigger.north = pooh;

owl.east = robin;
owl.south = piglet;

bees.north = rabbit;
bees.west = pooh;

piglet.east = pooh;
piglet.north = owl;

rabbit.east = gopher;
rabbit.west = robin;
rabbit.south = bees;

robin.north = kanga;
robin.south = pooh;
robin.east = rabbit;
robin.west = owl;

eeyore.east = heffa;
eeyore.south = kanga;

kanga.north = eeyore;
kanga.south = robin;




var character = {
    travell: tigger

}

function move(orientation){
    if(orientation == "north" || orientation == "North"){

        if(character.travell.north == null){

            console.log("Going north, you may better not go that way.")
        }
        else {
            character.travell = character.travell.north;
            console.log("You are going north to " + character.travell.character + "'s house!");
        }
    }
    if(orientation == "south" || orientation == "South"){
        if(character.travell.south == null){
            console.log("Going south, you may better not go that way.")
        }
        else {
            character.travell = character.travell.south;
            console.log("You are going south to " + character.travell.character + "'s house!");
        }
    }
    if(orientation == "east" || orientation == "East"){
        if(character.travell.east == null){
            console.log("Going east, you may better not go that way.")
        }
        else {
            character.travell = character.travell.east;
            console.log("You are going east to " + character.travell.character + "'s house!");
        }
    }
    if(orientation == "west" || orientation == "West"){
        if(character.travell.west == null){
            console.log("Going west, you may better not go that way.")
        }
        else {
            character.travell = character.travell.west;
            console.log("You are going west to " + character.travell.character + "'s house!");
        }
    }
}


move("south");
move("north");
move("east");
move("west");
move("north");
move("east");
move("west");
move("north");
move("north");
