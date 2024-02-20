import React from 'react';
import '../App.css';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, price, imageName, addToCart, removeFromCart, quantity }) => {
    return (
    <div className="mt-3 container">
      <div className="row justify-content-center">
        <div className="col-4 rounded image-div">
          <img src={`./images/${imageName}`} className="image-size image-menu" alt={title} />
        </div>
        <div className="col">
          <div className="row">
            <h5 className="text-start fw-bold">{title}</h5>
          </div>
          <div className="row">
            <h6 className="fw-light">{description}</h6>
          </div>
          <div className="row">
            <div className="d-flex justify-content-between">
              {`$${price}`}
              <div className="m-0">
                <button className="add-button me-2" onClick={addToCart}>+</button>
                {quantity}
                <button className="add-button ms-2" onClick={removeFromCart}>-</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default MenuItem;
