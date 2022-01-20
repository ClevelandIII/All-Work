abstract class Monster {
  names: string[] = [];
  stats: string[] = []

  constructor(
    public identity: string,
    public location: string,
    public challengeRating: number,
    public weakness: string,
    public color: string,
    public size: string,
    public id: string
  ) {
    this.location = location;
    this.identity = identity;
    this.challengeRating = challengeRating;
    this.weakness = weakness;
    this.color = color;
    this.size = size;
    this.id = id;
  }

  abstract identify(): void;

  abstract database(): void
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
    super("Ghost", location, challengeRating, "Sean", "transparent", size, id);
  }

  identify(): void {
    console.log(`this monster is a ${this.type}`);
  }

  database(name: string, stats: string[]): void {
      this.names.push()
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
    super("Beast", location, challengeRating, "Bad Memories", color, size, id);
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
    super("Human-like", location, challengeRating, "Chaos", color, size, id);
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

// const newGhost = new Ghost(
//   "Casper",
//   "18005882300 Empire",
//   10,
//   "Sean",
//   "transparent",
//   "medium",
//   "1",
//   "unknown",
//   Signs.WRITING
// );
// newGhost.updateMonster("phantom");
// newGhost.printInfo();

// const newBeast = new Beasts(
//   "Amalgamate",
//   "18005882300 Empire",
//   7,
//   "Bad Memories",
//   "white",
//   "small",
//   "2",
//   "blob",
//   "underground",
//   ["faces", "bad memories", "toby fox"]
// );
// newBeast.printInfo();

// const newHuman = new Humanoid(
//   "Jevil",
//   "18005882300 Empire",
//   10,
//   "Chaos",
//   "blue and black",
//   "medium",
//   "J",
//   "Darkener",
//   7,
//   complience.neutral
// );
// newHuman.printInfo();
