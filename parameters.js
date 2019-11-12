let add = function( num1 , num2 ){
    let addition = num1 + num2;
    return (`the result of this addtion ${addition}`);
}
console.log( add(2,1))

// this will be the defualt parameters this will work if you dont pass anything
let logIn = function(user = 'admin', pass = 'password'){
    var username = user;
    var password = pass;
    return (`Youre username is ${username} and your Password is ${password}`);
}
 console.log(logIn())
