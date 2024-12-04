import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Errorpage from "../Components/Errorpage";
import Home from "../Layout/Home";
import AddReview from "../Components/AddReview";

const router = createBrowserRouter([
{
    path:'/',
    element:<MainLayout></MainLayout>,
    errorElement:<Errorpage></Errorpage>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/addReview',
            element:<AddReview></AddReview>
        }
    ]
}
])

export default router;