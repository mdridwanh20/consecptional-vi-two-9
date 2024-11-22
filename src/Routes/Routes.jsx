import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPages from "../Pages/ErrorPages";
import Home from "../Pages/Home";
import About from "../Pages/ALL_Treatments";
import ALL_Treatments from "../Pages/ALL_Treatments";
import My_Appointments from "../Pages/My_Appointments";
import My_Profile from "../Pages/My_Profile";
import Details from "../Componetns/Card_Details/Details";
import Login from "../Componetns/Register/Login";
import SignUp from "../Componetns/Register/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [

            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    const servicesRes = await fetch('/Services.json');
                    const servicesData = await servicesRes.json();

                    const feedbackRes = await fetch('/Feedback.json');
                    const feedbackData = await feedbackRes.json();

                    return {servicesData, feedbackData}
                }
            },

           
            {
                path: '/home',
                element: <Home></Home>,
                loader: async () => {
                    const servicesRes = await fetch('/Services.json');
                    const servicesData = await servicesRes.json();

                    const feedbackRes = await fetch('/Feedback.json');
                    const feedbackData = await feedbackRes.json();

                    return {servicesData, feedbackData}
                }
            },

           
            {
                path: '/ALL_Treatments',
                element: <ALL_Treatments></ALL_Treatments>,
                loader: () => fetch('/Services.json')
            },
            {
                path: '/details/:id',
                element: <PrivateRoute> <Details></Details> </PrivateRoute> ,
                loader: async ({params}) =>{
                    const res = await fetch(`/Services.json`)
                    const data = await res.json()
                    const singleData = data.find(d=>d.id == params.id)
                    return singleData;
                }
            },
            {
                path: '/My_Appointments',
                element: <PrivateRoute> <My_Appointments></My_Appointments> </PrivateRoute>
            },
            {
                path: '/My-Profile',
                element: <My_Profile></My_Profile>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router