import React, {useState} from 'react';
import {Link} from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <div className='login-parent'>
            <div className="login-top">
                
            </div>
            <div className="row justify-content-center">                
                <div className="col-md-5">
                <lottie-player
                   src="https://assets6.lottiefiles.com/packages/lf20_yr6zz3wv.json" 
                   background="transparent" 
                   speed="1"                     
                   loop
                   autoplay
                   ></lottie-player>
                </div>

                <div className="col-md-4 z1">
                    
                    <div className="login-form">
                        
                        <h2>Entrar</h2>

                        

                        <input type="text" className="form-control" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        <input type="text" className="form-control" placeholder="password" value={email} onChange={(e)=>{setPassword(e.target.value)}} />
                        

                        <button className='my-3'>Entre</button>

                        <hr/>
                        <Link to='/register' > Click here to register</Link>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default LoginPage
