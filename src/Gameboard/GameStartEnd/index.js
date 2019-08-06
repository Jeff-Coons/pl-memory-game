import React from 'react';

import { Start, Button } from './Start';

export default function GameStartEnd(props) {
    console.log('props: ', props);
    const gameEnded = props.gameState === 'ended';

    return (
        <Start>
            {gameEnded && 
                <h2>Game Over</h2>
            }

            <Button 
                onClick={ !gameEnded ? props.startGame : props.endGame }
            >
                {!gameEnded ? 'Start Game' : 'Reset Game'}
            </Button>
        </Start>
    );
}