var Dog = /** @class */ (function () {
    function Dog(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
    Dog.prototype.bark = function () {
        console.log("WOOF WOOF!");
    };
    return Dog;
}());
export default Dog;
