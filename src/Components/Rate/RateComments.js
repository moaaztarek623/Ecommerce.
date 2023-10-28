import React from 'react'
import RateTitle from './RateTitle'
import Paginations from '../Pagination/Paginations'
import EditRemove from '../Util/EditRemove';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Spinner } from "@material-tailwind/react";
import DeleteReviewHook from '../../hook/review/delete-review-hook';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router';

const RateComments = ({ allReview, onPress }) => {

    const {id} = useParams();

    const [open, handleOpen, loadingRemove, handleRemoveComment, user] = DeleteReviewHook(id)

  return (
    <div className="flex flex-col gap-2 pt-0">
        <Dialog open={open} handler={handleOpen} size='xs'>
            <DialogHeader>حذف التقييم</DialogHeader>
            <DialogBody divider>
                هل انت متاكد انك تريد حذف التقييم؟
            </DialogBody>
            <DialogFooter className='flex justify-between items-center'>
            <Button
                variant="text"
                color="gray"
                onClick={handleOpen}
                className="mr-1"
            >
                <span>الغاء</span>
            </Button>
            <Button className="flex items-center gap-1 justify-center hover:!shadow-none hover:bg-opacity-90 border border-gray-300 rounded-lg" color="green" onClick={handleRemoveComment}>
                {loadingRemove === true ? <span className='flex gap-1 items-center'>جاري الحذف <Spinner color='gray'/></span> : <span>تاكيد الحذف</span>}
            </Button>
            </DialogFooter>
        </Dialog>
        {
            allReview && allReview.data ? allReview.data.map((item, index) => {
                return (
                    <div key={index} className='p-4 border-b border-b-gray-200 flex flex-col gap-1.5'>
                        <RateTitle title={item.user.name} rateQty={item.rating} classTitle={"text-[0.9rem] text-gray-600"} reviewsCount={"no"}/>
                        <div className='flex items-center gap-3 justify-between'>
                            <p>{item.review}</p>
                            {user._id === item.user._id ? <EditRemove onClickRemove={()=>handleOpen(item._id)} /> : null}
                        </div>
                    </div>
                )
            }) : <h3>لا يوجد تقييمات الان</h3>
        }
        {allReview?.data?.length <= 0 ? <h3 className='p-4'>لا يوجد تقييمات الان</h3> : null}
        <Paginations classPagination={"pt-5"} onPress={onPress} pageCount={allReview?.paginationResult?.numberOfPages}/>
        <ToastContainer />
    </div>
  )
}

export default RateComments
