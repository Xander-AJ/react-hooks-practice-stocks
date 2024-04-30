import React, { useEffect, useState } from "react";
import Stock from "./Stock";

function StockContainer() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => setStocks(data));
  }, []);

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock key={stock.id} stock={stock} />
      ))}
    </div>
  );
}

export default StockContainer;
