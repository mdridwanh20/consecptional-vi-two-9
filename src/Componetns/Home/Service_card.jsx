import React from 'react'
import { Link } from 'react-router-dom';

export default function Service_card({ service }) {

    const { id, image, treatment, description, cost } = service

    return (
        <div className="card border bg-base-100 ">
            <figure>
                <img
                    src={image} />
            </figure>
            <div className="p-5 py-10 space-y-3">

                <div className='flex items-center space-x-3'>
                    <h2 className="card-title flex items-center">
                        {treatment}  </h2>
                    <p className="badge badge-secondary"> ${cost} </p>
                </div>



                <p> {description.slice(0, 80)}...</p>
                <div>
                    <Link to={`/details/${id}`} className='btn h-8 min-h-2 rounded-sm btn-success text-white'>Checkout</Link>
                </div>

            </div>
        </div>
    )
}
