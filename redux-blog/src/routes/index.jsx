import {createBrowserRouter} from "react-router-dom"
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import SingleBlogPage from "../components/SingleBlogPage";
import CreateBlog from "../components/CreateBlog";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: (
            <h3 className="text-center">We didnt find anything...</h3>
        ),
        children: [
            {
                path: "/",
                element: <App/>
            },
            {
                path: "/blogs/:blogId",
                element: <SingleBlogPage/>
            },
            {
                path: "/blogs/create-blog",
                element: <CreateBlog/>
            },
        ]
    }
])
