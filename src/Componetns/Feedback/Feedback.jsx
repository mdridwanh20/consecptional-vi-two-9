import { key } from 'localforage'
import React from 'react'

export default function Feedback({ feedbackData }) {

    //     name, userImg, review

    return (
        <div className='container grid grid-cols-3 my-20 gap-5 m-auto '>
            {
                feedbackData.map(feed =>
 
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body space-y-1 ">

                            <div className='flex justify-between items-center '>
                                <div className='flex items-center space-x-2'>
                                    <img className='w-10 h-10 border border-blue-500 object-cover rounded-full' src={feed.userImg} alt="" />
                                    <h1 className='font-semibold text-xl'> {feed.name} </h1>
                                </div>
                                <p className=' text-right'> {new Date().toLocaleDateString()} </p>
                            </div>

                            <p className=''> {feed.review} </p>

                            <div>
                                <div className="rating">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                </div>
                            </div>

                        </div>
                    </div>

                )
            }
        </div>
    )
}
