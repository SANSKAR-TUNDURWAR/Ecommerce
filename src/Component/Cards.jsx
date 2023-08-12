import React from "react";
import { filterData } from "../data";
import { useState } from "react";
import Card from "./Card";
const Cards = (props) => {
    const [likedCoures, setLikedCourses] = useState([]);
    const category = props.category;
    const IsRent = props.IsRent;
    let cities = [];
    const getCities = () => {
        if(category === "All City"){
            filterData.forEach( (element) => {
                cities.push(element);
            });
        }
        else{
            
            filterData.forEach( (element) => {
                const Addr = element.Addr;
                if(category === Addr){
                    cities.push(element);
                    
                }
            });
        }
        return cities;
    }
    
    return(
        <div className="mt-8 flex  flex-wrap justify-center gap-4 ">
            
            {
                getCities().map( (element,index) => {
                    return <Card ele={element} index={index} likedCoures={likedCoures} setLikedCourses={setLikedCourses} IsRent={IsRent}/>
                })
            }

        </div>
    )
}

export default Cards;