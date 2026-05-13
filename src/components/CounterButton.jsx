import { useCounterStore } from "../store/counterStore.js"
import Counter from "./Counter.jsx";

function CounterButton(){
    const increase = useCounterStore((state) => state.increase);
    const decrease = useCounterStore((state) => state.decrease);
    const reset = useCounterStore((state) => state.reset);
    return(
        <div>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default CounterButton