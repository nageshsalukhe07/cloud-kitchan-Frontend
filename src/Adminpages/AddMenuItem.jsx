import React, { useState } from 'react';
import axios from 'axios';
import './AddMenuItem.css'; // External CSS file for styling

export default function AddMenuItem() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [availableQty, setAvailableQty] = useState('');
    const [discount, setDiscount] = useState('');
    const [img, setImg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const menuItem = {
            name,
            description,
            price: parseInt(price),
            availableQty: parseInt(availableQty),
            discount: parseFloat(discount),
            img,
        };

        axios.post('http://localhost:8080/api/menu/menusave', menuItem)
            .then((response) => {
                alert('Menu item added successfully!');
                setName('');
                setDescription('');
                setPrice('');
                setAvailableQty('');
                setDiscount('');
                setImg('');
            })
            .catch((error) => {
                console.error(error);
                alert('Failed to add menu item. Please try again.');
            });
    };

    return (
        <div className="add-menu-item-page d-flex align-items-center justify-content-center ">
            <div className="add-menu-item-card p-4 shadow-lg alignment">
                <h2 className="text-center mb-4 ">Add Menu Item</h2>
                <form onSubmit={handleSubmit}>
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
                    
                    <button type="submit" className="btn btn-gradient w-50 margin">Add Item</button>
                </form>
            </div>
        </div>
    );
}
