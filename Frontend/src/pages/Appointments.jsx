import React, {useEffect, useState} from 'react'
import { getAppointments } from '../api/mockApi'

export default function Appointments(){
  const [appointments, setAppointments] = useState([])
  useEffect(()=>{
    getAppointments().then(setAppointments)
  },[])

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map(a => (
          <li key={a.id}>{a.patient_name} — {a.date} — {a.status}</li>
        ))}
      </ul>
    </div>
  )
}
