import React from "react";

const Filter = (props) => {
    

    let category = props.category;
    let setCategory = props.setCategory
    let filters = props.filters;
    function filterHandler(title){
        setCategory(title);
    }
    
    return(
    
            <div className="flex flex-row mt-8 items-center justify-between bg-sky-50 border-2 border-solid border-sky-200 p-2">
                {
                    filters.map( (ele,index) => {
                        return(
                            <div className="flex flex-row justify-between">
                                <button className={`hover:bg-sky-200 text-sky-500 border-solid border-sky-200 border-2 p-4 rounded-md font-semibold  ${category === ele.name ? "bg-sky-200 border-white" : "bg-opacity-40 border-transparent"}`} onClick={() => filterHandler(ele.name)} id={index}>
                                    {ele.name}
                                </button>
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default Filter;