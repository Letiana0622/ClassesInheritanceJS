import Character from './Character'

export default class Daemon extends Character {
    constructor(name, attack, defence) {
      super(name,'Daemon', attack, defence);
      this.attack = 25;
      this.defence = 25;
    }
  }