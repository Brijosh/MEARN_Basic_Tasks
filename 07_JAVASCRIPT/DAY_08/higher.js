const callback= (n) =>{
    return n**3;
}

function cube(callback,n) {
    return callback(n)*n;
    
}

// console.log(cube(callback,3));

// function sayHello() {
//     console.log('Hello');
// }
// setInterval(sayHello, 1000)


function sayHello() {
    console.log('Hello');
}
setTimeout(sayHello, 1000)


