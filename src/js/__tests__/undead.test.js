import Undead from '../Undead';

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