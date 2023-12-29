import Swordsman from '../Swordsman';

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
