export abstract class DioAccount {
    //readonly deixa a propriedade imutável
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true
  
    constructor(name: string, accountNumber: number) {
      this.name = name
      this.accountNumber = accountNumber
    }
  
    deposit(value: number): void {
      if (this.validateStatus()) {
        this.balance += value
      }
    }
  
    withdraw(value: number): void {
      if (this.validateStatus() && this.balance >= value) {
        this.balance -= value
      } else {
        this.validateThrow()
      }
    }
  
    getBalance(): void {
      console.log(this.balance)
    }
  
    getName(): string {
      return this.name
    }
  
    private validateStatus(): boolean {
      if (this.status) {
        return this.status
      }
  
      throw new Error("Conta inválida")
    }
  
    private validateThrow(): void {
      throw new Error("Saldo insuficiente")
    }
  }