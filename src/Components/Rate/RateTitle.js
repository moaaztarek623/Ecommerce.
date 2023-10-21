import { AiFillStar } from "react-icons/ai"; 
import React from 'react'


const RateTitle = ({ title, rateCount, rateResults, classTitle }) => {
  return (
    <div className="flex gap-1 items-center">
      <h1 className={"font-bold"+" "+classTitle}>{title}</h1>
      <span className="flex items-center gap-1 flex-row-reverse text-yellow-700 font-bold"><span className="text-sm">{rateCount}</span> <AiFillStar className="text-yellow-700"/></span>
      {rateResults ?  (<span className="text-gray-500 text-xs">({rateResults}) تقييمات</span>) : null}
    </div>
  )
}

export default RateTitle
