import React from 'react'
import { useStateValue } from '../StateProvider'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://www.friends-united.ca/wp-content/uploads/2018/03/Jasyn-Lucas-Yes-1600x200.jpg" alt="" />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your shopping cart is empty</h2>
                        <p>You have bo items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                    </div>
                ) : (
                        <div className="checkout_title">
                            <h2>your shopping basket</h2>
                            {/* List out all of the Checkout Products */}
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
            </div>

            {basket.length > 0 && (
                <div className="checkout_right">
                     <h1>Subtotal</h1>
                     <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout
