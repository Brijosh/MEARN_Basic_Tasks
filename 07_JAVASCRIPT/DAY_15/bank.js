class Bank
{
    constructor(accNo,name,phNo,balance)
    {
        this.userAcc=accNo;
        this.userName=name;
        this.userContact=phNo;
        this.userBalance=balance;
    }
    amountDeposit(amount)
    {
        this.userBalance+=amount;
        console.log(`Amount credited : ${amount}`);
        console.log(`Balance : ${this.userBalance}\n`);

    }
    amountWithdraw(amount)
    {
        ;
        this.userBalance>=amount?console.log(`Amount debited : ${amount} \nBalance : ${this.userBalance-=amount}`):console.log(`Insufficent Funds`);
    }
    balanceEnquery()
    {
        console.log(`\nBalance : ${this.userBalance}`);
    }
}
details= new Bank(1001,"Ramesh",9895490488,500)
details.amountDeposit(500);
details.amountWithdraw(100);
details.balanceEnquery();