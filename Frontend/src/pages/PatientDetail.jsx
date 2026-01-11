import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getPatientById } from '../api/mockApi'

export default function PatientDetail(){
  const { id } = useParams()
  const [patient, setPatient] = useState(null)

  useEffect(()=>{
    getPatientById(id).then(setPatient)
  },[id])

  if(!patient) return <div>Loading...</div>

  return (
    <div>
      <h2>{patient.name || patient.full_name}</h2>
      <p><strong>Age:</strong> {patient.age}</p>
      <p><strong>Gender:</strong> {patient.gender}</p>
      <p><strong>Notes:</strong> {patient.notes || patient.medical_history || '—'}</p>
    </div>
  )
}
