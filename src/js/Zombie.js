import Character from './Character'

export default class Zombie extends Character {
    
    constructor(name, attack, defence) {
      super(name, 'Zombie', attack, defence);
      this.attack = 10;
      this.defence = 40;
    }
  }