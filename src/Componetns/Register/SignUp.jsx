import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

export default function SignUp() {

  const { handlerGoogleLogin, handlerSignUp, manageProfile } = useContext(authContext)
  const [error, setError] = useState(" ")

  const handlerSubmitSignup = (e) => {
    e.preventDefault();
    setError('')
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const comPassword = e.target.comPassword.value;

    if (password.length < 6) {
      setError("Password must contain at least 6 character")
      return;
    }

    if (password !== comPassword) {
      setError("Password didn't match ")
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter")
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one Uppercase letter")
      return;
    }

    handlerSignUp(email, password)
      .then(res => {
        manageProfile(name, image)
      })

  }


  return (

    <div className='max-w-4xl m-auto my-8'>

      {/* <button
        onClick={handlerGoogleLogin}
        className='btn'> Google Login
      </button> */}

      <form onSubmit={handlerSubmitSignup} className="card-body border rounded-lg shadow-lg p-7">

        <h1 className='font-bold text-2xl '>Sign Up</h1>

        <div className='flex gap-2'>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>

            <input
              name='name'
              type="text"
              placeholder="Name"
              className="input focus:outline-none input-bordered" />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              name='email'
              type="email"
              placeholder="Email"
              className="input focus:outline-none input-bordered" required />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>

          <input
            name='image'
            type="text"
            placeholder="Photo"
            className="input focus:outline-none input-bordered" />
        </div>


        <div className='flex items-center gap-2'>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              name='password'
              type="password"
              placeholder="Password"
              className="input focus:outline-none input-bordered" required />
          </div>




          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>

            <input
              name='comPassword'
              type="password"
              placeholder="Password"
              className="input focus:outline-none input-bordered" required />
          </div>

        </div>

        <div>
          {
            error && <p className='text-red-600'> {error} </p>
          }
        </div>

        <div className='flex items-center justify-center my-5'>

          <div className='flex flex-col w-72 gap-2'>

            <Link to='/home'
              type="submit"
              className="btn btn-success text-white w-full font-medium">Sign Up
            </Link>

            <button
              onClick={handlerGoogleLogin}
              className="btn btn-neutral text-white w-full font-medium">Login With Google
            </button>

          </div>

        </div>

        <div>
          <p className='text-center'>Already account ? please
            <Link to='/login' className='font-bold text-green-700'> Login</Link> </p>
        </div>


      </form>

    </div>

  )
}
