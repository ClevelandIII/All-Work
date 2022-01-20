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

  abstract identify(): void;
}

enum Signs {
  "WRITING",
  "FINGERPRINTS",
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
    public type: string,
    public signs: Signs
  ) {
    super(identity, location, challengeRating, weakness, color, size, id);
  }

  identify(): void {
    console.log(`this monster is a ${this.type}`);
  }

  updateMonster(type: string) {
    this.type = type;
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
    public type: string,
    public habitat: string,
    public defensives: string[]
  ) {
    super(identity, location, challengeRating, weakness, color, size, id);
  }

  identify(): void {
    console.log(`this monster is a ${this.type}`);
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

enum complience {
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
    public type: string,
    public humanness: number,
    public complience: complience
  ) {
    super(identity, location, challengeRating, weakness, color, size, id);
  }

  identify(): void {
    console.log(`this monster is a ${this.type}`);
  }

  updateHuman(type: number) {
    this.humanness = type;
  }

  updateComplience(type: complience) {
    this.complience = type;
  }

  printInfo() {
    console.log(this);
  }
}

//push all stats to this, map by name
class MonsterStorage {
  static monsterObject: Monster[] = [];
}

const newGhost = new Ghost(
  "Casper",
  "18005882300 Empire",
  10,
  "Sean",
  "transparent",
  "medium",
  "1",
  "unknown",
  Signs.WRITING
);
// newGhost.updateMonster("phantom");
// newGhost.printInfo();

const newBeast = new Beasts(
  "Amalgamate",
  "18005882300 Empire",
  7,
  "Bad Memories",
  "white",
  "small",
  "2",
  "blob",
  "underground",
  ["faces", "bad memories", "toby fox"]
);
// newBeast.printInfo();

const newHuman = new Humanoid(
  "Jevil",
  "18005882300 Empire",
  10,
  "Chaos",
  "blue and black",
  "medium",
  "J",
  "Darkener",
  7,
  complience.neutral
);
// newHuman.printInfo();

console.log(MonsterStorage.monsterObject.sort());
