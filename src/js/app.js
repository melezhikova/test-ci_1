const input = { name: 'Маг', health: 90 };

export default function checkHealth(item) {
  if (item.health > 50) {
    return 'healthy';
  } if (item.health > 14 && item.health < 51) {
    return 'wounded';
  }
  return 'critical';
}

checkHealth(input);
