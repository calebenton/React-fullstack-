import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Login() {
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")

    let navigate = useNavigate()

    const Login = () => {
        const data = {userName: userName, password: password}
        axios.post("http://localhost:3001/auth/login", data).then((response) => {
        if (response.data.error) {
        alert(response.data.error)
        }else
        sessionStorage.setItem("accessToken", response.data)
        navigate("/")
        })
    }

  return (
    <div className='loginContainer'>
        <input type="text" onChange={(event) => {setUsername(event.target.value)}}/>
        <input type='password' onChange={(event) => {setPassword(event.target.value)}}/>

        <button onClick={Login}> Login </button>
    </div>
  )
}

export default Login