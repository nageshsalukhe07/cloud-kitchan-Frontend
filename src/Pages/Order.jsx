import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Header from '../Layout/Header';

export default function Order() {

  const [menuItems, setMenuItems] = useState([]);
  const [selectedMenuItems, setSelectedMenuItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  let cart = localStorage.getItem('cart');


  const handlePlaceOrder = () => {
    //Retrice user ID from localStorage
    const userId = JSON.parse(localStorage.getItem("userId"));

    if (!userId) {
      alert("User not logged in.");
      return;
    }

    const order = {
      orderDate: new Date().toISOString(),
      user: {
        id: userId
      },
      menuItems: selectedMenuItems.map(item => ({ id: item.id })),
      totalPrice
    };
    console.log(order);
    axios.post(`http://localhost:8080/api/order/ordersave`, order)
      .then((res) => {
        alert("Order placed successfully!");

        console.log(res);
      })
      .catch((err) =>
        console.error("Error placing order.",
          err.res?.data || err.message));

  }


  return (
    <div>
      <Header />
      <div className="img">

        <br /><br /><br /><br />
        <h1 className="title">Menu List</h1>
        
        <div>
          <h4>Order summary</h4>
          <table>
            <thead>
              <th>Name</th>
              <th>Description</th>
              <th>Discounted Price</th>
            </thead>
            <tbody>
              {selectedMenuItems.map((me) => (
                <tr key={me.name}>
                  <td>{me.name}</td>
                  <td>{me.description}</td>
                  <td>{me.discount}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <h4 className='mt-3'>Total Price:{totalPrice}rs</h4>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  )
}