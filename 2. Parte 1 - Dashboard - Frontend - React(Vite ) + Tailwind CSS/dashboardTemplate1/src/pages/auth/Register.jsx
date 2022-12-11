import React, {useState} from 'react'
import { Link } from 'react-router-dom'
/// Icons
import { RiMailFill, RiLockFill, RiEyeFill, RiEyeOffFill, RiUserLine } from "react-icons/ri"

const Register = () => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]'>
      <h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8'>
        Crear Cuenta
      </h1>
      <form className='mb-8'>
        <button className='flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100'>
          <img 
            src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" 
            className='w-4 h-4'
          />
          Registrate con Google
        </button>
        <div className='relative mb-4'>
          <RiUserLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
          <input 
            type="text"
            className="py-3 px-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
            placeholder='Nombre'
          />
        </div>
        <div className='relative mb-4'>
          <RiUserLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
          <input 
            type="text"
            className="py-3 px-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
            placeholder='Apellidos'
          />
        </div>
        <div className='relative mb-4'>
          <RiMailFill className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
          <input 
            type="email"
            className="py-3 px-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
            placeholder='Correo electrónico'
          />
        </div>
        <div className='relative mb-4'>
          <RiLockFill className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
          <input 
            type={showPassword ? "text" : "password"}
            className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg"
            placeholder='Contraseña'
          />
          { showPassword ? (
            <RiEyeFill 
              onClick={() => setShowPassword(!showPassword)} 
              className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary' 
            />
          ) : (
            <RiEyeOffFill 
              onClick={() => setShowPassword(!showPassword)} 
              className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary' 
            />
          )}
        </div>
        <div className='relative mb-4'>
          <RiLockFill className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
          <input 
            type={showPassword ? "text" : "password"}
            className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg"
            placeholder='Confirmar Contraseña'
          />
          { showPassword ? (
            <RiEyeFill 
              onClick={() => setShowPassword(!showPassword)} 
              className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary' 
            />
          ) : (
            <RiEyeOffFill 
              onClick={() => setShowPassword(!showPassword)} 
              className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary' 
            />
          )}
        </div>
        <div>
          <button 
            type='submit' 
            className="bg-primary text-white uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
          >
            Registrarme
          </button>
        </div>
      </form>
      <span className='flex items-center justify-center gap-2'>
        ¿Ya tienes cuenta?{" "}
        <Link 
          to="/auth" 
          className='text-primary/80 hover:text-gray-100 transition-colors'
        >
          Iniciar sesión
        </Link>
      </span>
    </div>
  )
}

export default Register