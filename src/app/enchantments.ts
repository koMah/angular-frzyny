interface Enchantment {
  name: string;
  viewName: string;
}

export const Enchants: Record<string, Enchantment> = {
  inc_dmg: { name: "inc_dmg", viewName: "Increased damage %" },
  inc_dmg_item: {
    name: "inc_dmg_item",
    viewName: "Increased damage on this item %"
  },

  inc_max_dmg: { name: "inc_max_dmg", viewName: "Increased maximum damage %" },
  inc_min_dmg: { name: "inc_min_dmg", viewName: "Increased minimum damage %" },
  inc_hp: { name: "inc_hp", viewName: "Increased Health Points" },
  inc_hp_item: {
    name: "inc_hp_item",
    viewName: "Increased Health Points on this item"
  },

  travel_speed: { name: "travel_speed", viewName: "Faster Travel Speed" },

  attack_speed: { name: "attack_speed", viewName: "Faster Attack Speed" },

  hit_rate: { name: "hit_rate", viewName: "Increased Critical Hit Rate" },
  hit_rate_item: {
    name: "hit_rate_item",
    viewName: "Increased Critical Hit Rate on this item"
  },

  crit_dmg: { name: "crit_dmg", viewName: "Critical Damage" },

  inc_armor: { name: "inc_armor", viewName: "Increased Armor Value" },
  inc_armor_item: {
    name: "inc_armor_item",
    viewName: "Increased Armor Value on this item"
  },

  res_value: { name: "res_value", viewName: "All Resistance Values" },
  res_value_item: {
    name: "res_value_item",
    viewName: "More Resistance on this item"
  },

  block_strength: { name: "block_strength", viewName: "Block Strength" },
  block_rate: { name: "block_rate", viewName: "Improved Block Rate" },
  block_rate_item: {
    name: "block_rate_item",
    viewName: "Improved Block Rate on this item"
  }
};

export const EnchantsTable: Record<string, Enchantment[]> = {
  amulet: [Enchants.block_strength, Enchants.inc_hp, Enchants.crit_dmg],
  belt: [Enchants.res_value, Enchants.res_value_item, Enchants.inc_dmg],
  ring: [Enchants.block_strength, Enchants.inc_hp_item, Enchants.crit_dmg],
  helmet: [Enchants.inc_dmg, Enchants.inc_hp, Enchants.hit_rate],
  pauldrons: [Enchants.res_value, Enchants.inc_dmg, Enchants.inc_armor],
  torso: [Enchants.inc_dmg, Enchants.inc_armor_item, Enchants.inc_armor],
  gloves: [Enchants.inc_dmg_item, Enchants.inc_hp_item, Enchants.attack_speed],
  boots: [Enchants.inc_dmg_item, Enchants.inc_hp_item, Enchants.travel_speed],
  weapon2H: [Enchants.inc_dmg, Enchants.inc_dmg_item, Enchants.crit_dmg],
  weapon1H: [Enchants.attack_speed, Enchants.inc_dmg_item, Enchants.crit_dmg],
  adornment: [Enchants.attack_speed, Enchants.hit_rate_item, Enchants.crit_dmg],
  cloak: [
    Enchants.inc_max_dmg,
    Enchants.inc_min_dmg,
    Enchants.hit_rate,
    Enchants.attack_speed,
    Enchants.block_rate
  ]
};


