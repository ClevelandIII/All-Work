class Example {
  private paycheck = 1000000;

  printPay() {
    console.log(this.paycheck);
  }
  setPay(num: number) {
    this.paycheck = num;
  }
}

const thing1 = new Example();

// thing1.paycheck = 10;
thing1.setPay(40);
thing1.printPay;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class GradeBook {
  static array: number[] = [
    -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85,
    90, 95, 100, 105,
  ];
  static readonly passGrade: number = 65;
  static passing(): number[] {
    const passingGrades = this.array.filter((grade) => {
      return grade >= this.passGrade;
    });
    console.log(passingGrades);
    return passingGrades;
  }
  static average() {
    const sum = this.array.reduce((curr, next) => {
      return curr + next;
    }, 0);
    const avg = sum / this.array.length;
    console.log(avg);

    return avg;
  }
  static addGrade(num: number) {
    // let newGrade: number[] = [num];
    // newGrade = this.array.slice(0);
    // console.log(newGrade);
    this.array.push(num);
    return this.array;
  }
  static remGrade() {
    // let newGrade = this.array.sort((a,b) => a -b)
    // newGrade = this.array.
    // console.log(newGrade);
    const min = Math.min(...this.array);
    const pos = this.array.indexOf(min);
    this.array.splice(pos, 1);
    return this.array;
  }

  static highGrade() {
    const max = Math.max(...this.array);
    console.log(max);
    return max;
  }

//   static invalid() {
//     for (let i = 0; i < this.array.length; i++) {
//       if (i < 0 || i > 100) {
//         this.array.splice(i, 1);
//       } else {
//         console.log(";)");
//       }
//       return this.array;
//     }

//     // this.grades = this.grades.filter((array) => {
//     //     r
//     // })
//   }

  static printGrade() {
    console.log(...this.array);
  }
}
