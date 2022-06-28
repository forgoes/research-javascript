const axios = require('axios');


export function tryForLoop() {
    let sleeps = [1, 2, 3, 4, 5]

    let r = sleeps.map(i => {
        return (async () => {
            let res = await axios(`http://127.0.0.1:8080/sleep/${i}`)
            console.log(res.data)
            return res.data
        })()
    })

    console.log(r)
}

export async function tryPromiseAll() {
    let sleeps = [1, 2, 3, 4, 5]

    let ps = sleeps.map(async (i) => {
        try {
            let res = await axios(`http://127.0.0.1:8080/sleep/${i}`)
            console.log(res.data)
            if(i===3 || i===4){
                throw new Error("hi")
            }
            return res.data
        } catch (e) {
            return e
        }
    })

    console.log(ps)

    await Promise.all(ps).then(result=>{
        console.log("result:", result)
    }).catch(error=>{
        console.log("error:", error)
    })

    console.log("finished")
}

export async function tryReturnPromiseAll() {
    let sleeps = [1, 2, 3, 4, 5]

    let ps = sleeps.map((i) => {
        return async function(){
            let res = await axios(`http://127.0.0.1:8080/sleep/${i}`)
            console.log(res.data)
            return res.data
        }()
    })

    console.log(ps)

    let res = await Promise.all(ps).then(result=>{
        console.log("result:", result)
    }).catch(error=>{
        console.log("error:", error)
    })

    console.log("finally:", res)
}

export async function tryCatchPromiseAll() {
    let sleeps = [1, 2, 3, 4, 5]

    let ps = sleeps.map(async (i) => {
        try {
            let res = await axios(`http://127.0.0.1:8080/sleep/${i}`)
            console.log(res.data)
            if(i===3){
                throw new Error("hi")
            }
            return res.data
        } catch (e) {
            return e
        }
    })

    console.log(ps)

    let res = await Promise.all(ps).then(result=>{
        console.log("result:", result)
    }).catch(error=>{
        console.log("error:", error)
    })

    console.log("finally:", res)
}


export async function tryMap() {
    let sleeps = [1, 2, 3, 4, 5]

    let ps = sleeps.map(async (i) => {
        try {
            let res = await axios(`http://127.0.0.1:8080/sleep/${i}`)
            console.log(res.data)
            return res.data
        } catch (e) {
            return e
        }
    })

    console.log(ps)

    console.log("finished")
}

// can not block in I/O even want to
export async function tryForEach() {
    let sleeps = [1, 2, 3, 4, 5]

    sleeps.forEach((i) => {
        (async () => {
            try {
                let res = await axios(`http://127.0.0.1:8080/sleep/${i}`)
                console.log(res.data)
                return res.data
            } catch (e) {
                return e
            }
        })()
    })

    console.log("finished")
}

export async function tryCatchPromiseAllTwo() {
    let sleeps = [1, 2, 3, 4, 5]

    let ps = sleeps.map(async (i) => {
        console.log("run start")
        let res = await axios(`http://127.0.0.1:8080/sleep/${i}`)
        console.log(res.data)
        if(i===3){
            throw new Error("hi")
        }
        console.log("run stop")
        return res.data
    })

    console.log(ps)

    let res = await Promise.all(ps).then(result=>{
        console.log("result:", result)
    }).catch(error=>{
        console.log("catch error:", error)
    })

    console.log("finally:", res)
}


export async function trySyncForLoop() {
    let sleeps = [1, 2, 3, 4, 5]

    for (let s of sleeps) {
        let res = await axios(`http://127.0.0.1:8080/sleep/${s}`)
        console.log(res.data)
        if(s===3){
            throw new Error("hi")
        }
    }

    console.log("finally")
}
