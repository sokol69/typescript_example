// simple types
const isLoading: boolean = false;
const price: number = 100;
const message: string = 'some message';

// arrays
const names: string[] = ['firstName', 'lastName'];

const ids: Array<number|string> = [1, '2', 3, '4', 5];

// tuple
const user: [string, number] = ['user name', 89044941234];

// enum
enum documents {
  FETCH = 'DOCUMENTS_FETCH',
  DOWNLOAD = 'DOCUMENTS_DOWNLOAD',
  UPDATE = 'DOCUMENTS_UPDATE',
};

// interfaces
interface IFund {
  readonly id: number,
  name: string,
  period?: string,
  valuation: {
    amount: number,
    date: string,
    status: string,
  }
}

const myFund: IFund = {
  id: 124,
  name: 'Test Fund',
  valuation: {
    amount: 100,
    date: '01/01/2020',
    status: 'approved',
  }
};