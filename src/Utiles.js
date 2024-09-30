export function isWin(board) {
    for (let i = 0; i < 9; i += 3) {
        if (board[i] && board[i] == board[i + 1] && board[i] == board[i + 2])
            return true;
    }

    for (let i = 0; i < 3; i++) {
        if (board[i] && board[i] == board[i + 3] && board[i] == board[i + 6])
            return true;
    }

    if (board[0] && board[4] == board[8] && board[0] == board[4] ||
        board[2] && board[2] == board[4] && board[4] == board[6])
        return true;
    return false;
}

export function gameOver(board){
    return board.every(item=>item);
}