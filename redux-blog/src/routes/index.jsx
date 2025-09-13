import {createBrowserRouter} from "react-router-dom"
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import SingleBlogPage from "../components/SingleBlogPage";
import CreateBlog from "../components/CreateBlog";
import EditBlog from "../components/EditBlog";
import Authors from "../components/UsersList";

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
                path: "/authors",
                element: <Authors/>
            },
            {
                path: "/blogs/:blogId",
                element: <SingleBlogPage/>
            },
            {
                path: "/blogs/edit-blog/:blogId",
                element: <EditBlog/>
            },
            {
                path: "/blogs/create-blog",
                element: <CreateBlog/>
            },
        ]
    }
])
