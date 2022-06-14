import React from 'react'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from "./Reducer";
import { useNavigate } from "react-router-dom";
import './Subtotal.css'



function Subtotal() {
    var CurrencyFormat = require('react-currency-format');
    const history = useNavigate();
    const [{ basket }, dispatch] = useStateValue();
    
  return (
    <div className='subtotal'>
        <CurrencyFormat 
            decimalScale={2}
            value={getBasketTotal(basket)} // Part of the homework
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>   
                    </p>  
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </>
            )}
            />

            <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal