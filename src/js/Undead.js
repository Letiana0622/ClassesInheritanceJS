import Character from './Character'

export default class Undead extends Character {
    constructor(name, attack, defence) {
      super(name,'Undead', attack, defence);
      this.attack = 40;
      this.defence = 10;
    }
  }