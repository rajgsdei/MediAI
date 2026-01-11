import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar(){
  return (
    <aside style={{width:220, padding:12, background:'#f8fafc'}}>
      <div style={{marginBottom:12}}>
        <img src="/src/assets/image/logo.png" alt="logo" style={{maxWidth:160}} />
      </div>
      <nav>
        <ul style={{listStyle:'none',padding:0}}>
          <li><Link to="/patients">Patients</Link></li>
          <li><Link to="/appointments">Appointments</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </aside>
  )
}
