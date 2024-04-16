import React, {useState} from 'react'
import '../style/Login.css'
import Button from './Button'


function Login ({ id, password, setSuccess, children }){

    const [inputs, setInputs] = useState({
        id:'',
        pw:''
    })

    const {id : $id, pw : $pw} = inputs

    const valueCheck = (e) => {
        const { name, value } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const login = (e) => {
        e.preventDefault()
        if($id === id && $pw === password){
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
                    <label><input type='text' placeholder='ID' onChange={valueCheck} value={$id} name='id' autoFocus/></label>
                    <label><input type='password' placeholder='PASSWORD' onChange={valueCheck} value={$pw} name='pw'/></label>
                </div>
                <div className='button-form'>
                    <Button shape='square' f={login}>LOGIN</Button>
                </div>
            </div>
            <div>{children}</div>
        </form>
    )
    
}

export default Login