// function calledfuction() {
//     let a = 10;

//     function timeoutFunction() {
//         a = 20;
//         console.log(a);
//         return a;
//     }
//     setTimeout(timeoutFunction, 2 * 1000);
// }

// function callerfunction() {
//     let value = calledfuction();
//     console.log(value);
// }

// callerfunction();
//problem - we are not getting 20 in callerfunction
//solution1 : callback - oldest
//solution2 : promise
//solution3 : async/await
/*
    callback call as an argument

*/

function calledfuction(a, callback) {
    let a = 10;

    function timeoutFunction() {
        if (a < 10) {
            let err = new Error("less");
            callback(err);
        } else {
            callback(undefined, a);
        }
        a = 20;
        console.log(a);
        return a;
    }
    setTimeout(timeoutFunction, 2 * 1000);
}

function callerfunction() {
    let value = calledfuction(15);
    console.log(value);
}

callerfunction();
