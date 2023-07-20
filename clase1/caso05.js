class Persona {
  constructor(nombre) {
    console.log('Se ha creado una persona');

    this.name = nombre
    this.age = 30
  }

  speak = () => {
    console.log('my name is ', this.name)
  }

  walk = () => {
    console.log('like moon walk !')
  }
}

