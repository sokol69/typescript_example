// class BaseFund {
//   balance: number;
//   protected previousBalane: number;
//   private withdrawal: number;

//   public constructor(
//       balance: number,
//       previousBalane: number,
//       withdrawal: number,
//   ) {
//       this.balance = balance;
//       this.previousBalane = previousBalane;
//       this.withdrawal;
//   }

//   public getValue(): number {
//       return this.previousBalane - this.balance;
//   }

//   protected getwithdrawal(): number {
//       return this.withdrawal;
//   }
// }

// class Fund extends BaseFund {
//   public constructor(balance: number, previousBalane: number, withdrawal: number) {
//       super(balance, previousBalane, withdrawal);
//   }
// }

// const testFund = new BaseFund(100, 200, 50);
