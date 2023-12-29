import Zombie from '../Zombie';

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