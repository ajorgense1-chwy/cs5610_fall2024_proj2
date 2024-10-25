import { useContext, useState } from 'react';
import './BorderText.css';
import { CounterContext } from './CounterProvider';

/*
props = {
    borderTextValue: number;
    coolValue: array;
    onClickFunction: function
}


*/

export default function BorderText(props) {

    const [countState, setCountState] = useContext(CounterContext);

    const [isUnderlinedState, setIsUnderlinedState] = useState(false);

    const textValue = props.borderTextValue;


    function setIsUnderline() {
        setCountState(countState + 1)
        setIsUnderlinedState(!isUnderlinedState);
    }

    let className = 'border';
    if (isUnderlinedState) {
        className = 'border textUnderline'
    }

    return (
        <div className={className} onClick={setIsUnderline}>

            {textValue}

        </div>
    )

}