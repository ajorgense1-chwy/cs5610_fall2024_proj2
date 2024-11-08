import { useState } from 'react';
import './WhackAMoleGame.css';
import MoleCell from './MoleCell';
import { useContext } from 'react';
import { WhackAMoleContext } from './WhackAMoleGameProvider';

const ROW_LENGTH = 4;

const boardGameStatus = [
    [false, true],
    [false, false],
]

export default function WhackAMoleGame() {
    const globalProps = useContext(WhackAMoleContext);
    console.log(globalProps.gameBoardState);
    const boardGameState = globalProps.gameBoardState;
    const isGameOver = globalProps.isGameOver

    let rowComponents = [];

    let winningComponent = undefined;
    if(isGameOver) {// winning condition met
        winningComponent = (<h1>You win!</h1>)
    }

    for(let i = 0; i <= 1; i++) {
        const singleRowComponent = [];

        for(let j = 0; j <= 1; j++) {
            const key = i + '-' + j;
            const isHidingMole = boardGameState[key];

            const cell = (<MoleCell row={i} column={j} isHidingMole={isHidingMole}/>)
            singleRowComponent.push(cell);
        }

        const styledRowComponent = (<div className='row'>
            {singleRowComponent}
        </div>)

        rowComponents.push(styledRowComponent);
    }

    return (<div>
        {rowComponents}
        {winningComponent}
    </div>)
}