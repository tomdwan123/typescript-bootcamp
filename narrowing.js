var talk = function (creature) {
    if ("meow" in creature) {
        console.log(creature.meow());
    }
    else {
        console.log(creature.bark());
    }
};
var kitty = { meow: function () { return "MEOWWW"; } };
talk(kitty);
