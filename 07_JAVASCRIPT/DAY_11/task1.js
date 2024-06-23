// Nested array data for customers - details Id, name, place, email, amount
const customerData = [
    [3000, 'John Doe', 'New York', 'john.doe@email.com', 1000],
    [3001, 'Alice Smith', 'Los Angeles', 'alice.smith@email.com', 1200],
    [3002, 'Bob Johnson', 'Chicago', 'bob.johnson@email.com', 800],
    [3003, 'Emily Davis', 'San Francisco', 'emily.davis@email.com', 1500],
    [3004, 'David Lee', 'Houston', 'david.lee@email.com', 1100],
    [3005, 'Sophia Chen', 'Miami', 'sophia.chen@email.com', 900],
    [3006, 'Michael Wilson', 'Seattle', 'michael.wilson@email.com', 1300],
    [3007, 'Emma Brown', 'Dallas', 'emma.brown@email.com', 950],
    [3008, 'Daniel Miller', 'Boston', 'daniel.miller@email.com', 1050],
];

// Questions for the customer data
// 1. Print the names of all customers.
// for(i of customerData)
//     {
//         console.log(i[1]);
//     }



// 2. How many customers are there in the dataset?
// console.log(`No of customer : ${customerData.length}`);


// 3. Provide details for customers from the city "Chicago."
// for(i of customerData)
//     {
//         if(i[2]=='Chicago')
//             {
//                 console.log(i);
//             }
//     }


// 4. Display details for customers with a transaction amount greater than 1000.
// for(i of customerData)
//     {
//         if(i[4]>1000)
//             {
//                 console.log(i);
//             }
//     }
// 5. Retrieve the details of the customer named "David Lee."
// for(i of customerData)
//         {
//             if(i[1]=='David Lee')
//                 {
//                     console.log(i);
//                 }
//         }
// 6. Sort customers in descending order based on their transaction amount.

// console.log(customerData.sort((t1,t2)=>t2[4]-t1[4]));
// 7. Arrange customers in ascending order based on their customer ID.
// console.log(customerData.sort((c1,c2)=>c1[0]-c2[0]));

// 8. How many customers have a transaction amount between 900 and 1100?

// for(i of customerData)
//         {
//             if(i[4]>900 && i[4]<1100)
//                 {
//                     console.log(i);
//                 }
//             }


// 9. Provide details for customers who are not from New York.
// for(i of customerData)
//     {
//         if(i[2]!='New York')
//             {
//                 console.log(i);
//             }
//     }

// 10. Print the average transaction amount for all customers.
sum=0;
for(i of customerData)
    {
        sum+=i[4]
    }
console.log(`Average of transactions : ${Math.ceil(sum/customerData.length)}`);