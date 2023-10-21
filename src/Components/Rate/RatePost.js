import { AiFillStar } from "react-icons/ai"; 
import { BsStarHalf } from "react-icons/bs"; 
import { AiOutlineStar } from "react-icons/ai"; 
import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Button, Textarea } from "@material-tailwind/react";

const RatePost = () => {
    const setting = {
        size: 22,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: 2.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <AiOutlineStar />,
        halfIcon: <BsStarHalf />,
        filledIcon: <AiFillStar />,
        onChange: newValue => {
            console.log(`Example 2: new value is ${newValue}`);
        }
    };

  return (
    <div className = "flex flex-col p-4">
      <div className = "flex gap-2 items-center">
        <span>معاذ طارق</span>
        <ReactStars { ...setting } />
      </div>
      <div className = "py-5">
      <textarea  placeholder="اضف تعليقا..." className="resize-none rounded-xl p-4 focus:border-gray-600 outline-none focus:outline-none border border-gray-200 w-full"></textarea>
      <Button variant="text" color="green" className="border border-green-400 w-fit float-left">اضف تعليقا</Button>
      </div>
    </div>
  )
}

export default RatePost
