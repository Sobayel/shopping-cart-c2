import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    fetch("/public/shoppingCart.json")
    .then((res) => res.json())
    .then((data) => setProducts(data))
  },[]);
  console.log(products)





  return (
    <>
      <h1 className='text-5xl text-center p-5 font-bold'>Shopping Cart</h1>
      <div className="main-container">
        <div className="cards-container">
          <div className='card'>
            <img className='card-img' src="https://i.ibb.co/ZcjQn4r/01-Wireless-Bluetooth-Headphones.jpg" alt="" />
            <h1 className='title'>Shopping</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis aliquam consequatur ducimus culpa quae nesciunt?</p>
            <div className='card-footer'>
              <h2 className='price'>Price: 350 $</h2>
              <button className='add-btn'>add to cart</button>
            </div>
          </div>
        </div>

        <div className="shadow-lg">
          <h1 className="text-3xl font-semibold">This is Left Side Cart</h1>
        </div>
      </div>
    </>
  )
}

export default App
