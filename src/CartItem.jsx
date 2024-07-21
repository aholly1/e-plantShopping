{/* React Framework, Importing hooks, Slices, & CSS DOC */}
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

{/*Funcitons required for Shopping Cart functionality */}

const CartItem = ({ onUpdateCart, onContinueShopping }) => {
  {/*Variable that retrieves the cart item from store*/}
  const cart = useSelector(state => state.cart.items);
  {/*init dispach hook*/}
  const dispatch = useDispatch();

  {/*Calculates the total cost by retrieving the items quanity from the item list*/}
    const calculateTotalAmount = () => {
       return cartItems.reduce((total, item) => total + (parseFloat(item.cost.replace('$', '')) * item.quantity), 0).toFixed(2);
   };

{/*returns the total cost by retrieving the items quantity and appending the '$'*/}
   const calculateTotalCost = (cost, quantity) => {
       return (parseFloat(cost.replace('$', '')) * quantity).toFixed(2);
   };

{/*dispaches an action that finds the requested item in the items list and increments its quantity*/}
   const handleIncrement = (item) => {
       dispatch(updateQuantity({ name: item.name, quantity: 1 }));
   };

{/*uses an if else statement that if the requested item's quantity is greater than one dispaches an action that decrements the items quantity
else removes the item from the list of items.
*/}
   const handleDecrement = (item) => {
       if (item.quantity > 1) {
           dispatch(updateQuantity({ name: item.name, quantity: -1 }));
       } else {
           dispatch(removeItem({ name: item.name }));
       }
   };

{/*removes an item from the list of items*/}
   const handleRemove = (item) => {
       dispatch(removeItem({ name: item.name }));
   };

{/*Will implement when I have time*/}
   const handleCheckout = () => {
       alert('Functionality to be added for future reference');
   };


{/*return that creates the cart:
basically traverses though the list of items that are inside the cart and creates components for each item.

*/}
  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


