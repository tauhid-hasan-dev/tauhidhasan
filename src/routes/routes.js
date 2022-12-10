import { createBrowserRouter } from "react-router-dom";
import Experiences from "../Components/Home/Home/Experiences";
import Home from "../Components/Home/Home/Home";
import Intro from "../Components/Home/Home/Intro";
import Projects from "../Components/Home/Home/Projects";
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

        ]
    }
])