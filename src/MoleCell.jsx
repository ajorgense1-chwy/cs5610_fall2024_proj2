import { useContext, useState } from 'react';
import './MoleCell.css';
import { WhackAMoleContext } from './WhackAMoleGameProvider';

/*
    props = {
        row: number,
        column: number,
        isHidingMole: boolean,
    }
*/
export default function MoleCell(props) {
    const globalProps = useContext(WhackAMoleContext);

    const checkIfGameIsOverFn = globalProps.checkIfGameIsOver;

    const row = props.row;
    const column = props.column;
    const isHidingMole = props.isHidingMole;

    const [className, setClassName] = useState('square');


    function onMousePress(x, y) {
        // const key = x + '-' + y;


        if(isHidingMole) {
            setClassName('square hit');
        } else {
            setClassName('square missed');
        }

        checkIfGameIsOverFn(row, column);
    }

    return (<div className={className} onClick={() => onMousePress()}>Placeholder</div>);

}