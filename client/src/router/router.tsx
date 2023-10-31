import { createBrowserRouter} from 'react-router-dom';
import {Links, Login, Preview, Profile, Register} from '../pages'
import { Navbar } from '../components';

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
       
        element: <Navbar/>,
        children: [
            {
                path: "links",
                element: <Links/>
            },
            {
                path: 'details',
                element: <Profile/>
            }
        ]
    },
    {
        path: "/preview",
        element: <Preview/>
    }

])