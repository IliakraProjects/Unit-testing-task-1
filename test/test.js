/* eslint-disable import/extensions */
import indicateHealth from '../src/apps/app.js';

test('level of health', () => {
  const personHealth = { name: 'Маг', health: 5 };
  const expected = 'critical';
  const received = indicateHealth(personHealth);
  expect(received).toBe(expected);
});

test('level of health', () => {
  const personHealth = { name: 'Маг', health: 20 };
  const expected = 'wounded';
  const received = indicateHealth(personHealth);
  expect(received).toBe(expected);
});

test('level of health', () => {
  const personHealth = { name: 'Маг', health: 60 };
  const expected = 'healthy';
  const received = indicateHealth(personHealth);
  expect(received).toBe(expected);
});
