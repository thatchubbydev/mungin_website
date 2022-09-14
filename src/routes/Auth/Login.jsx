import React from 'react'
import cocoa from '../../assets/cocoa.png'
import logo from '../../assets/logo-white-bg.png'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import AuthService from '../../services/auth.service'


const Login = () => {
  const initialValues = {
    email:'', 
    password:''
  }

  const [formValues, setformValues] = useState(initialValues)
  const handleChange = (event) => {
    const{name,value} = event.target
    setformValues({...formValues,[name]:value})
  }
  const [formErrors, setformErrors] = useState({})
  const [isSubmit, setisSubmit] = useState(false)
  const [Loading, setLoading] = useState(false)
  const [Message, setMessage] = useState("")

  const handleSubmit = (event) =>{
    event.preventDefault()
    setformErrors(validate(formValues))
    setisSubmit(true)
    setLoading(true)
    setMessage("")
  }
 
  useEffect(()=> {
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      AuthService.login(initialValues.email,initialValues.password).then(
        ()=>{
        <Link to={'/'}></Link>;
        window.location.reload()
      },
      error => {
        const resMessage = 
        (error.response &&
           error.response.data &&
           error.response.data.message) || 
        error.message ||
        error.toString();
      setLoading(false)
      setMessage(resMessage)
      })
    console.log(formValues)
  }else{setLoading(false)}
},[formErrors])


  

  const validate = (values) => {
    const errors = {}
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email){
      errors.email = 'input your email!!'
    }else if(!regex.test(values.email)){errors.email='please input a valid email!'}
    if(!values.password){
      errors.password = 'password is required!!'
    }else if (values.password.length < 4){
      errors.password = 'password must be greater than 4'
    }else if (values.password.length > 10){
      errors.password = 'password must be less than 10'
    }

    return errors
  }
  // console.log(formErrors)
  
  return (
    // paret container
    <div className='flex '>
      {/* <pre>{JSON.stringify(formValues,undefined,2)}</pre> */}
      {/* left container */}
      <div className='sm:hidden md:block'>
        <img src={cocoa}  className='h-max bg-contain' alt='cocoa'/>
      </div>
      {/* right container */}
      <div className='md:w-1/2 sm:w-full container mx-auto mt-10 ml-20'>
        <Link to={'/'}>
          <img src={logo} width={150} alt='Mungin'/>
        </Link>
        <h2 className='text-3xl font-semibold text-[#313131] mt-20 mb-6'>Welcome Back</h2>
        {/* form container */}
        <form onSubmit={handleSubmit}>
          {/* google button */}
          {/* <div className='flex justify-center w-4/5 border p-4 py-5 '>
            <img src={google} width={20} className='mr-2' alt='google'/>
            <button className='text-sm text-[#313131]'>Continue with Google</button>
          </div>
          <p className='text-[#888888] text-center w-4/5 py-4'>OR</p> */}
          
          <div className='text-[#313131] space-y-6'>
            {/* email */}
            <div>
              <p className='mb-2'>Email Address</p>
              <input type='email' name='email' value={formValues.email} onChange={handleChange} placeholder='hoteljerry@gmail.com' className='py-3 pl-4 flex-1  border w-4/5'/>
              <p className='text-red-500'>{formErrors.email}</p>

            </div>
            {/* password */}
            <div>
              <p className='mb-2'>Password</p>
              <input type='password' name='password' value={formValues.password} onChange={handleChange} placeholder='1234' className='py-3 pl-4 flex-1  border w-4/5'/>
              <p className='text-red-500'>{formErrors.password}</p>
            </div>
            {/* button container */}
            <div>
              <button className='py-6 pl-2 flex flex-1 justify-center font-bold border w-4/5 bg-[#17233C] text-white'>Login</button>
            </div>
            <p className='text-[#888888]'>Don't have an account? <Link to={'/register'}><span className='text-[#333333]'>Register</span></Link></p>
          </div>
        </form>
        {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='flex w-4/5 justify-center'>
            <p className='p-2 bg-[#83BF4F] rounded-lg text-white animate-pulse font-semibold px-4'>Login successful ✅ </p>
            </div>):null
}
      </div>
    </div>
  )
}

export default Login