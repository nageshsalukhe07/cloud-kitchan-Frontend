import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateMenuItem.css';

export default function UpdateMenuItem() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [availableQty, setAvailableQty] = useState(0);
  const [discount, setDiscount] = useState(0.0);
  const [img, setImg] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/menu/menufindbyid/${id}`)
      .then((response) => {
        const menuItem = response.data;
        setName(menuItem.name);
        setDescription(menuItem.description);
        setPrice(menuItem.price);
        setAvailableQty(menuItem.availableQty);
        setDiscount(menuItem.discount);
        setImg(menuItem.img);
      })
      .catch((error) => {
        console.error('Error fetching menu item:', error);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedMenuItem = {
      name,
      description,
      price: parseInt(price),
      availableQty: parseInt(availableQty),
      discount: parseFloat(discount),
      img, // Image URL or Base64
    };

    console.log("Updated Menu Item:", updatedMenuItem); // Debugging
    axios
      .put(`http://localhost:8080/api/menu/menuupdate/${id}`, updatedMenuItem)
      .then(() => {
        alert('Menu item updated successfully!');
        navigate('/viewmenuitem');
      })
      .catch((error) => {
        alert('Error updating menu item');
        console.error('Error updating menu item:', error);
      });
  };


  return (
    <div className="update-menu-item-page d-flex align-items-center justify-content-center">
      <div className="update-menu-item-card p-4 shadow-lg alignment">
        <h2 className="text-center mb-4">Update Menu Item</h2>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price:</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Available Quantity:</label>
            <input
              type="number"
              className="form-control"
              value={availableQty}
              onChange={(e) => setAvailableQty(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Discount:</label>
            <input
              type="percentage"
              className="form-control"
              step="0.01"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image URL:</label>
            <input
              type="text"
              className="form-control"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-gradient w-50 margin">Update Item</button>
        </form>
      </div>
    </div>
  );
}
