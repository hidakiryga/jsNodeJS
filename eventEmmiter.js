import { EventEmitter } from "events";

const myEventEmitter = new EventEmitter();

myEventEmitter.on("full", () => {
     console.log("event full is triggered") 
    setTimeout(() => {
        console.log("FULL FULL FULL FULL FULL")
    }, 3000);
    });

    console.log("js normal flow")

    myEventEmitter.emit("full")

    console.log("js normal flow 2nd")
