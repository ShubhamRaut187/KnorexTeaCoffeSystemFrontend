import React,{useState} from 'react';
import './Login.css'


function LoginForm({SetPage}) {
    let [email,setEmail] = useState(null);
    let [password,setPassword] = useState(null);
    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            let result = await fetch(`http://localhost:8080/auth/api/v1/login`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    email,
                    password
                })
            })
            let response = await result.json();
            console.log(response);
            if(response.status === 200){
                console.log('login');
            }
            else{
                console.log('login rejected');
            }
        } catch (error) {
            console.log('Error while login',error);
        }
    }
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
                   <form className='login_form' onSubmit={handleLogin}>
                    <label>Email *</label>
                    <input className='login_form_input' type="email"  placeholder='Email' onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                    <label>Password *</label>
                    <input className='login_form_input' type="password" placeholder='Password' onChange={(e)=>{
                        setPassword(e.target.value);
                    }}/>
                    <input className='login_form_submit_btn' type="submit" value='Login'/>
                </form>
                }
            </div>
        </div>
    );
}

export default LoginForm;