/*
Whenever newing a promise, the executor will immediately run.
See the function below, and both consoles will be printed even if the promise is not invoking .then().
 */

export async function tryNewPromise() {
    new Promise(function(resolve, reject) {
        console.log("tryNewPromise executor start")
        setTimeout(()=> {
            resolve(1)
        }, 1000)
        console.log("tryNewPromise executor end")
    });
}

export function tryReject() {
    new Promise(function(resolve, reject) {
        console.log("tryReject executor start")
        setTimeout(()=> {
            reject(new Error("tryReject Whoops!"))
        }, 300)
        console.log("tryReject executor end")
    }).catch(error=>{console.log("tryReject catch:", error)});
}

export function tryMultipleResults() {
    let p = new Promise(function(resolve, reject) {
        console.log("tryMultipleResults executor start")

        resolve(1)

        reject(new Error("tryMultipleResults Whoops!")) // ignored

        // ignored
        setTimeout(()=> {
            resolve(2)
        }, 300)

        console.log("tryMultipleResults executor end")
    }).then((result)=>{console.log("tryMultipleResults result:", result)}).catch(error=>{console.log("tryMultipleResults catch:", error)});
}

export function tryThen() {
    new Promise((resolve, reject) => {
        console.log("tryThen executor start")

        setTimeout(()=>{
            reject(1)
        }, 300)

        console.log("tryThen executor end")
    }).then(result=>{
        console.log("tryThen result:", result)
    },error=>{
        console.log("tryThen result error:", error)
    }).catch(error=>{
        console.log("tryThen result catch:", error)
    })
}

export function tryFinally() {
    new Promise((resolve, reject) => {
        console.log("tryFinally executor start")

        setTimeout(()=>{
            reject(1)
        }, 300)

        console.log("tryFinally executor end")
    }).finally(()=>{
        console.log("tryFinally finally")
    }).then(result=>{
        console.log("tryFinally result:", result)
    },error=>{
        console.log("tryFinally result error:", error)
        return "hi error"
    }).catch(error=>{
        console.log("tryFinally result catch:", error)
    }).then((result)=>{
        console.log("tryFinally last then:", result)
    }).finally(()=>{
        console.log("tryFinally last finally")
    })
}
