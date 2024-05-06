import React,{useState} from 'react';
import './Login.css'


function LoginForm({SetPage}) {
    
    return (
        <div className='loginform_main'>
            <div className='login_message_div'>
                <h1>Welcome Back !</h1>
                <p>Welcome back our beloved HR! We're thrilled to see you again. We are hungry please order some food for us...!</p>
            </div>
            <div className='login_form_div'>
                <h2>Login to your account.</h2>
                <p>Kindly enter your registered email and password to access admin account of hungermania.</p>
                {
                   <form className='login_form'>
                    <label>Email *</label>
                    <input className='login_form_input' type="email"  placeholder='Email'/>
                    <label>Password *</label>
                    <input className='login_form_input' type="password" placeholder='Password' />
                    <input className='login_form_submit_btn' type="submit" value='Login'/>
                </form>
                }
            </div>
        </div>
    );
}

export default LoginForm;