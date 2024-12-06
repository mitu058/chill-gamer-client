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
import TopReview from "../Components/TopReview";
import MyWatchList from "../Components/MyWatchList";

const router = createBrowserRouter([
{
    path:'/',
    element:<MainLayout></MainLayout>,
    errorElement:<Errorpage></Errorpage>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=> fetch('https://chill-gamer-server-beta.vercel.app/review')
        },
        {
            path:'/addReview',
            element:<AddReview></AddReview>
        },
        {
            path:'/Reviews',
            element:<AllReview></AllReview>,
            loader:()=> fetch('https://chill-gamer-server-beta.vercel.app/review')
        },
        {
            path:'/review/:id',
            element:<ReviewDetails></ReviewDetails>,
            loader:({params})=> fetch(`https://chill-gamer-server-beta.vercel.app/review/${params.id}`)
        },
        {
            path:'/myreview',
            element:<MyReview></MyReview>,
            loader:()=> fetch('https://chill-gamer-server-beta.vercel.app/review')
        },
        {
            path:'/updateReview/:id',
            element:<UpdateReview></UpdateReview>,
            loader:({params})=> fetch(`https://chill-gamer-server-beta.vercel.app/review/${params.id}`)
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/topReview',
            element:<TopReview></TopReview>,
            loader:()=> fetch('https://chill-gamer-server-beta.vercel.app/review')
        },
        {
            path:'/myWatchlist',
            element:<MyWatchList></MyWatchList>,
            loader:()=> fetch('https://chill-gamer-server-beta.vercel.app/watchlist')


        }

    ]
}
])

export default router;