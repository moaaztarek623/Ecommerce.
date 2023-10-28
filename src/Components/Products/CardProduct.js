import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai"; 
import { AiOutlineHeart } from "react-icons/ai"; 
import { AiTwotoneStar } from "react-icons/ai"; 
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Typography, IconButton, Button, CardFooter, Chip } from "@material-tailwind/react";
import { Link } from "react-router-dom"
import EditRemove from "../Util/EditRemove";


const CardProduct = ({ discription, price, rate, img, path, rateTrue, chil, title, addToCartButton, pointer, onClickEdit, onClickRemove, pathEdit }) => {
    const [toggle, setToggle] = useState(true)
    
  return (
    <Card className="w-full max-w-[30rem] shadowCards flex flex-col gap-2 p-2 justify-between" dir="rtl">
            <CardHeader floated={false} color="blue-gray" className="!bg-transparent cursor-pointer !shadow-none" >
            <div className="flex justify-end items-center w-full"><Chip value="جديد" className="w-fit bg-[#36fa88] text-white">جديد</Chip></div>
            {/* <div className="flex justify-end items-center w-full"><Chip value="الاكثر مبيعا" className="w-fit bg-[#fa7e36] text-white"></Chip></div> */}
                { chil === "moaaz" ? <EditRemove className={"pb-2"} pathEdit={pathEdit} onClickEdit={onClickEdit} onClickRemove={onClickRemove} /> : null }
                <Link to={path} >
                    <img src={img} className="h-60 w-full scale-90 object-contain object-center hover:scale-100" alt="laptop" />
                </Link>
                <div className = "flex w-full items-center pb-2 justify-end">
                        {
                            rateTrue === true ?  (
                            <IconButton onClick={() => toggle == true ? setToggle(false) : setToggle(true)} size="sm" color="red" variant="text" className="rounded-full" >
                                {toggle == true ? (<AiOutlineHeart className="text-3xl" color="gray" />) : (<AiFillHeart className="text-3xl" />)}
                            </IconButton> ) : null
                        }
                </div>
            </CardHeader>
            <div className="flex items-center text-ellipsis overflow-hidden !p-2">
                <Typography className="pb-2 font-bold text-gray-900">
                    {title}
                </Typography>
            </div>
            <div>
                <div className="flex items-center justify-between !p-2">
                    <Typography color="blue-gray" className="text-yellow-700 flex items-center gap-1 font-extrabold">
                    <AiTwotoneStar className="text-yellow-700 text-2xl"/>
                        {rate}
                    </Typography>
                    <Typography variant="h5" color="gray" className="font-bold text-black flex items-center gap-1 flex-row-reverse">
                        <span className="text-xs text-gray-600">ج.م</span> {price.toLocaleString()}
                    </Typography>                    
                </div>
            </div>
            {
                addToCartButton === true ?
                <div className="p-2">
                    <Button color="green" className="flex items-center gap-1 text-sm hover:!shadow-none py-3 px-6 hover:bg-green-400 w-full justify-center">اضف للعربه<AiOutlineShoppingCart className="text-lg"/></Button>
                </div> : null
            }

  </Card>
  )
}

export default CardProduct
