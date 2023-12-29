import Magician from '../Magician';

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