var dog = {
    name:"kallu",
    bark(){
        console.log(`woof! ${this.name}`)
    }
}
var x = dog.bark;
dog.bark()

x.call(dog)