import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Service_card from '../Componetns/Home/Service_card'

export default function ALL_Treatments() {
  const services = useLoaderData()
  return (
    <div className='my-20'>
      <div className='container m-auto grid mt-20  gap-8 lg:grid-cols-3'>
        {
          services.map((service) => <Service_card key={service.id} service={service}></Service_card>)
        }
      </div>
    </div>
  )
}
