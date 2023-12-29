import Character from './Character'

export default class Swordsman extends Character {
    constructor(name, attack, defence) {
      super(name,'Swordsman', attack, defence);
      this.attack = 40;
      this.defence = 10;
    }
  }