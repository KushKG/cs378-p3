import React from 'react';
import '../App.css';

const MenuHeader = () => {
    return (
    <div>
      <div className="mt-2 text-center">
        <img src="https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/34873/optimized_large_thumb_stage.jpg" className="logo-size" alt="Chick-fil-A Logo" />
      </div>
      <div className="mt-2 text-center">
        <div className="cursive-text">
          Tasty, Savoury, and Yummy Japanese Food
        </div>
        <div className="mt-1">
          <h3 className="headline-text">
            Best Japanese Food on Campus
          </h3>
        </div>
      </div>
    </div>
    );
};

export default MenuHeader;