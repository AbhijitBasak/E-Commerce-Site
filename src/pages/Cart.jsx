import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function Cart({ cart }) {
  return (
    <>
      <div className="container">
        <div className="cart-section">
          <div className="cart-container">
            <div className="top-header">
              <h1 className="heading">Shopping Cart</h1>
              <h2 className="item-count">{cart.length} Items</h2>
            </div>
            <hr />
            <div className="product-list">
              <h3>
                Product Details
              </h3>
              <h3>
                Quantity
              </h3>
              <h3>
                Price
              </h3>
              <h3>
                Total
              </h3>
            </div>

            {cart.map((product) => (
              <div className="cart-information" key={product.id}>
                {/* product */}

                <div className="product-img">

                  <img src={product.image} alt={product.title} />

                </div>
                <div className="stockElement">
                  <button className="cartIncrement">+</button>
                  <p className="productQuantity" data-quantity="1">1</p>
                  <button className="cartDecrement">-</button>
                </div>
                <span>${product.price}</span>
                <span>$400.00</span>
              </div>
            ))}




            <button className="remove-to-cart-button">
              <RiDeleteBin6Fill />
            </button>

          </div>

        </div>
      </div>

    </>

  )
}
