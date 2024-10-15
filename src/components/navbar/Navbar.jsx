import "./navbar.scss";
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar.jsx";

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span 
                    // initial={{ opacity: 0, scale: 0.5 }}
                    // animate={{ opacity: 1, scale: 1 }} 
                    // transition={{ duration: 0.5 }}

                    initial={{ opacity: 0, x: 50 }}                  // Start from right
                    animate={{ opacity: 1, x: 0 }}                   // Slide to original position
                    transition={{ duration: 0.5, ease: "easeOut" }}  // Smooth swipe effect
                    >
                        My Portfolio
                    </motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/sayan-rajak-das/"><img src="/Linkedin.jpeg" alt="" /></a>
                    <a href="https://www.geeksforgeeks.org/user/sayandas987123654/"><img src="/GeeksForGeeks.png" alt="" /></a>
                    <a href="https://leetcode.com/u/Sayan-Rajak-Das/"><img src="/Leetcode.png" alt="" /></a>                
                    <a href="https://github.com/Sayan-Rajak-Das"><img src="/GitHub.png" alt="" /></a>                  
                </div>
            </div>
        </div>
    )
}

export default Navbar;