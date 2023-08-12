import React from "react";
import Header from "./Component/Header";
import Search from "./Component/Search";
import Filter from "./Component/Filter";
import Cards from "./Component/Cards";
import { useState } from "react";
import { filterData } from "./data";
const App = () => {
  
  

  const [IsRent,setRent] = useState(false);

  const filters = [
    {
        name:"All City",
    },
    {
        name:"Pune",
    },
    {
        name:"Mumbai",
    },
    {
        name:"Banglore",
    },
    {
        name:"Hyderabad",
    },
    {
        name:"Chennai",
    },
    
];
const [category, setCategory] = useState(filters[0].name);
  
  return (
    <div className="w-screen bg-sky-100 min-h-screen">
      <Header setRent={setRent} IsRent={IsRent}/>
      <div className="w-10/12 mx-auto">
        <Search/>
        <Filter
          filterData = {filterData}
          category = {category}
          setCategory = {setCategory}
          filters={filters}
        />
        <Cards category={category} IsRent={IsRent}/>
      </div>
    </div>
  );
};

export default App;
