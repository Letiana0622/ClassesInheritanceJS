import Character from './Character'

export default class Magician extends Character {
    constructor(name, attack, defence) {
      super(name,'Magician', attack, defence);
      this.attack = 10;
      this.defence = 40;
    }
  }