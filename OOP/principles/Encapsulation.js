// Encapsulation involves bundling data (properties) and 
// methods (functions) that operate on the data into a single unit (object or class).
// JavaScript supports encapsulation 
// by using closures and the this keyword to manage access to object properties.

class BankAccount {
    constructor(balance) {
      this._balance = balance; // Using underscore convention to indicate a private property
    }
  
    deposit(amount) {
      this._balance += amount;
    }
  
    withdraw(amount) {
      if (amount <= this._balance) {
        this._balance -= amount;
      } else {
        console.error("Insufficient balance.");
      }
    }
  
    getBalance() {
      return this._balance;
    }
  }
  
  const account = new BankAccount(1000);
  account.deposit(500);
  account.withdraw(200);
  console.log(account.getBalance()); // Output: 1300
  