function calledfuction(a, callback) {
    function timeoutfunction() {
        if (a < 10) {
            let err = new Error("less");
            callback(err);
        } else {
            callback(undefined, 2 * a);
        }
    }

    setTimeout(timeoutfunction, 2000);
    return a;
}

function callerfunction() {
    let callbackfunction = (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`data ${data}`);
        }
    };

    let value = calledfuction(15, callbackfunction);
    console.log(value);
}
callerfunction();
