import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import PatientList from './pages/PatientList'
import PatientDetail from './pages/PatientDetail'
import Appointments from './pages/Appointments'
import Login from './pages/Login'

export default function App(){
  return (
    <BaseLayout>
      <Routes>
          <Route path="/" element={<Navigate to="/patients" replace />} />
          <Route path="/patients" element={<PatientList />} />
          <Route path="/patients/:id" element={<PatientDetail />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </BaseLayout>
  )
}
