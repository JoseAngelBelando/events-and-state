// - Crea un componente Square, dentro tendrás un div de 200px x 200px de color rojo (o el que más te guste). Añade un botón al componente y haz que al pulsarlo cambie de color, de rojo a verde por ejemplo, si vuelves a pulsar volverá al color rojo y así con cada pulsación del botón. Pista: Necesitas un estado que cambie entre true y false

import { useState } from 'react';
import { StyledSquare} from './square.styles';

const Square = () => {
    const [color, setColor] = useState('red')
    return (
        <>
            <StyledSquare color={color}/>
            
            <button onClick={()=>chanceColor(color,setColor)}>Change Color</button>
        </>
        );
};

const chanceColor = (color, setColor)=>{
    
    setColor(Color => (Color ==='red' ? 'blue' : 'red'))
}
export default Square;