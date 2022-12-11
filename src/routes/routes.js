import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Details from "../Components/Details/Details";
import Home from "../Components/Home/Home/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }


        ]
    },
    {
        path: '/project/details/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`https://portfolio-tauhid-server.vercel.app/projects/${params.id}`)
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    }
])