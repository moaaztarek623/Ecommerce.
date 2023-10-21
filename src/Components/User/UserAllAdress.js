import React from 'react'
import SideBarUser from '../Util/SideBarUser';
import SubTitle from '../Util/SubTitle';
import Paginations from '../Pagination/Paginations';
import AdressItem from './AdressItem';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import EditRemove from '../Util/EditRemove';

const UserAllAdress = () => {
  return <div className="container mx-auto pb-[8rem]">
      <div className="flex gap-8">
        <SideBarUser actives={"3"} />
        <div className="flex flex-col gap-4 basis-full">
          <SubTitle title={"العناوين الشخصية"} classDiv={"py-4 !px-0"} />
          <div className="flex flex-col gap-3">
            <div className="flex border border-gray-300 rounded-xl p-4 justify-between items-start">
              <div className="flex flex-col gap-2">
                <AdressItem title={"الدولة"} description={"مصر"} />
                <AdressItem title={"المحافظه"} description={"القاهرة"} />
                <AdressItem title={"المدينه"} description={"رمسيس"} />
                <AdressItem title={"العنوان"} description={"شارع رقم 9 عماره رقم 23 الدور رقم 6"} />
                <AdressItem title={"رقم الهاتف"} description={"+20 101 095 0727"} dir={"ltr"} />
              </div>
              <EditRemove />
            </div>
            <div className="flex border border-gray-300 rounded-xl p-4 justify-between items-start">
              <div className="flex flex-col gap-2">
                <AdressItem title={"الدولة"} description={"مصر"} />
                <AdressItem title={"المحافظه"} description={"القاهرة"} />
                <AdressItem title={"المدينه"} description={"رمسيس"} />
                <AdressItem title={"العنوان"} description={"شارع رقم 9 عماره رقم 23 الدور رقم 6"} />
                <AdressItem title={"رقم الهاتف"} description={"+20 101 095 0727"} dir={"ltr"} />
              </div>
              <EditRemove />
            </div>
            <div className="flex border border-gray-300 rounded-xl p-4 justify-between items-start">
              <div className="flex flex-col gap-2">
                <AdressItem title={"الدولة"} description={"مصر"} />
                <AdressItem title={"المحافظه"} description={"القاهرة"} />
                <AdressItem title={"المدينه"} description={"رمسيس"} />
                <AdressItem title={"العنوان"} description={"شارع رقم 9 عماره رقم 23 الدور رقم 6"} />
                <AdressItem title={"رقم الهاتف"} description={"+20 101 095 0727"} dir={"ltr"} />
              </div>
              <EditRemove />
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <Link to="/user/addAdress">
              <Button className="hover:!shadow-none hover:bg-opacity-90 border border-gray-300 text-[0.9rem] rounded-lg" color="green">
                اضافة عنوان جديد
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>;
}

export default UserAllAdress
