import React, { useState } from 'react'
import SideBar from '../Util/SideBar';
import SubTitle from '../Util/SubTitle';
import { Button } from '@material-tailwind/react';
import SideBarUser from '../Util/SideBarUser';

const UserAddAdress = () => {
    const [value, setvalue] = useState("")
  return (
    <div className="container mx-auto pb-[8rem]">
        <div className="flex gap-8">
          <SideBarUser actives={"3"} />
          <div className="flex flex-col gap-4 basis-full">
            <SubTitle title={"اضافة عنوان جديد"} classDiv={"py-4 pb-6 !px-0"} />
            <div className="flex flex-col gap-3">
              <div className = "flex flex-col gap-3">
                <input className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" onChange={e => setvalue(e.currentTarget.value)} placeholder="تسمية العنوان (المنزل - العمل)" />
                <div className='flex gap-2 items-center'>
                <input className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" onChange={e => setvalue(e.currentTarget.value)} placeholder="الدولة" />
                <input className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" onChange={e => setvalue(e.currentTarget.value)} placeholder="المحافظه" />
                <input className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" onChange={e => setvalue(e.currentTarget.value)} placeholder="المدينه" />
                </div>
                <textarea placeholder="العنوان بالتفصيل" className="resize-none rounded-xl p-4 focus:border-gray-600 outline-none focus:outline-none border border-gray-200 w-full" />
                <input className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" onChange={e => setvalue(e.currentTarget.value)} placeholder="رقم الهاتف" />
                <Button className="hover:!shadow-none hover:bg-opacity-90 border border-gray-300 rounded-lg" color="green" disabled={!value}>
                  اضافة العنوان
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default UserAddAdress
