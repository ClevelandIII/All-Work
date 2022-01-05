const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [string, number];
} = {
  name: "Jimmy",
  age: 40,
  hobbies: ["soccer", "cooking"],
  role: ["admin", 0],
};

//! You can access a tuple anytime to change values
//* person.role = ['student', 1], person.role[1] = 3
//! Changing the value will check the tuple
//* person.role = ['steven', 2], person.role[0] = 3
//! The push method does not check type ot tuple
//* person.role.push('something else'), now there are three values in person.role instead of 2. Somewhat goofy but this needs to be noted

enum MadeBy {
  "IKEA",
  "COSCO",
  "AMAZON",
}

const product: {
  name: string;
  price: number;
  tags: string[];
  manufacture: MadeBy;
} = {
  name: "Chair",
  price: 40,
  tags: ["sale", "antique"],
  manufacture: MadeBy.AMAZON
};
