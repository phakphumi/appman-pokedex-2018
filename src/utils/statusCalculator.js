export const calculateHp = (hp) => {
  let originHp = +hp || 0;

  if (hp > 100) {
    originHp = 100;
  } else if (hp < 0) {
    originHp = 0;
  }

  return originHp;
}

export const calculateStr = (attackAmount) => {
  let damage = 0;

  if (!attackAmount) {
    damage = 0;
  } else if (attackAmount === 1) {
    damage = 50;
  } else {
    damage = 100;
  }

  return damage;
}

export const calculateWeak = (weaknessAmount) => {
  if (weaknessAmount > 0) {
    return 100;
  } else {
    return 0;
  }
}

export const calculateDamage = (attacks) => attacks?.reduce(
  (totalDmg, attack) => totalDmg + (+attack?.damage?.replace(/\D+/g, '')
  ), 0) || 0;

export const convertStatusToWidth = (value, maxWidth) => (value / 100 * maxWidth) || 0;
