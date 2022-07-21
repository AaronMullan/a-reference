import React, { Fragment, useState } from 'react'

const data = [{ name: 'apple', price: 5 }, { name: 'pear', price: 3 }, { name: 'bananna', price: 2 }]



export default function Shopping() {
  const [cartItems, setCartItems] = useState([])

  const handleClick = (displayName, price) => {
    console.log(displayName, price)
    setCartItems([...cartItems, { name: displayName, price: price }])
    console.log(cartItems)
  }

  function Card({ displayName, price }) {
    return (
      <div style={{ background: 'yellowgreen', boxShadow: '5px 5px 5px gray', width: '100%', padding: '20px' }}>
        <h3>{displayName}</h3>
        <p>$ {price}</p>
        <button onClick={() => handleClick(displayName, price)}>add to cart</button>
      </div>
    )
  }

  function Cart({ cartItems }) {
    const totalCost = cartItems.reduce((acc, curr) => acc + curr.price, 0)
    return (
      <Fragment>
        <h2>My Cart</h2>
        {cartItems.map(el => el.name)}
        <p>total: {totalCost}</p>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <div style={{ margin: '60px 100px' }}>
        <h1>Store Items</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: '50px' }}>
          {data.map((el, i) => <Card displayName={el.name} price={el.price} key={i} />)}
        </div>
        <div>
          <Cart cartItems={cartItems} />
        </div>
      </div>
    </Fragment>
  )
}