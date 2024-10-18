import { useState } from "react";



const Counter = () => {
    const [value, setValue] = useState(0);

    return (
        <>
            <h1>{value}</h1>
            <button onClick={()=> increment(value, setValue)}>+1</button>
            <button onClick={()=> reset( setValue)}>Reset</button>
            <button onClick={()=>decrement(value, setValue)}>-1</button>
        </>
    );
};

const increment = (value, setValue) => {
    setValue(value +1);
}

const reset =( setValue) => {
    setValue(0)
}

const decrement =(value, setValue) =>{
    setValue(value -1)
}
export default Counter;