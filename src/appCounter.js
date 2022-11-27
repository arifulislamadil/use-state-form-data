import React, { useState } from 'react';

const AppCounter = () => {
    const [count, setCount] = useState("");
    const [num, setNum] = useState(0)


    const submit = (e) => {
        e.preventDefault()
        console.log(count)
    }
    const handleEvent = (e) => {
        const newNum = num + 1;
        setNum(newNum)
    }
    const handleEventDec = (e) => {
        const newNum = num - 1;
        setNum(newNum)
    }

    const handleEventIncressFive = (e) => {
        if (num % 2 == 0) {
            const newNum = num + 5
            setNum(newNum)
        }

    }
    const resetNum = (e) => {
        setNum(0)
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input onChange={(e) => setCount(e.target.value)} type="text" />
                <button>Submit</button>
            </form>


            <div>
                <h3>{num}</h3>
                <button onClick={handleEvent}>Increment</button>
                <button onClick={handleEventDec}>Decrement</button>
                <button onClick={handleEventIncressFive}>5 incress</button>
                <button onClick={resetNum}>reset</button>
            </div>
        </div>
    );
};

export default AppCounter;