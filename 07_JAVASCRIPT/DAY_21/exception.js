// expr='/23*76+97';
// console.log(eval(expr));
// console.log('Data transmitted: '+eval(expr));

// try catch finnaly
expr='/23*76+97';
try{
    console.log(`try block`);
    console.log(eval(expr));
}
catch{
    console.log(`Catch Block`);
    console.log(`Error`);
    expr='23*76+97'
    console.log(eval(expr));
}
finally{
    console.log(`Finally Block`);
    console.log(`Always Executed`);
}
console.log(`Data Transmitted: `+eval(expr));