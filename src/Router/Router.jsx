import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Errorpage from "../Components/Errorpage";
import Home from "../Layout/Home";
import AddReview from "../Components/AddReview";
import AllReview from "../Components/AllReview";
import ReviewDetails from "../Components/ReviewDetails";
import MyReview from "../Components/MyReview";
import UpdateReview from "../Components/UpdateReview";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
{
    path:'/',
    element:<MainLayout></MainLayout>,
    errorElement:<Errorpage></Errorpage>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=> fetch('http://localhost:5000/review')
        },
        {
            path:'/addReview',
            element:<AddReview></AddReview>
        },
        {
            path:'/Reviews',
            element:<AllReview></AllReview>,
            loader:()=> fetch('http://localhost:5000/review')
        },
        {
            path:'/review/:id',
            element:<ReviewDetails></ReviewDetails>,
            loader:({params})=> fetch(`http://localhost:5000/review/${params.id}`)
        },
        {
            path:'/myreview',
            element:<MyReview></MyReview>,
            loader:()=> fetch('http://localhost:5000/review')
        },
        {
            path:'/updateReview/:id',
            element:<UpdateReview></UpdateReview>,
            loader:({params})=> fetch(`http://localhost:5000/review/${params.id}`)
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }

    ]
}
])

export default router;