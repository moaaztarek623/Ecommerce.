import React from 'react'
import SideBarUser from '../Util/SideBarUser';
import SubTitle from '../Util/SubTitle';
import UserOrderItem from './UserOrderItem';
import Paginations from '../Pagination/Paginations';
import CardProduct from '../Products/CardProduct';
import productImag from '../../images/category-02.png';

const UserFavPrducts = () => {
  return (
  <div className="container mx-auto pb-[8rem]">
      <div className="flex gap-8">
        <SideBarUser actives={"2"} />
        <div className="flex flex-col gap-4 basis-full">
          <SubTitle title={"المنتجات المفضله"} classDiv={"py-4 !px-0"} />
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center w-full">
            <CardProduct discription={"سود كربون ساعة يد ذكية بيب إس أسود كربون"} price={"1120 جنيه"} rate={"4.5"} img={productImag} path={"/products/:id"}/>
            <CardProduct discription={"سود كربون ساعة يد ذكية بيب إس أسود كربون"} price={"1120 جنيه"} rate={"4.5"} img={productImag} path={"/products/:id"}/>
            <CardProduct discription={"سود كربون ساعة يد ذكية بيب إس أسود كربون"} price={"1120 جنيه"} rate={"4.5"} img={productImag} path={"/products/:id"}/>
            <CardProduct discription={"سود كربون ساعة يد ذكية بيب إس أسود كربون"} price={"1120 جنيه"} rate={"4.5"} img={productImag} path={"/products/:id"}/>
            <CardProduct discription={"سود كربون ساعة يد ذكية بيب إس أسود كربون"} price={"1120 جنيه"} rate={"4.5"} img={productImag} path={"/products/:id"}/>
            <CardProduct discription={"سود كربون ساعة يد ذكية بيب إس أسود كربون"} price={"1120 جنيه"} rate={"4.5"} img={productImag} path={"/products/:id"}/>
            <CardProduct discription={"سود كربون ساعة يد ذكية بيب إس أسود كربون"} price={"1120 جنيه"} rate={"4.5"} img={productImag} path={"/products/:id"}/>
            <CardProduct discription={"سود كربون ساعة يد ذكية بيب إس أسود كربون"} price={"1120 جنيه"} rate={"4.5"} img={productImag} path={"/products/:id"}/>
            <CardProduct discription={"سود كربون ساعة يد ذكية بيب إس أسود كربون"} price={"1120 جنيه"} rate={"4.5"} img={productImag} path={"/products/:id"}/>
            <CardProduct discription={"سود كربون ساعة يد ذكية بيب إس أسود كربون"} price={"1120 جنيه"} rate={"4.5"} img={productImag} path={"/products/:id"}/>
            <CardProduct discription={"سود كربون ساعة يد ذكية بيب إس أسود كربون"} price={"1120 جنيه"} rate={"4.5"} img={productImag} path={"/products/:id"}/>
          </div>
          <Paginations classPagination={"pt-10"} />
        </div>
      </div>
    </div>
    );
}

export default UserFavPrducts
