import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {LuBedSingle} from "react-icons/lu";
import {FaShower} from "react-icons/fa";
import {RxDimensions} from "react-icons/rx"
import { useState } from "react";
import { toast } from "react-toastify";

const Card = (props) => {
    const ele = props.ele;
    const [liked,setLiked] = useState(false);
    let likedCoures = props.likedCoures;
    let setLikedCourses= props.setLikedCourses;
    const IsRent = props.IsRent;

    function clickHandler() {
        if(likedCoures.includes(ele.id)){
            setLikedCourses( (prev) => prev.filter( (cid) => (cid !== ele.id) ) );
            toast.warning("like removed");
            setLiked(false);
        }
        else{

            if(likedCoures.length === 0){
                setLikedCourses([ele.id]);
            }
            else{
                setLikedCourses((prev) => [...prev,ele.id]);
            }
            toast.success("Liked Successfully")
            setLiked(true);
        }
    }

    return(
        <div className="flex flex-row overflow-hidden max-w-[300px] border-solid border-2 border-sky-200 p-2 bg-sky-50">
            <div className="flex flex-col">
                <img src={ele.image} alt="Img" className="h-[200px] w-[300px]"/>
                <div className="flex flex-row justify-between mt-2">
                    <p className="text-xl font-semibold">
                       {
                            (IsRent === true) ? `${ele.rentPrice}/-` : `${ele.Price}/-`
                       }
                    </p>
                    <button onClick={clickHandler} className="border-solid border-[1px] rounded-full border-sky-300 p-1 items-center">
                        {
                            liked? (<FcLike />) : (<FcLikePlaceholder/>)
                        }
                    </button>
                </div>
                <div className="mt-2">
                    <p>

                    </p>
                    <p>
                        {ele.Addr}
                    </p>
                </div>
                <div className="flex flex-row justify-between mt-2">
                    <div className="flex flex-row items-center gap-1">
                        <LuBedSingle/>
                        <p>{`${ele.Beds} Bed`}</p>
                    </div>
                     <div className="flex flex-row items-center gap-1">
                        <FaShower/>
                        <p>{`${ele.Bathroom} Bathroom`}</p>
                    </div>
                     <div className="flex flex-row items-center gap-1">
                        <RxDimensions/> 
                        <p>{`${ele.Area} Sqft`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;