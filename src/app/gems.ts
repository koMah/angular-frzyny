interface GemValue {
  value_type: string;
  value: number;
}

interface Gem {
  family: string;
  name: string;
  viewName: string;
  property?: GemValue | GemValue[];
}

export const GemsFamily: string[] = [
  "Ruby",
  "Onix",
  "Diamond",
  "Cyanite",
  "Amethyst"
];
const GemsRarity: string[] = [
  "Flawed",
  "Splintered",
  "Simple",
  "",
  "Polished",
  "Radiant",
  "Flawless",
  "Sacred",
  "Royal",
  "Improved Royal",
  "Magic Royal"
];

const gemsValues: Record<string, Array<number>> = {
  ruby: [2, 3, 6, 10, 15, 22, 33, 48, 60, 75, 90],
  onix: [15, 30, 60, 100, 150, 225, 333, 480, 600, 750, 900],
  diamond: [6, 12, 24, 40, 60, 90, 135, 200, 250, 320, 375],
  cyanite: [6, 12, 24, 40, 60, 90, 135, 200, 250, 320, 375],
  amethyst: [6, 12, 24, 40, 60, 90, 135, 200, 250, 320, 375]
};

const gemsValuesTypes: Record<string, string> = {
  ruby: "damage",
  onix: "hitrate",
  diamond: "resistance",
  cyanite: "armor",
  amethyst: "health"
};

let GemsTable = [] as Gem[];

GemsFamily.forEach(function(gem){
  GemsRarity.forEach(function(rar, index){
    const viewName: string = (rar + " " + gem).trim();
    const name: string = viewName.toLowerCase().replace(/\s/g, "_");

    GemsTable.push({
      name: name,
      viewName: viewName,
      family: gem.toLowerCase(),
      property: {
        value: gemsValues[gem.toLowerCase()][index],
        value_type: gemsValuesTypes[gem.toLowerCase()]
      }
    });
  })
});

export {GemsTable} ;