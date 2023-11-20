import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const DefaultPage = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default DefaultPage;