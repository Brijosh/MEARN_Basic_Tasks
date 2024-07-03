// TASK 2 : 
accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:6000,msg:'ebil', mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi', mode:'neft'  
            },
            {
                to:1003,amount:1000,msg:'recharge', mode:'phonepe'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary', mode:'gpay'
            },
            {
                to:1001,amount:5000,msg:'ebil', mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi', mode:'neft'  
            },
            {
                to:1003,amount:1000,msg:'recharge', mode:'phonepe'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebil', mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi', mode:'neft'  
            },
            {
                to:1003,amount:1000,msg:'recharge', mode:'phonepe'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:7000,msg:'ebil', mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi', mode:'neft'  
            },
            {
                to:1000,amount:1000,msg:'recharge', mode:'phonepe'
            },
        ]
    }
]



//1 total number of accounts
// console.log(`Total number of accounts = ${accounts.length}`);


//2 print account number whose account type is savings
// accounts.map(acc=> acc.ac_type=='savings'?console.log(acc.acno):null);


//3  print the balance of account number 1000
// accounts.map(acc=> acc.acno==1000?console.log(acc.balance):null);


//4 print all gpay transactions
// for(let acc of accounts)
//     {
//         let transfer=acc.transaction
//         transfer.map(details=> details.mode=='gpay'?console.log(details):null)
//     }



//5 print all transactions whose amount > 5000
// for(let acc of accounts)
//         {
//             let transfer=acc.transaction
//             transfer.map(details=> details.amount>5000?console.log(details):null)
//         }


//6 print all credit transactions of account 1002
// for(let acc of accounts)
//         {
//             let transfer=acc.transaction
//             transfer.map(details=> details.to==1002?console.log(details):null)
//         }

//7 print all debit transactions of account 1002
// accounts.map(acc=> acc.acno==1002?console.log(acc.transaction):null);


//8 print the highest balance account details
// console.log(accounts.reduce((a,b)=> a.balance>b.balance?a:b)); 


//9 print transaction history of 1002
// accounts.map(acc=> acc.acno==1002?console.log(acc.transaction):null);


//10 print transaction history of account 1003
accounts.map(acc=> acc.acno==1003?console.log(acc.transaction):null);
