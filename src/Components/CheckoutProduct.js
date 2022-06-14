import React from 'react';
import './CheckoutProduct.css'
import { Rating } from '@material-ui/lab';
import { useStateValue } from "./StateProvider";

export default function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt=''/>

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    <Rating name="half-rating-read" defaultValue={0} value={rating} precision={0.1} readOnly />
                </div>
                
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                
            </div>
        </div>
    )
}