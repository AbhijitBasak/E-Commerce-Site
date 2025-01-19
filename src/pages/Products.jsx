import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Products({addToCart}) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data)
        // console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  

  return (
    <div className="product-page container">
      <h1>Products</h1>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button className='btn' onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
