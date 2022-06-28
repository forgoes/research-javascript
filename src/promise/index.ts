import {tryNewPromise, tryReject, tryMultipleResults, tryThen, tryFinally} from "./promise";
import {tryNotChain, tryPromiseChain} from "./chain";

export {}

function main() {
    tryNewPromise()

    tryReject()

    tryMultipleResults()

    tryThen()

    tryFinally()

    tryNotChain()

    tryPromiseChain()
}

main()
