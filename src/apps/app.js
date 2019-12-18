/* eslint-disable no-shadow */

const personHealth = { name: 'Маг', health: 55 };
export default function indicateHealth(personHealth) {
  const healthLevel = personHealth.health;
  if (healthLevel > 50) {
    return 'healthy';
  } if (healthLevel <= 50 && healthLevel >= 15) {
    return 'wounded';
  }
  return 'critical';
}
indicateHealth(personHealth);
