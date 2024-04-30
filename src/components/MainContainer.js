import React, { useState } from "react";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import StockContainer from "./StockContainer";

function MainContainer() {
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");

  const handleSortChange = (sortType) => {
    setSortBy(sortType);
  };

  const handleFilterChange = (filterType) => {
    setFilterBy(filterType);
  };

  return (
    <div>
      <SearchBar onSortChange={handleSortChange} onFilterChange={handleFilterChange} />
      <div className="row">
        <div className="col-8">
          <StockContainer portfolio={portfolio} setPortfolio={setPortfolio} sortBy={sortBy} filterBy={filterBy} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} setPortfolio={setPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
