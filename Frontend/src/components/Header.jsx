import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header style={{background:'#0f172a',color:'#fff',padding:12}}>
      <nav style={{display:'flex',gap:12}}>
        <Link to="/patients" style={{color:'#fff'}}>Patients</Link>
        <Link to="/appointments" style={{color:'#fff'}}>Appointments</Link>
        <Link to="/login" style={{color:'#fff',marginLeft:'auto'}}>Login</Link>
      </nav>
    </header>
  )
}
