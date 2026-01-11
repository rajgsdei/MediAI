import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

export default function BaseLayout({children}){
  return (
    <div style={{display:'flex',minHeight:'100vh',flexDirection:'column'}}>
      <Header />
      <div style={{display:'flex',flex:1}}>
        <Sidebar />
        <main style={{flex:1,padding:20}}>{children}</main>
      </div>
      <footer style={{padding:12,textAlign:'center',background:'#f1f5f9'}}>© 2026 MediAI</footer>
    </div>
  )
}
