import React, { useContext, useState } from 'react'
import { authContext } from '../../AuthProvider/AuthProvider'
import { Link, useLocation, useNavigate } from 'react-router-dom';


export default function Login() {
  const { handlerGoogleLogin, handlerLogin } = useContext(authContext)
  const [error, setError] = useState(" ")

  const location = useLocation();
  const navigate = useNavigate()

  const handlerSubmitLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    handlerLogin(email, password)
      .then(res => {
        navigate(location?.state?.from)

      }).catch(error => {
        setError(error.message);

      })


    const handlerGoogleLogin = () =>{
      handlerGoogleLogin()
      .then(res =>{
          navigate(location?.state?.form)
      })
    }

  }


  return (
    <div className='container m-auto'>

      <div className='max-w-lg m-auto border rounded-lg shadow-lg'>

        <form onSubmit={handlerSubmitLogin} className="card-body">
          <h1 className='font-bold text-2xl text-center'>LogIn</h1>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              name='email'
              type="email"
              placeholder="email"
              className="input focus:outline-none input-bordered" required />

          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              name='password'
              type="password"
              placeholder="password"
              className="input focus:outline-none input-bordered" required />

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>

          <div>

            <p className='text-red-600'>
              {

                error.includes("/")
                  ? error.split("/")[1].slice(0, 18)
                  : error

              }
            </p>

          </div>

          {/* <div className="form-control mt-6">

            <Link 
              type="submit"
              className="btn btn-success text-white">Login
            </Link>
          </div> */}

          <div className='flex flex-col w-full gap-2'>

            <Link 
              type="submit"
              className="btn btn-success text-white w-full font-medium">Login
            </Link>

            <button
              onClick={handlerGoogleLogin}
              className="btn btn-neutral text-white w-full font-medium">Login With Google
            </button>

          </div>




          <p className='text-center'>Have you any account ? please
            <Link to='/signUp' className='font-bold text-green-700'> Sign Up</Link> </p>

        </form>

      </div>



    </div>
  )
}
