import React, { useEffect, useState } from "react";
import Stock from "./Stock";

function StockContainer({ portfolio, setPortfolio, sortBy, filterBy }) {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => setStocks(data));
  }, []);

  const filteredStocks = stocks.filter((stock) =>
    filterBy ? stock.type === filterBy : true
  );

  const sortedStocks = sortBy === "alphabetical"
    ? [...filteredStocks].sort((a, b) => a.name.localeCompare(b.name))
    : sortBy === "price"
    ? [...filteredStocks].sort((a, b) => a.price - b.price)
    : filteredStocks;

  const handleBuyStock = (stock) => {
    setPortfolio([...portfolio, stock]);
  };

  const handleSellStock = (stock) => {
    const updatedPortfolio = portfolio.filter((item) => item.id !== stock.id);
    setPortfolio(updatedPortfolio);
  };

  return (
    <div>
      <h2>Stocks</h2>
      {sortedStocks.map((stock) => (
        <Stock
          key={stock.id}
          stock={stock}
          onBuy={handleBuyStock}
          onSell={handleSellStock}
          isOwned={portfolio.some((item) => item.id === stock.id)}
        />
      ))}
    </div>
  );
}

export default StockContainer;
