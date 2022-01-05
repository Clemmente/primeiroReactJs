import { useState } from 'react';

const Card = () => {
    
    const [valor, setValor] = useState(0)
    
    function Adicionar (){
        setValor(valor + 1)
    }
    function Remover (){
        setValor(valor - 1)
    }
    
 return (
    <div className="Card">
     <div className="Card-header">
         Meu Primeiro Card
     </div>
     <div className="Card-body">
          <button 
         type="button" 
         className="btn btn-success"
         onClick={Adicionar}
         >
             Adicionar
         </button>
         <button 
         type="button" 
         className="btn btn-danger"
         onClick={Remover}
         >
             remover
         </button>
          <p>{valor}</p>
     </div>
    </div>
)
}
export default Card;
