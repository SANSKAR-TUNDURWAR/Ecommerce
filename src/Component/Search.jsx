import React from "react";
import {FiSearch} from "react-icons/fi"
const Search = () => {
    return(
        <div className="flex flex-row justify-between items-center mt-8">
            <h1 className="text-4xl font-bold">Search properties to rent</h1>
            <div className="flex flex-row items-center gap-2 border-solid border-sky-200 border-2 p-2">
                <input type="text" placeholder="Search with Search Bar" className="bg-sky-100 text-black"/>
                <FiSearch/>
            </div>
        </div>
    )
}

export default Search;