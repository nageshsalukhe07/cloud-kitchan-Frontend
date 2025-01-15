import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Layout/Header';

export default function MenuItem() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedMenuItems, setSelectedMenuItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8080/api/menu/menufindall')
      .then((res) => setMenuItems(res.data))
      .catch((err) => console.error('Error fetching menu items:', err));
  }, []);

  const handleMenuItemChange = (menuItem) => {
    const isSelected = selectedMenuItems.includes(menuItem);
    const updatedSelection = isSelected
      ? selectedMenuItems.filter((item) => item.id !== menuItem.id)
      : [...selectedMenuItems, menuItem]; 

    setSelectedMenuItems(updatedSelection);

    // Calculate total price
    const updatedTotal = updatedSelection.reduce((sum, item) => {
      const priceWithDiscount = item.discount
        ? item.discountType === 'percentage'
          ? item.price - (item.price * item.discount / 100)
          : item.price - item.discount
        : item.price;
      return sum + priceWithDiscount;
    }, 0);
    setTotalPrice(updatedTotal);
  };

  return (
    <div>
      <Header />
      <div className="img">
        <div className="container mt-5">
          <h2 className="text-center mb-4">Menu Items</h2>
          <div className="row">
            {menuItems.length > 0 ? (
              menuItems.map((menu, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card mb-4" style={{ width: '18rem', height: '600px' }}>
                    <img
                      src={menu.img}
                      className="card-img-top"
                      alt={menu.name || 'Menu item'}
                      height="300px"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{menu.name}</h5>
                      <p className="card-text">{menu.description}</p>
                      <p className="card-text">
                        <strong>Price:</strong> {menu.price} Rs
                      </p>
                      <p className="card-text">
                        <strong>Available Quantity:</strong> {menu.availableQty}
                      </p>
                      <p className="card-text">
                        <strong>Discount:</strong> {menu.discount}%
                      </p>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleMenuItemChange(menu)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p>No menu items found</p>
              </div>
            )}
          </div>
        </div>

        <div>
          <h4>Order Summary</h4>
          <table>
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
                    <button
                      className="btn btn-danger"
                      onClick={() => handleMenuItemChange(item)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h4 className="mt-3">Total Price: {totalPrice} Rs</h4>
        <Link to="/placeorder">
          <button className="btn btn-success">Proceed to Order</button>
        </Link>
      </div>
    </div>
  );
}
