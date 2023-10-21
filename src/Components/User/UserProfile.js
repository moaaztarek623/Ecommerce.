import React, { useState } from 'react'
import SideBarUser from '../Util/SideBarUser';
import SubTitle from '../Util/SubTitle';
import Paginations from '../Pagination/Paginations';
import AdressItem from './AdressItem';
import EditRemove from '../Util/EditRemove';
import { Button } from '@material-tailwind/react';

const UserProfile = () => {
    const [value, setvalue] = useState("")
  return (
    <div className="container mx-auto pb-[8rem]">
    <div className="flex gap-8">
      <SideBarUser actives={"4"} />
      <div className="flex flex-col gap-4 basis-full">
        <SubTitle title={"الملف الشخصي"} classDiv={"py-4 !px-0"} />
        <div className="flex justify-between items-start border border-gray-300 rounded-xl p-4">
            <div className="flex flex-col gap-3">
                <AdressItem title={"الاسم"} description={"معاذ طارق محمود"}/>
                <AdressItem title={"الايميل"} description={"moaaztarek234@gmail.com"}/>
                <AdressItem title={"الرقم"} description={"+20 101 095 0727"} dir={"ltr"} />
            </div>
            <EditRemove remove={"no"}/>
        </div>
        <div className = "flex flex-col gap-3">
            <SubTitle title={"تغيير كلمة المرور"} classDiv={"py-4 !px-0"}/>
            <div className="flex flex-col gap-2">
                <input className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" onChange={e => setvalue(e.currentTarget.value)} placeholder="كلمة السر القديمه" />
                <input className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" onChange={e => setvalue(e.currentTarget.value)} placeholder="كلمة السر الجديده" />
                <Button className="hover:!shadow-none hover:bg-opacity-90 border border-gray-300 rounded-lg" color="green" >
                    تغيير 
                </Button>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserProfile
