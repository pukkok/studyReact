import React, {useState, useEffect} from 'react'
import '../style/Login.css'
import Button from './Button'


function Login ({ id, password, setSuccess }){
    
    const [inputId, setInputId] = useState('')
    const [inputPassword, setPassword] = useState('')

    const valueCheck = (e) => {
        const { name, value } = e.target

        if(name==='id'){
            setInputId(value)
        }
        if(name==='password'){
            setPassword(value)
        }
    }

    const login = (e) => {
        e.preventDefault()
        if(inputId === id && inputPassword === password){
            alert('로그인 성공!')
            return setSuccess(true)
        }else{
            alert('로그인 실패!')
        }
    }

    return(
        <form>
            <legend>LOGIN</legend>
            <div className='login-form'>
                <div className='label-form'>
                    <label><input type='text' placeholder='ID' onChange={valueCheck} value={inputId} name='id'/></label>
                    <label><input type='password' placeholder='PASSWORD' onChange={valueCheck} value={inputPassword} name='password'/></label>
                </div>
                <div>
                    <Button shape='square' f={login}>로그인</Button>
                </div>
            </div>
        </form>
    )
    
}

export default Login