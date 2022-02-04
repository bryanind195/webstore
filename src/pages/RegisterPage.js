import React, {useState} from 'react'

function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    return (
        <div className='register-parent'>
            <div className="row">                
                <div className="col-md-5">
                <lottie-player
                   src="https://assets6.lottiefiles.com/packages/lf20_yr6zz3wv.json" 
                   background="transparent" 
                   speed="1"                     
                   loop
                   autoplay
                   ></lottie-player>
                </div>

                <div className="col-md-4">
                    
                    <div className="login-form">
                        
                        <h2>Registro</h2>

                        <hr/>

                        <input type="text" className="form-control" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        <input type="text" className="form-control" placeholder="password" value={email} onChange={(e)=>{setPassword(e.target.value)}} />
                        <input type="text" className="form-control" placeholder="confirm password" value={email} onChange={(e)=>{setCpassword(e.target.value)}} />

                        <button>Registrese</button>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default RegisterPage
