class Bank
{
db={
    1000:{"acno":1000, "username":"Neer", "password":1000,"balance":5000,transaction:[]},
    1001:{"acno":1001, "username":"Laisha", "password":1001,"balance":5000,transaction:[]},
    1002:{"acno":1002, "username":"Vyom", "password":1002,"balance":3000,transaction:[]},
}

//1 create a function for validate account number. To validate account check
//if account number in db return true otherwise return false

//2 create a function for authenticate user using account number and password 
//if both are in db then print 'access granted' otherwise print 'permission denied'
//authenticated(acno,pswd)?access granted else permission denied

validate(accno)
{
    return accno in this.db;
}
auth(accno,pswd)
{
   let account=this.db[accno];
   if(this.validate(accno) && account.password===pswd)
    {
       return `Access granted`;
    }
    else
    {
        return `Permission denied`;
    }
}

getBalance(accno)
{
    if(accno in this.db)
    {
        let account=this.db[accno];
        return `Balance : ${account.balance}`;
    }
    else
    {
        return `Account not found`
    }
}

fundTransfer(fromacno,toacno,amount)
{
    if(fromacno in this.db && toacno in this.db)
    {
        let fromacc=this.db[fromacno];
        let toacc=this.db[toacno];
        if(fromacc.balance>=amount)
        {
            fromacc.balance-=amount;
            toacc.balance+=amount;
            console.log(`Transaction successful`);
        }
        else
        {
            console.log(`Insufficent funds`);
        }
    }
    else
    {
        console.log(`Account not found - Transfer failed`);
    }

}

}
bnk= new Bank();
console.log(bnk.validate(1000)); 
console.log(bnk.auth(1400,1000));
console.log(bnk.getBalance(1001));
bnk.fundTransfer(1000,1002,7000);
