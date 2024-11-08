import { createContext, useEffect, useState } from "react";


export const WhackAMoleContext = createContext();


/*
    <WhatAMoleGameProvider>
        <WhackAMoleGame>
            <MoleCell />
            <MoleCell />
            <MoleCell />
            <MoleCell />
        </WhackAMoleGame>
    </WhatAMoleGameProvider

*/

export function WhatAMoleGameProvider(props) {

    const [gameBoardState, setGameBoardState] = useState({});
    const [gameOverState, setGameOverState] = useState(false);

    function checkIfGameIsOver(row, column) {
        const foundMole = gameBoardState[row + '-' + column]
        console.log(foundMole)
        if(foundMole) {
            setGameOverState(true);
        }

    }

    useEffect(() => {
        const gameState = {};
        for(let i = 0; i <= 1; i ++) {
            for(let j = 0; j <= 1; j ++) {
                gameState[i + '-' + j] = false;
            }
        }

        let selectedColumn =  Math.floor(Math.random() * 2);
        let selectedRow =  Math.floor(Math.random() * 2);
        gameState[selectedRow + '-' + selectedColumn] = true;
        setGameBoardState(gameState);
    }, []);

    const globalProps = {
        gameBoardState: gameBoardState,
        checkIfGameIsOver: checkIfGameIsOver,
        isGameOver: gameOverState
    }

    return <WhackAMoleContext.Provider value={globalProps}>
        {props.children}
    </WhackAMoleContext.Provider>

}