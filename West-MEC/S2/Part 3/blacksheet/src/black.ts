abstract class Monster {
  constructor(
    public identity: string,
    public location: string,
    public challengeRating: number,
    public weakness: string,
    public color: string,
    public size: string,
    public id: string
  ) {
    this.identity = identity;
    this.challengeRating = challengeRating;
    this.location = location;
    this.weakness = weakness;
    this.color = color;
    this.size = size;
    this.id = id;

    this.init();
  }

  init() {
    MonsterStorage.monsterObject.push(this);
  }

  abstract printInfo(): void;
}

enum Type {
  "BANSHEE",
  "PHANTOM",
  "POLTERGIEST",
  "WRAITH",
  "SPIRIT",
}

class Ghost extends Monster {
  constructor(
    public identity: string,
    public location: string,
    public challengeRating: number,
    public weakness: string,
    public color: string,
    public size: string,
    public id: string,
    public type: Type,
    public signs: string[]
  ) {
    super(identity, location, challengeRating, weakness, color, size, id);
  }

  addSign(sign: string) {
    this.signs.push(sign);
  }

  updateType(tipe: Type) {
    this.type = tipe;
  }

  printInfo() {
    console.log(this);
  }
}

class Beasts extends Monster {
  constructor(
    public identity: string,
    public location: string,
    public challengeRating: number,
    public weakness: string,
    public color: string,
    public size: string,
    public id: string,
    public habitat: string,
    public defensives: string[]
  ) {
    super(identity, location, challengeRating, weakness, color, size, id);
  }

  updateDefences(type: string) {
    this.defensives.push(type);
  }

  updateHabitat(type: string) {
    this.habitat = type;
  }

  printInfo() {
    console.log(this);
  }
}

enum Complience {
  "hostile",
  "unfriendly",
  "neutral",
  "friendly",
  "ally",
}

class Humanoid extends Monster {
  constructor(
    public identity: string,
    public location: string,
    public challengeRating: number,
    public weakness: string,
    public color: string,
    public size: string,
    public id: string,
    public humanness: number,
    public complience: Complience
  ) {
    super(identity, location, challengeRating, weakness, color, size, id);
  }

  updateHuman(type: number) {
    this.humanness = type;
  }

  updateComplience(type: Complience) {
    this.complience = type;
  }

  printInfo() {
    console.log(this);
  }
}

//push all stats to this, map by name
class MonsterStorage {
  static monsterObject: Monster[] = [];

  static alphabeticalSort() {
    return MonsterStorage.monsterObject.sort((a: Monster, b: Monster) => {
      const bruh = a.identity.localeCompare(b.identity);
      console.log(bruh);

      return 0;
    });
  }

  static alphabeticalGrab(type: string) {
    // for (let i = 0; i > MonsterStorage.monsterObject.length; i++){
    //   if(type == a.identity){
    //     return a.identity
    //   }
    //   return 0
    // }
    console.log(
      MonsterStorage.monsterObject.filter((each) => each.identity === type)
    );
  }
}

const newGhost = new Ghost(
  "Casper",
  "Houses",
  1,
  "Fans",
  "transparent",
  "small",
  "1",
  Type.PHANTOM,
  ["Sitting next to someone alone"]
);
const newGhost2 = new Ghost(
  "Danny",
  "Crime",
  5,
  "A very strange machine",
  "grey",
  "medium",
  "2",
  Type.PHANTOM,
  ["Phasing through walls"]
);
const newGhost3 = new Ghost(
  "Ghast",
  "Nether",
  2,
  "Its own projectiles",
  "white",
  "large",
  "3",
  Type.SPIRIT,
  ["Crying", "Fire"]
);

const newBeast = new Beasts(
  "Plantera",
  "Jungle",
  10,
  "Fire",
  "Pink",
  "large",
  "4",
  "Jungle",
  ["Thorn Ball", "Seeds", "Tentacles"]
);
const newBeast2 = new Beasts(
  "Duck",
  "Lemonade Stand",
  1,
  "Grapes",
  "Yellow",
  "small",
  "5",
  "Grassy Overworld",
  ["Annoyance"]
);
const newBeast3 = new Beasts(
  "Amalgamate",
  "True Lab",
  6,
  "Memories",
  "White",
  "medium",
  "6",
  "Darkness",
  ["Teeth", "Faces", "Dogs"]
);

const newHuman = new Humanoid(
  "Jevil",
  "Dark Fountain",
  10,
  "Sleep",
  "Blue",
  "medium",
  "7",
  8,
  Complience.unfriendly
);
const newHuman2 = new Humanoid(
  "Ralsei",
  "Dark Fountain",
  0,
  "Niceness",
  "Green",
  "medium",
  "8",
  8,
  Complience.ally
);
const newHuman3 = new Humanoid(
  "Guide",
  "Overworld",
  1,
  "Weird Voodoo Doll",
  "Pink and Red",
  "hard",
  "9",
  10,
  Complience.unfriendly
);

const newHuman4 = new Humanoid(
  "unknown",
  `40??42'02.7"N 75??52'00.2"W`,
  10,
  "unknown",
  "Pink and Red",
  "hard",
  "9",
  8,
  Complience.hostile
);

console.log(MonsterStorage.alphabeticalSort())
console.log(MonsterStorage.alphabeticalGrab('Jevil'))

