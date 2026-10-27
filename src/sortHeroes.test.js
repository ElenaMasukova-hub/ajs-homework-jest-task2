import { sortHeroes } from './sortHeroes.js';

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const sorted = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('sorts heroes by health descending', () => {
  expect(sortHeroes(heroes)).toEqual(sorted);
});

test('toBe does NOT work for objects (shows the difference)', () => {
  expect(sortHeroes(heroes)).not.toBe(sorted);
});