import { createContext, useState } from "react";


export const CounterContext = createContext();

export function CounterProvider(props) {

    const [countState, setCountState] = useState(0);


    return (
        <CounterContext.Provider value={[countState, setCountState]}>
            {props.children}
        </CounterContext.Provider>

    )

}





