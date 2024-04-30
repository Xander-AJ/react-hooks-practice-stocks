import React, { useState } from "react";

function Stock({ stock }) {
  const [isOwned, setIsOwned] = useState(false);

  const handleBuy = () => {
    // Add logic to buy stock
    setIsOwned(true);
  };

  const handleSell = () => {
    // Add logic to sell stock
    setIsOwned(false);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{stock.name}</h5>
        <p className="card-text">{stock.price}</p>
        {isOwned ? (
          <button onClick={handleSell} className="btn btn-danger">
            Sell
          </button>
        ) : (
          <button onClick={handleBuy} className="btn btn-primary">
            Buy
          </button>
        )}
      </div>
    </div>
  );
}

export default Stock;
