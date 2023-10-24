class Car {
  constructor(){
    this.color = undefined
    this.model = undefined
    this.year = 2001
  }
  changeColor(newColor){
    this.color = newColor
  }
  changeModel(newModel){
    this.model = newModel
  }
}

let mazda = new Car()
let jetta = new Car()

console.log(mazda.color)
mazda.changeColor('blue')
mazda.color