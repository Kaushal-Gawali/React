import { useState } from "react";

const Counter_App = () => {

    const [count, setCount] = useState(0);

    return (
        <div className="counter-app">

            <button onClick={()=>{
                setCount(count=>count+1);
            }}>+</button>

            <p>{count}</p>

            <button onClick={()=>{
                setCount(count=>count-1);
            }}>-</button>
        </div>
    )
}

export default Counter_App;