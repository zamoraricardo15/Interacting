var tigger = {
    character: "Tigger",
    greet: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
    }
};
var pooh = {
    character: "Winnie the Pooh",
    greet: function(){
        console.log("Ohh, bother!");
    }
};
var piglet = { character: "Piglet",
    greet: function(){
        console.log("Oh, d-d-d-d-d-dear! I wasn't expecting company!");
    }
};
var bees = { character: "Bees",
    greet: function(){
        console.log("BeeBee");
    }
};
var robin = { character: "Christopher Robin",
    greet: function(){
        console.log("Hi, I'm here!");
    }
};
var owl = { character: "Owl",
    greet: function(){
        console.log("Hi, welcome to my place!");
    }
};
var rabbit = { character: "Rabbit",
    greet: function(){
        console.log("Come look at my place!");
    }
};
var gopher = { character: "Gopher",
    greet: function(){
        console.log("Hi, pleased to meet you!");
    }
};
var kanga = { character: "Kanga",
    greet: function(){
        console.log("Have you seen where my son is?");
    }
};
var eeyore = { character: "Eeyore",
    greet: function(){
        console.log("Almost there, wait!");
    }
};
var heffa = { character: "Heffalumps",
    greet: function(){
        console.log("Hihi, welcome!");
    }
};

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
            character.location.greet();

        }
    }
    if(orientation == "south" || orientation == "South"){

        if(character.travell.south == null){

            console.log("Going south, you may better not go that way.")

        }
        else {

            character.travell = character.travell.south;
            console.log("You are going south to " + character.travell.character + "'s house!");
            character.location.greet();

        }
    }
    if(orientation == "east" || orientation == "East"){

        if(character.travell.east == null){

            console.log("Going east, you may better not go that way.")


        }
        else {

            character.travell = character.travell.east;

            console.log("You are going east to " + character.travell.character + "'s house!");
            character.location.greet();

        }
    }
    if(orientation == "west" || orientation == "West"){

        if(character.travell.west == null){

            console.log("Going west, you may better not go that way.")
        }
        else {
            character.travell = character.travell.west;
            console.log("You are going west to " + character.travell.character + "'s house!");
            character.location.greet();

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
