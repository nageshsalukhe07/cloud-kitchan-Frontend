import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ViewMenuItem.css'; // Include the custom CSS file

export default function ViewMenuItem() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/menu/menufindall')
      .then((res) => {
        setMenuItems(res.data);
      })
      .catch((error) => {
        console.log('Error fetching menu items:', error);
      });
  }, []);

   const deleteMenuItem = (id) => {
    axios
      .delete(`http://localhost:8080/api/menu/menudeletebyid/${id}`)
      .then((res) => {
        console.log('Menu item deleted successfully');
        setMenuItems((prevItems) => prevItems.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting menu item:', error);
      });
  };

  return (
    <div className="container my-5 w">
      <h1 className="text-center mb-4">Menu Items</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered col">
          <thead className="thead-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Discount</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.availableQty}</td>
                <td>{item.discount}</td>
                <td>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="img-thumbnail"
                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                  />
                </td>
                <td>
                  <div className="d-flex">
                    <Link
                      to={`/updatemenuitem/${item.id}`}
                      className="btn btn-primary btn-sm me-1"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => deleteMenuItem(item.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
