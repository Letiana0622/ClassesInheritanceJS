import Character, {Bowerman, Swordsman, Magician, Daemon, Undead, Zombie} from '../app';

const personCharacter = new Character('Mary', 'Daemon')

test('new Character object is created as expected', () => {
  const result = {
    _name: 'Mary',
    _type: 'Daemon',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined
  };

  expect(result).toEqual(personCharacter);
});

test.each([ 
  ['too short name', 'M', 'Daemon'], 
  ['too long name', 'Мммммммммммммммм', 'Daemon'], 
  ['not correct type','Mary', 'Dddddddddddddd'], 
])( 
  ('should through error in case of %s'), 
  (errorType, name, type) => { 
    expect(() => {
      new Character(name, type);
    }).toThrow(); 
  }
);

const personBowerman = new Bowerman('Mary')

test('new Bowerman object is created as expected', () => {
  const result = {
    _name: 'Mary',
    _type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  };

  expect(result).toEqual(personBowerman);
});

const personSwordsman = new Swordsman('Mary')

test('new Swordsman object is created as expected', () => {
  const result = {
    _name: 'Mary',
    _type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  };

  expect(result).toEqual(personSwordsman);
});

const personMagician = new Magician('Mary')

test('new Magician object is created as expected', () => {
  const result = {
    _name: 'Mary',
    _type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  };

  expect(result).toEqual(personMagician);
});

const personDaemon = new Daemon('Mary')

test('new Daemon object is created as expected', () => {
  const result = {
    _name: 'Mary',
    _type: 'Daemon',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  };

  expect(result).toEqual(personDaemon);
});

const personUndead = new Undead('Mary')

test('new Undead object is created as expected', () => {
  const result = {
    _name: 'Mary',
    _type: 'Undead',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  };

  expect(result).toEqual(personUndead);
});

const personZombie = new Zombie('Mary')

test('new Zombie object is created as expected', () => {
  const result = {
    _name: 'Mary',
    _type: 'Zombie',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  };

  expect(result).toEqual(personZombie);
});
