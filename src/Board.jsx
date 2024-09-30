import { useState } from "react"
import Cell from "./Cell";
import './Board.css'
import { isWin } from "./Utiles"
import { gameOver } from "./Utiles";

function Board() {
    const [boardArr, setBoardArr] = useState(new Array(9).fill(""));
    const [currentPlayer, setCurrentPlayer] = useState("");

    function playTurn(index) {
        if (boardArr[index]|| isWin(boardArr))
            return;
        let copyArr = [...boardArr];
        copyArr[index] = currentPlayer;
        setBoardArr(copyArr);
        setCurrentPlayer(currentPlayer == "⭕" ? "❌" : "⭕");
    }

    return (<div className="entireGame">
        <h1>Tic Tac Toe</h1>
        <h2>The current player is: {currentPlayer == "❌" ? "❌" : "⭕"}</h2>
        <h2>Let's Play 🤩🤩</h2>
        <div className="entireBoard">
            {boardArr.map((item, index) => <Cell playTurn={playTurn} key={index} pos={index} value={item} />)}
        </div>
        <div className="massages">
            {isWin(boardArr) ? <h1>The winner: {currentPlayer == "❌" ? "⭕" : "❌"}</h1> :
                gameOver(boardArr) ? <h1>Game Over... 🥺🥺</h1> : null}
        </div>
    </div>
    );

}

export default Board