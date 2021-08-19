import React from "react";
import "../styles/Cart.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils";
import { addToCart, decreaseFromCart, removeFromCart } from "../actions";
import { useDispatch } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Cart = ({ setShowCart }) => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  if (cartItems.cart.length === 0) {
    return (
      <div className="cart">There are currently no items in your cart</div>
    );
  }

  const DELIVERY_CHARGE = 250;

  const handleIncrease = (e, product) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };

  const handleDecrease = (e, product) => {
    e.preventDefault();
    dispatch(decreaseFromCart(product));
  };

  const handleRemove = (e, product) => {
    e.preventDefault();
    dispatch(removeFromCart(product));
  };

  return (
    <div className="cart">
      <button className="close-cart" onClick={() => setShowCart(false)}>
        Close Cart
      </button>
      <h1 className="cart__heading">Your Bag</h1>
      <div className="cart__list">
        <TransitionGroup component={null}>
          {cartItems.cart.map((product) => {
            return (
              <CSSTransition key={product.id} timeout={300} classNames="item">
                <div key={product.id} className="cart__list__item ">
                  <Link to={`/product/${product.id}`}>
                    <div
                      className="cart__list__item__image"
                      style={{ background: `url(${product.imageURL[0]})` }}
                    ></div>
                  </Link>
                  <div className="cart__list__item__detail">
                    <p className="cart__list__item__detail__name">
                      {product.name}
                    </p>
                    <p className="cart__list__item__detail__quantity">
                      Quantity: {product.quantity}
                    </p>
                    <button
                      onClick={(e) => handleIncrease(e, product)}
                      className="increase-quantity"
                    >
                      +
                    </button>
                    <button
                      onClick={(e) => handleDecrease(e, product)}
                      className="decrease-quantity"
                    >
                      -
                    </button>
                  </div>
                  <div className="cart__list__item__price">
                    {formatCurrency(product.price * product.quantity)}
                    <button
                      className="remove-cart"
                      onClick={(e) => handleRemove(e, product)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
      <div className="cart__price-details">
        <table>
          <tr>
            <td>subtotal</td>
            <td>{formatCurrency(cartItems.totalPrice)}</td>
          </tr>
          <tr>
            <td>delivery</td>
            <td> {formatCurrency(DELIVERY_CHARGE)}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{formatCurrency(cartItems.totalPrice + DELIVERY_CHARGE)}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Cart;
