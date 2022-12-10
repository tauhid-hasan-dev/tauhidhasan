import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Intro from "../Components/Home/Home/Intro";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/intro',
                element: <Intro></Intro>
            },
        ]
    }
])