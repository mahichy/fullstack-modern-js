function Animal(type,live){
    this.type=type;
    this.live=live;
}
class Human extends Animal{
    constructor(name){
        super("mammal",true);
        this.name=name;
    }
}
var anam = new Human("anam")
console.log(anam.type);
console.log(anam.name);