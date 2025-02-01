import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../Layout/Header';

export default function Order() {
  const [selectedMenuItems, setSelectedMenuItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('selectedMenuItems')) || [];
    setSelectedMenuItems(storedItems);

    const updatedTotal = storedItems.reduce((sum, item) => {
      const priceWithDiscount = item.discount
        ? item.discountType === 'percentage'
          ? item.price - (item.price * item.discount / 100)
          : item.price - item.discount
        : item.price;
      return sum + priceWithDiscount;
    }, 0);

    setTotalPrice(updatedTotal);
  }, []);

  const handleRemoveItem = (itemToRemove) => {
    const updatedItems = selectedMenuItems.filter(item => item.id !== itemToRemove.id);
    setSelectedMenuItems(updatedItems);
    localStorage.setItem('selectedMenuItems', JSON.stringify(updatedItems));

    const updatedTotal = updatedItems.reduce((sum, item) => {
      const priceWithDiscount = item.discount
        ? item.discountType === 'percentage'
          ? item.price - (item.price * item.discount / 100)
          : item.price - item.discount
        : item.price;
      return sum + priceWithDiscount;
    }, 0);

    setTotalPrice(updatedTotal);
  };

  const handlePlaceOrder = () => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    if (!userId) {
      alert("User not logged in.");
      return;
    }

    const order = {
      orderDate: new Date().toISOString(),
      user: { id: userId },
      menuItems: selectedMenuItems.map(item => ({ id: item.id })),
      totalPrice
    };

    axios.post(`http://localhost:8080/api/order/ordersave`, order)
      .then(() => {
        alert("Order placed successfully!");
        localStorage.removeItem('selectedMenuItems');
        navigate('/order');
      })
      .catch((err) => console.error("Error placing order.", err.response?.data || err.message));
  };

  return (
    <div>
      <Header /><br /><br/>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Order Summary</h2>

        {selectedMenuItems.length > 0 ? (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Discounted Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {selectedMenuItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.price - (item.discount ? item.discount : 0)}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => handleRemoveItem(item)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h4 className="mt-3">Total Price: {totalPrice} Rs</h4>
            <button className="btn btn-success" onClick={handlePlaceOrder}>Proceed to Order</button>
          </>
        ) : (
          <p className="text-center">No items in the cart</p>
        )}
      </div>
    </div>
  );
}
