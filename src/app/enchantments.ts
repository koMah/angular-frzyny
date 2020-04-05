interface Enchantment {
    name: string;
    viewName: string;
}

export const Enchants: Record < string, string > = {
    inc_dmg: "Increased damage %",
    inc_dmg_item: "Increased damage on this item %",
    inc_max_dmg: "Increased maximum damage %",
    inc_min_dmg: "Increased minimum damage %",
    inc_hp: "Increased Health Points",
    inc_hp_item: "Increased Health Points on this item",
    travel_speed: "Faster Travel Speed",
    attack_speed: "Faster Attack Speed",
    hit_rate: "Increased Critical Hit Rate",
    hit_rate_item: "Increased Critical Hit Rate on this item",
    crit_dmg: "Critical Damage",
    inc_armor: "Increased Armor Value",
    inc_armor_item: "Increased Armor Value on this item",
    res_value: "All Resistance Values",
    res_value_item: "More Resistance on this item",
    block_strength: "Block Strength",
    block_rate: "Improved Block Rate",
    block_rate_item: "Improved Block Rate on this item"
};

export const EnchantsTable: Record < string, string[] > = {
    amulet: ["block_strength", "inc_hp", "crit_dmg"],
    belt: ["res_value", "res_value_item", "inc_dmg"],
    ring: ["block_strength", "inc_hp_item", "crit_dmg"],
    helmet: ["inc_dmg", "inc_hp", "hit_rate"],
    pauldrons: ["res_value", "inc_dmg", "inc_armor"],
    torso: ["inc_dmg", "inc_armor_item", "inc_armor"],
    gloves: ["inc_dmg_item", "inc_hp_item", "attack_speed"],
    boots: ["inc_dmg_item", "inc_hp_item", "travel_speed"],
    weapon2H: ["inc_dmg", "inc_dmg_item", "crit_dmg"],
    weapon1H: ["attack_speed", "inc_dmg_item", "crit_dmg"],
    adornment: ["attack_speed", "hit_rate_item", "crit_dmg"],
    cloak: [
        "inc_max_dmg",
        "inc_min_dmg",
        "hit_rate",
        "attack_speed",
        "block_rate"
    ]
};