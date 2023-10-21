import React from 'react'
import RateTitle from './RateTitle'
import Paginations from '../Pagination/Paginations'

const RateComments = () => {
  return (
    <div className="flex flex-col gap-2 pt-0 pb-5">
        <div className='p-4 border-b border-b-gray-200 flex flex-col gap-1.5'>
            <RateTitle title="معاذ طارق" rateCount={"2.5"} classTitle={"text-[0.9rem] text-gray-600"}/>
            <span>منتج رائع ومميز يستحق السعر والجودة عاليه جدا</span>
        </div>
        <div className='p-4 border-b border-b-gray-200 flex flex-col gap-1.5'>
            <RateTitle title="معاذ طارق" rateCount={"2.5"} classTitle={"text-[0.9rem] text-gray-600"}/>
            <span>منتج رائع ومميز يستحق السعر والجودة عاليه جدا</span>
        </div>
        <div className='p-4 border-b border-b-gray-200 flex flex-col gap-1.5'>
            <RateTitle title="معاذ طارق" rateCount={"2.5"} classTitle={"text-[0.9rem] text-gray-600"}/>
            <span>منتج رائع ومميز يستحق السعر والجودة عاليه جدا</span>
        </div>
        <div className='p-4 flex flex-col gap-1.5'>
            <RateTitle title="معاذ طارق" rateCount={"2.5"} classTitle={"text-[0.9rem] text-gray-600"}/>
            <span>منتج رائع ومميز يستحق السعر والجودة عاليه جدا</span>
        </div>
        <Paginations classPagination={"py-5"}/>
    </div>
  )
}

export default RateComments
