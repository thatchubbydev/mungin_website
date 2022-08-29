import React from 'react'
import cocoa from '../../assets/cocoa.png'
import logo from '../../assets/logo-white-bg.png'
import google from '../../assets/google-s.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


const Register = () => {
  const initialValues = {
   name:'',
   email:'', 
   password:'', 
   farmno:'', 
   farmnames:'', 
   locations:'', 
   animalfarm:'', 
   animalsize:'', 
   cropfarm:'', 
   cropsize:'', 
   otherfarm:'', 
   othersize:'', 
   boolean:''
  }
  const [formValues, setformValues] = useState(initialValues)
  const handleChange = (event) => {
    const {name,value} = event.target
    setformValues({...formValues,[name]:value})
  }
  const [farmType, setfarmType] = useState('')
  const [formErrors, setformErrors] = useState({})
  const [isSubmit, setisSubmit] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setformErrors(validate(formValues))
    setisSubmit(true)
  }

  useEffect(()=> {
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(formValues)
  }},[formErrors])
  

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name){
      errors.name = 'name is required!'
    }
    if (!values.email){
      errors.email = 'Email is required!'
    }else if(!regex.test(values.email)){errors.email='please input a valid email!'}
    if (!values.password){
      errors.password = 'Password is required!'
    } else if(values.password.length < 4){
      errors.password = 'password must exceed 4 characters!'
    }else if(values.password.length > 10){
      errors.password = 'password must be less than 10 characters!'
    }
    if (!values.boolean){
      errors.boolean = 'cannot be blank!'
    }
    
    return errors
  }

  // errors is being run inside setformErrors() which is the formErrors object 
  

  
  return (
    // paret container
    <div className='flex '>
      
      {/* left container */}
      <div className='sm:hidden md:block'><img src={cocoa}  className='h-max bg-contain' alt='cocoa'/></div>
      {/* right container */}
      <div className='md:w-1/2 sm:w-full container mx-auto mt-10 ml-20'>
        {/* error message */}
      {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='flex w-4/5 justify-center'>
        <p className='p-2 bg-[#83BF4F] rounded-lg text-white animate-pulse font-semibold px-4'>Registered successfully ✅ </p>
        </div>):null
        // ()
      }
      {/* {formErrors.length === 0 ? <div className='flex w-4/5 justify-center '><p className='p-2 px-4 bg-red-500 rounded-lg text-white font-semibold animate-pulse'>Failed 😔 </p></div> :null} */}

        <Link to={'/'}>
          <img className='mt-6' src={logo} width={150} alt='Mungin'/>
        </Link>
        <form onSubmit={handleSubmit}>
          <h2 className='text-3xl font-semibold text-[#313131] mt-20 mb-6'>Register with us</h2>
          {/* google button */}
          <div className='flex justify-center font-semibold w-4/5 border p-4 py-5 '>
            <img src={google} width={20} className='mr-2' alt='google'/>
            <button className='text-sm text-[#313131]'>Continue with Google</button>
          </div>
          <p className='text-[#888888] text-center w-4/5 py-4'>OR</p>
          {/* form container */}
          <div className='text-[#313131] space-y-6'>
              {/* name container */}
            <div>
              <p className='mb-2'>Full Name</p>
              <input type='text' value={formValues.name} name='name' onChange={handleChange} placeholder='hotel jerry' className='py-3 pl-4 flex-1  border w-4/5'/>
              <p className='text-red-500'>{formErrors.name}</p>
            </div>
            {/* email */}
            <div>
              <p className='mb-2'>Email Address</p>
              <input type='email' value={formValues.email} name='email' onChange={handleChange} placeholder='hoteljerry@gmail.com' className='py-3 pl-4 flex-1  border w-4/5'/>
              <p className='text-red-500'>{formErrors.email}</p>
            </div>
            {/* password */}
            <div>
              <p className='mb-2'>Password</p>
              <input type='password' placeholder='' name='password' onChange={handleChange} className='py-3 pl-4 flex-1  border w-4/5'/>
              <p className='text-red-500'>{formErrors.password}</p>
            </div>
            {/* radio container */}
            <div>
              <p className='pb-2'>Are You a Farmer?</p>
              <div className='space-x-12 flex text-[#888888]'>
                <div><input type='radio' name='boolean' value='yes'onChange={handleChange}/><span className='ml-1'>Yes</span></div>
                <div><input type='radio' name='boolean' value='No' onChange={handleChange}/><span className='ml-1'>No</span></div>  
              </div>
            </div>
            {/* conditional div */}
            {formValues.boolean === 'yes' &&
            <div className='space-y-6 pt-2'>
              {/* number of farms */}
              <div>
                <p className='mb-2'>Number of farm(s)</p>
                <input type='number' name= 'farmno' value={formValues.farmno} onChange={handleChange} placeholder='2' className='py-3 pl-4 flex-1  border w-4/5'/>
              </div>
              {/* farm names */}
              <div>
                <p className='mb-2'>Farm(s) Names</p>
                <input type='text' name='farmnames' onChange={handleChange} placeholder='Mungin Farms' className='py-3 pl-4 flex-1  border w-4/5'/>
              </div>
              {/* location */}
              <div>
                <p className='mb-2'>Location(s)</p>
                <input type='text' name='locations' onChange={handleChange} placeholder='Lagos' className='py-3 pl-4 flex-1  border w-4/5'/>
              </div>
              {/* drop down menu */}
              <div>
                <p className='pb-2'>Farm Type</p>
                <div>
                  <select value={farmType} onChange={(e)=>setfarmType(e.target.value)}  className='bg-white border text-[#888888] flex justify-center font-semibold w-4/5 p-4 py-3'>
                    <option value="">Select Farm Type</option>
                    <option value="Animal">Animal</option>
                    <option value="Crop">Crop</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Animal farm container */}
              {farmType === 'Animal' && <div className='space-y-6'>
                {/* Name(s) */}
                <div>
                  <p className='mb-2'>Name(s)</p>
                  <input type='text' name='animalfarm' onChange={handleChange} placeholder='Animal Reserve' className='py-3 pl-4 flex-1  border w-4/5'/>
                </div>
                {/* Size */}
                <div>
                  <p className='mb-2'>Size</p>
                  <input type='text' name='animalsize' onChange={handleChange}  placeholder='2sqkm' className='py-3 pl-4 flex-1  border w-4/5'/>
                </div>
              </div>}
                
              {/* Crop farm container */}
              {farmType === 'Crop' && 
               <div className='space-y-6'>
                {/* Name(s) */}
                <div>
                  <p className='mb-2'>Name(s)</p>
                  <input type='text' name='cropname' onChange={handleChange} placeholder='Crop Reserve' className='py-3 pl-4 flex-1  border w-4/5'/>
                </div>
                {/* Size */}
                <div>
                  <p className='mb-2'>Size</p>
                  <input type='text' name='cropsize' onChange={handleChange} placeholder='2sqkm' className='py-3 pl-4 flex-1  border w-4/5'/>
                </div>
              </div>}  
             
              {/* Other farm container */}
              {farmType === 'Other' &&
              <div className='space-y-6'>
                {/* Name(s) */}
                <div>
                  <p className='mb-2'>Name(s)</p>
                  <input type='text' name='othername' onChange={handleChange} placeholder='Other type' className='py-3 pl-4 flex-1  border w-4/5'/>
                </div>
                {/* Size */}
                <div>
                  <p className='mb-2'>Size</p>
                  <input type='text' name='othersize' onChange={handleChange} placeholder='2sqkm' className='py-3 pl-4 flex-1  border w-4/5'/>
                </div>
              </div> }
              
              
              
            </div>}
            
            
            {/* button container */}
              <div>
                <button className='py-6 pl-2 flex flex-1 justify-center font-bold border mb-4 w-4/5 bg-[#17233C] text-white'>Register</button>
              </div>
              <p className='text-[#888888] pb-12'>Already have an account? <Link to={'/login'}><span className='text-[#333333]'>Login</span></Link></p>
           </div>
          </form>
        
      </div>
    </div>
  )
}

export default Register