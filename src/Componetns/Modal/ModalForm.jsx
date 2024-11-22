import React from 'react'
import { Link } from 'react-router-dom';

export default function ModalForm() {

    const handlerSubmit = (e) =>{
        e.preventDefault();
        console.log(e);

        
    }

    return (
        <div>

            <form onSubmit={handlerSubmit} className="card-body p-0">
                {/* name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>

                    <input
                        name='name'
                        type="text"
                        placeholder="Name"
                        className="input focus:outline-none input-bordered"  />
                </div>
                {/* email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>

                    <input
                        name='email'
                        type="email"
                        placeholder="Email"
                        className="input focus:outline-none input-bordered"  />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone number</span>
                    </label>

                    <input
                        name='number'
                        type="number"
                        placeholder="Phone number"
                        className="input focus:outline-none input-bordered"  />
                </div>

                <div className='flex mt-3 items-center justify-between'>
                    <label for="birthday">Appointment Date: </label>
                    <input type="date" id="Birthday" name='birthday' />
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>

                    <input
                        name='address'
                        type="text"
                        placeholder="Address"
                        className="input focus:outline-none input-bordered"  />
                </div>

                <div method="dialog" className='flex items-center justify-center my-5'>
                    <Link 
                    to='/login'
                    className="btn btn-success text-white w-full font-medium">Make Appointment</Link>
                </div>


            </form>

        </div>
    )
}
