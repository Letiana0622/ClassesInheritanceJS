export default class Character {

    constructor(name, type) {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = undefined;
      this.defence = undefined;
    }
  
    set name(value) {
     if(typeof value !== 'string' || value.length < 2 || value.length > 10) {
       throw new Error ('введено некорректное значение');
     }
     this._name = value;
    }
  
    set type(value) {
      const types =['Bowerman','Swordsman','Magician','Daemon','Undead','Zombie'];
      if(typeof value !== 'string' || !types.includes(value)) {
        throw new Error ('введено некорректное значение');
      }
      this._type = value;
     }
  }