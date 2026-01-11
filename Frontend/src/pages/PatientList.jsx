import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { getPatients } from '../api/mockApi'

export default function PatientList(){
  const [patients,setPatients] = useState([])
  useEffect(()=>{
    getPatients().then(setPatients)
  },[])

  return (
    <div>
      <h2>Patients</h2>
      <ul>
        {patients.map(p=> (
          <li key={p.id || p._id}>
            <Link to={`/patients/${p.id || p._id}`}>{p.name || p.full_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
