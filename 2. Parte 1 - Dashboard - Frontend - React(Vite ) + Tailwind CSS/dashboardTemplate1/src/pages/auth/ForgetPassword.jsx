import React from 'react'
import { Link } from 'react-router-dom'
/// Icons
import { RiMailFill } from "react-icons/ri"

const ForgetPassword = () => {

  return (
    <div className='bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]'>
      <h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8'>
        Recuperar Password
      </h1>
      <form className='mb-8'>
        <div className='relative mb-8'>
          <RiMailFill className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
          <input 
            type="email"
            className="py-3 px-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
            placeholder='Correo electrónico'
          />
        </div>
        <div>
          <button 
            type='submit' 
            className="bg-primary text-white uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
          >
            Recuperar
          </button>
        </div>
      </form>
      <div className='flex flex-col items-center gap-4'>
        <span className='flex items-center gap-2'>
            ¿Ya tienes cuenta?{" "}
            <Link 
                to="/auth"
                className='text-primary/80 hover:text-gray-100 transition-colors'
            >
                Ingresa
            </Link>
        </span>
        <span className='flex items-center gap-2'>
          ¿No tienes cuenta?{" "}
          <Link 
            to="/auth/registro" 
            className='text-primary/80 hover:text-gray-100 transition-colors'
          >
            Registrate
          </Link>
        </span>
      </div>
    </div>
  )
}

export default ForgetPassword