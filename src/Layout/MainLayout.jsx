import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Swal from 'sweetalert2'
import { Toaster } from "react-hot-toast";

// bg-[#131325] text-white

const MainLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;