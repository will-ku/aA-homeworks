// def callback(arr)
//     arr.each do {|ele| puts ele}
// end

// def titlize(names, &callback)
//     modified = names.map {|name| 'mx. #{name} sdfasdfads'} 
//     callback.call(modified)
// end

function titlelize(names,callback) {
    let modified_names = names.map( name => `Mx. ${name} Jingleheimer Schmidt`);
    callback(modified_names);
};

function modified_names(names)

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
    console.log(`${this.name} the elephant goes 'phrRRRRR!!!'`)
}

Elephant.prototype.grow = function () {
    this.height += 12;
}

Elephant.prototype.addTrick = function (trick) {
    this.tricks.concat(trick);
}

Elephant.prototype.play = function () {
    let trick = Math.random(this.tricks)
    console.log('${name} is {trick}!')
}


let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

