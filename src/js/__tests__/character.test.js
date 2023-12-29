import Character from '../Character';

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

