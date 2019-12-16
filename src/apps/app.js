const personHealth = { name: 'Маг', health: 50 };
export default function indicateHealth(personHealth) {
    let health = personHealth.health;
    if(health > 50) {
        return 'healthy';
    } else if (health < 50 && health > 15) {
        return'wounded';
    } else {
        return'critical';
    }
};

console.log(indicateHealth(personHealth));