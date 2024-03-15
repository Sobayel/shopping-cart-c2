import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import SingleProduct from './SingleProduct';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/public/shoppingCart.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, []);

  const handleCart = (p) => {
    setCart([p])
    const isExist = cart.find((item) => item.id == p.id);
    console.log(isExist)
    if (!isExist) {
      setCart([...cart, p])
    } else {
      alert('already in cart');
    }
  }
  console.log(cart)

  const handleRemove = (id) =>{
    const newCart = cart .filter(item => item.id != id);
    setCart(newCart)
  }

  return (
    <>
      <div className='container'>
        <h1 className='project-title'>Shopping Cart</h1>
        <div className="main-container">
          <div className="cards-container">

            {
              products.map(product => <SingleProduct
                product={product}
                key={product.id}
                handleCart={handleCart}
              ></SingleProduct>)
            }
          </div>

          <div className="cart-container">
            <h3>This is selection item Cart</h3>
            <div className='cart-title'>
              <h4>Name</h4>
              <h4>Price</h4>
            </div>
            <div>
              {
                cart.map((item) => (
                  <div className='cart-info'>
                    <h4>{item.title.slice(0, 15)}</h4>
                    <h4>{item.price}</h4>
                    <button onClick={() => handleRemove(item.id)} className='remove'>Remove</button>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
