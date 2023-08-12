import React from "react";
import {LuHome} from "react-icons/lu"
const Header = (props) => {
    
    const setRent = props.setRent;
    function clickHandler(event){
        event.value = !(event.value)
        setRent(event.value);
        
    }
    return(
        <div>
            <div className="flex flex-row items-center justify-between p-4 bg-sky-50">
                <div className="flex flex-row items-center gap-2">
                    <LuHome/>
                    <p className="text-2xl font-bold">
                        Estatery
                    </p>
                </div>
                <div className="flex flex-row gap-5">
                    <button className="hover:bg-sky-200 hover:text-sky-500 p-2 rounded-md" onClick={clickHandler}>Rent</button>

                    <button className="hover:bg-sky-200 hover:text-sky-500 p-2 rounded-md">Buy</button>
                    
                    <button className="hover:bg-sky-200 hover:text-sky-500 p-2 rounded-md">Sell</button>

                    <label className="hover:bg-sky-200 hover:text-sky-500 p-2 rounded-md" htmlFor="property">Manage Property</label>
                    <select className="hover:bg-sky-200 hover:text-sky-500" id="property text-black"></select>

                    <label className="hover:bg-sky-200 hover:text-sky-500 p-2 rounded-md" htmlFor="Resource">Resources</label>
                    <select className="hover:bg-sky-200 hover:text-sky-500" id="Resource text-black"></select>
                </div> 

                <div>
                    <div className="flex flex-row gap-5">
                        <button className="hover:bg-sky-200 text-sky-500 border-solid border-sky-200 border-2 p-2 rounded-md font-semibold">Login</button>
                        <button className="hover:bg-sky-200 text-sky-500 p-2 border-solid border-sky-200 border-2 rounded-md font-semibold">SignUp</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header;