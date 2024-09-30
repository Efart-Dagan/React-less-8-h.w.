import './Cell.css';

function Cell(props){
    return (<div className="singleCell"
     onClick={()=>{props.playTurn(props.pos)}}>
        {props.value}
    </div>);
}
export default Cell;