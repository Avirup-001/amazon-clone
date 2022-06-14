import React from 'react'
import './Product.css'
import { Rating } from '@material-ui/lab';
import { useStateValue } from "./StateProvider";


function Product({ id, title, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
        <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
            <Rating name="half-rating-read" defaultValue={rating} precision={0.1} readOnly />
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product