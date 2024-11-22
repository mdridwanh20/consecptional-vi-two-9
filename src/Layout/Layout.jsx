import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Componetns/Navbar/Navbar'


export default function Layout() {
    return (
        <>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </>
    )
}
