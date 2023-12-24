export default class Character {

  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  set name(value) {
   if(typeof value !== 'string' || value.length < 2 || value.length > 10) {
     throw new Error ('введено некорректное значение');
   }
   this._name = value;
  }

  set type(value) {
    const types =['Bowerman','Swordsman','Magician','Daemon','Undead','Zombie'];
    let isValueInTypes = types.includes(value);
    if(typeof value !== 'string' || !isValueInTypes) {
      throw new Error ('введено некорректное значение');
    }
    this._type = value;
   }
}

export class Bowerman extends Character {
  attack = 25;
  defence = 25;
  constructor(name, health, level, attack, defence) {
    super(name,'Bowerman', health, level, attack, defence);
  }
}

export class Swordsman extends Character {
  attack = 40;
  defence = 10;
  constructor(name, health, level, attack, defence) {
    super(name,'Swordsman', health, level, attack, defence);
  }
}

export class Magician extends Character {
  attack = 10;
  defence = 40;
  constructor(name, health, level, attack, defence) {
    super(name,'Magician', health, level, attack, defence);
  }
}
export class Daemon extends Character {
  attack = 25;
  defence = 25;
  constructor(name, health, level, attack, defence) {
    super(name,'Daemon', health, level, attack, defence);
  }
}
export class Undead extends Character {
  attack = 40;
  defence = 10;
  constructor(name, health, level, attack, defence) {
    super(name,'Undead', health, level, attack, defence);
  }
}
export class Zombie extends Character {
  attack = 10;
  defence = 40;
  constructor(name, health, level, attack, defence) {
    super(name, 'Zombie', health, level, attack, defence);
  }
}
