(()=>{
    let count = 0;

    const  increment=()=> {
        count++;
        console.log("Count: " + count);
    }
    const decrement=()=> {
        count--;
        console.log("Count: " + count);
    }
    console.log("Initial Count: " + count);
    // increment();
    increment();
    decrement();
})();