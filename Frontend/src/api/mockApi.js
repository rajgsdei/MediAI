const MOCK_PATIENTS = [
  {id:1, full_name:'Alice Johnson', age:34, gender:'Female', medical_history:'Diabetes'},
  {id:2, full_name:'Bob Smith', age:45, gender:'Male', medical_history:'Hypertension'},
  {id:3, full_name:'Carlos Ruiz', age:29, gender:'Male', medical_history:''}
]

const MOCK_APPOINTMENTS = [
  {id:1, patient_id:1, patient_name:'Alice Johnson', date:'2026-01-10', status:'Completed'},
  {id:2, patient_id:2, patient_name:'Bob Smith', date:'2026-01-12', status:'Scheduled'}
]

import { apiFetch } from './client'

async function tryFetch(path){
  try{
    const res = await apiFetch(path, { credentials: 'include' })
    if(!res.ok) throw new Error('bad')
    return await res.json()
  }catch(e){
    return null
  }
}

export async function getPatients(){
  const remote = await tryFetch('/patients')
  if(remote) return remote
  return new Promise(res=>setTimeout(()=>res(MOCK_PATIENTS),200))
}

export async function getPatientById(id){
  const remote = await tryFetch(`/patients/${id}`)
  if(remote) return remote
  return new Promise(res=>setTimeout(()=>res(MOCK_PATIENTS.find(p=>p.id===id) || null),200))
}

export async function getAppointments(){
  const remote = await tryFetch('/api/appointments/')
  if(remote) return remote
  return new Promise(res=>setTimeout(()=>res(MOCK_APPOINTMENTS),200))
}
