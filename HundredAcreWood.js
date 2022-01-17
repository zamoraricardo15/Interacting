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




