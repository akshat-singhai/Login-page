import React from 'react'
import './Login_Page.css'
import { useFormik } from 'formik';
import styled from 'styled-components';
import { signUpSchema } from '../schemas';
import { ToastContainer, toast } from 'react-toastify';
const initialValues = {
  email: "",
  password: "",
  ConfirmPassword: "",
}
const login_page = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
    }
  })
  const handleOnClick =()=>{
    if ( values.email===""){
      toast.warn("PLEASE FULFIL YOUR FORM ",{
        theme: "colored",
        autoClose: 5000,
      });
    }
    else if(values.password!=values.ConfirmPassword ) {
      toast.error("Please Enter Validate Password",{
        theme: "colored",
        autoClose: 5000,
      });
    }
      else{
      toast.success("Login Successfully",{
        theme: "colored",
        autoClose: 5000,
      });
      
     }
    
  }
  return (
  <>
      <ToastContainer />
    <div className="container" >
      <div className="form_area" >
        <p className="title">Login</p>
        <form onSubmit={handleSubmit}>
          <div className="form_group">
            <label className="sub_title" htmlFor="email">email</label>
            <input placeholder="Enter your full email" className="form_style" type="email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} autoComplete="off" />
          </div>
              {errors.email && touched.email ?(<p className='err'>{errors.email} </p>): null}
          <div className="form_group">
            <label className="sub_title" htmlFor="password">Password</label>
            <input placeholder="Enter your password" id="password" className="form_style" type="password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
          </div>
          {errors.password && touched.password ?(<p className='err'>{errors.password} </p>): null}
          <div className="form_group">
            <label className="sub_title" htmlFor="Confirm password">Confirm Password</label>
            <input placeholder="Enter your password" id="ConfirmPassword" className="form_style" type="password" name='ConfirmPassword' value={values.ConfirmPassword} onChange={handleChange} onBlur={handleBlur} />
          </div>
          {errors.ConfirmPassword && touched.ConfirmPassword ?(<p className='err'>{errors.ConfirmPassword} </p>): null}
          <div>
            <button className="btn" onClick={handleOnClick}>Login</button>
            <p> <a className="link" target='blank' href='https://www.linkedin.com/in/akshat-singhai-727bb5302/'>Click Here To Visit My  Linkedin Profile</a></p></div> </form></div></div>
      </>
  );
}





export default login_page
