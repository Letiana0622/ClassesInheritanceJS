import Character from './Character'

export default class Bowerman extends Character {
    constructor(name, attack, defence) {
      super(name,'Bowerman', attack, defence);
      this.attack = 25;
      this.defence = 25;
    }
  }
  
