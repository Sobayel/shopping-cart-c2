import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import SingleProduct from './SingleProduct';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] =useState([]);

  useEffect(() =>{
    fetch("/public/shoppingCart.json")
    .then((res) => res.json())
    .then((data) => setProducts(data))
  },[]);

  const handleCart = (p) => {
    const isExist = cart.find((product) => product.id ==p.id);
    if(!isExist){
      setCart([...cart, p])
    }else{
      alert('already in cart');
    }
  }


  console.log(products)
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
          <h2 className="text-3xl font-semibold">This is Left Side Cart</h2>
          <div className='cart-title'>
            <h4>Name</h4>
            <h4>Price</h4>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
