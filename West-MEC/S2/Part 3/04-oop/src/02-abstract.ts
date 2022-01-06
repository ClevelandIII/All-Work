abstract class Department {
  static fiscalYear = 2022;
  protected employees: string[] = [];

  // name: string
  constructor(public name: string, protected readonly id: string) {
    // this.name = name
  }

  //every child class must have a describe class becasue it is an abstract describe
  abstract describe(): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.id);
    console.log(this.employees.length + " employees");
    console.log(...this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super("IT", id);
  }
  describe(): void {
    console.log(`IT Department - ID ${this.id}`);
  }
  setAdmin(name: string) {
    this.admins.push(name);
  }

  getAdmin() {
    console.log(this.admins);
    return this.admins;
  }

  removeAdmin(name: string) {
    this.admins = this.admins.filter((admin) => admin != name);
  }
}

const IT = new ITDepartment("D2", ["Jimmy"]);
IT.addEmployee("Jimmy");
IT.addEmployee("Jammy");

IT.printEmployeeInfo();

const IT2 = new ITDepartment("D3", ["Tammy"]);
IT2.addEmployee("Tammy");

IT2.printEmployeeInfo();

class Acounting extends Department {
  constructor(id: string, public profits: number[]) {
    super("Accounting", id);
  }
  describe(): void {
    console.log(`Accounting Department - ID ${this.id}`);
  }

  getProfit() {
    console.log(this.profits);
    return this.profits;
  }

  addProfit(profit: number) {
    this.profits.push(profit);
    return this.profits;
  }

  removeLastProfit() {
    this.profits.splice(-1, 1)
    return this.profits;
  }
}

// let array = [1, 2, 3, 4, 5, 6, 7, 8];

// let newArray = array.splice(-1, 1);

// console.log(newArray);
