//importar a classe
import { PeopleAccount } from './class/PeopleAccount'
import {CompanyAccount} from './class/CompanyAccount'
import {PremiumAccount} from './class/PremiumAccount'
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Paulo', 10)
const companyAccount: CompanyAccount = new CompanyAccount('Dio', 20)
const premiumAccount: PremiumAccount = new PremiumAccount('Vitim', 10)

console.log(peopleAccount.getName())
peopleAccount.getBalance()
peopleAccount.deposit(20)
peopleAccount.getBalance()
peopleAccount.withdraw(10)
peopleAccount.getBalance()

console.log(companyAccount.getName())
companyAccount.getLoan(10)
companyAccount.getBalance()
companyAccount.withdraw(10)
companyAccount.getBalance()

console.log(premiumAccount.getName())
premiumAccount.deposit(10)
premiumAccount.getBalance()
premiumAccount.withdraw(10)
premiumAccount.getBalance()


