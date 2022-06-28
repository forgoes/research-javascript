


export function tryNotChain() {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(1), 1000);
    });

    promise.then(function(result) {
        console.log(result); // 1
        // @ts-ignore
        return result * 2;
    });

    promise.then(function(result) {
        console.log(result); // 1
        // @ts-ignore
        return result * 2;
    });

    promise.then(function(result) {
        console.log(result); // 1
        // @ts-ignore
        return result * 2;
    });
}

// If return a Promise in Promise, the next .then() will be the inner Promise's then()
export function tryPromiseChain() {
    let promise = new Promise(function(resolve, reject) {
        console.log("tryPromiseChain executor start 1")
        setTimeout(() => resolve(1), 1000);
        console.log("tryPromiseChain executor end 1")
    }).then(result=>{
        console.log("tryPromiseChain get from promise 1:", result)
        return new Promise(function (resolve, reject) {
            console.log("tryPromiseChain executor start 2")
            setTimeout(()=>{
                resolve(2)
            }, 1000)
            console.log("tryPromiseChain executor end 2")
        })
    }).then(result=>{
        console.log("tryPromiseChain get from promise 2:", result)
        return new Promise(function (resolve, reject) {
            console.log("tryPromiseChain executor start 3")
            setTimeout(()=>{
                resolve(3)
            }, 1000)
            console.log("tryPromiseChain executor start 3")
        })
    }).then(result=>{
        console.log("tryPromiseChain get from promise 3:", result)
    }).catch(error=>{
        // will catch all errors include inner Promise's error
        console.log("tryPromiseChain catch", error)
    });
}
