import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'

import Cover from '../Componetns/Hero/Cover';
import Service_card from '../Componetns/Home/Service_card';
import Feedback from '../Componetns/Feedback/Feedback';


export default function Home() {
  const services = useLoaderData()
  const {servicesData, feedbackData} = services;

  
  return (
    <div>
        <Cover></Cover>

        <div className='container m-auto grid mt-20  gap-8 lg:grid-cols-3'>
            {
              servicesData.slice(0, 3).map((service) => <Service_card key={service.id} service={service}></Service_card>)
            }
        </div>

        <div className='container m-auto my-10 flex items-center justify-center'>
          <NavLink to='/ALL_Treatments' className='btn btn-neutral'>Show More Services</NavLink>
        </div>

        <Feedback feedbackData={feedbackData}></Feedback>

    </div>
  )
}
