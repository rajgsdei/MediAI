import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    // For now just store a fake token
    localStorage.setItem('token','fake-token')
    navigate('/patients')
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input value={username} onChange={e=>setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign in</button>
      </form>
    </div>
  )
}
