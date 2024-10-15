import { StyledSquare} from './square.styles';

const Square = () => {
    return (
        <>
            <StyledSquare />
            
            <button onClick={()=>chanceColor(color)}>Change Color</button>
        </>
        );
};

const chanceColor = (color)=>{
    
}
export default Square;