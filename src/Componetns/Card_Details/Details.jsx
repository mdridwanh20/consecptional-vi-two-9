import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Modal from '../Modal/Modal'

export default function Details() {
    const { id, image, treatment, description, cost } = useLoaderData()
    // const {  } = singleData


    return (
        <div className='container m-auto'>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${image})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="mb-5 text-5xl font-bold"> {treatment} </h1>
                        <p className="mb-5">
                            {description}
                        </p>
                        <button
                            onClick={() => document.getElementById('my_modal_2').showModal()}
                            className="btn btn-primary">Book Appointment</button>
                    </div>
                </div>
            </div>

                <Modal></Modal>
        </div>
    )
}
