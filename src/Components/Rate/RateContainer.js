import React from 'react'
import RateTitle from './RateTitle'
import RatePost from './RatePost'
import RateComments from './RateComments'

const RateContainer = () => {
  return (
    <div className='flex flex-col p-4 bg-gray-50'>
      <RateTitle title={"التقييمات"} rateCount={"4.2"} rateResults={"120"} classTitle={"text-xl"}/>
      <RatePost/>
      <RateComments/>
    </div>
  )
}

export default RateContainer
