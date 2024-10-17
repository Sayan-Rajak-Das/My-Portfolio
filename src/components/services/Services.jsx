import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";


const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/sayan-rajak-das", "_blank", "noopener,noreferrer");
};

const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" })

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // animate= "animate"
            // whileInView= "animate"
            ref={ref}
            // animate={isInView && "animate"}
            animate={"animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>
                    <b>I specialize in developing scalable, efficient, and user-friendly web applications,</b>
                    <br /><b>bringing your ideas to life.</b>
                </p>
                <hr />
            </motion.div>

            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.jpeg" alt=""></img>
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Full-Stack</motion.b> Solutions
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b style={{ color: "gray" }} whileHover={{ color: "orange" }}>For Your</motion.b> Business
                    </h1>
                    <button onClick={handleLinkedinClick}><b>VISIT MY LINKEDIN</b></button>
                </div>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Frontend Development</h2>
                    <p>
                        I build intuitive, responsive, and dynamic user interfaces using modern frameworks such as
                        React.js, HTML, CSS, and JavaScript. My focus is on creating seamless user experiences.
                    </p>
                    <button onClick={() => window.open("https://www.w3schools.com/howto/howto_blog_become_frontenddev.asp", "_blank")}>
                        <b>Learn More</b>
                    </button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Backend Development</h2>
                    <p>
                        I design and develop robust server-side architectures with Node.js and Express, ensuring
                        performance and security. From database management to API integration, I provide complete backend solutions.
                    </p>
                    <button onClick={() => window.open("https://medium.com/@ibrahimhz/creating-your-first-backend-with-node-js-step-by-step-guide-892769af4cb0", "_blank")}>
                        <b>Learn More</b>
                    </button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Database Management</h2>
                    <p>
                        With proficiency in MongoDB, I manage everything from schema design to optimization, ensuring your data is securely stored and efficiently retrieved.
                    </p>
                    <button onClick={() => window.open("https://www.w3schools.com/mongodb/", "_blank")}>
                        <b>Learn More</b>
                    </button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Deployment</h2>
                    <p>
                        I specialize in deploying applications to production environments, ensuring they run efficiently and reliably. My approach emphasizes best practices for smooth deployment and effective management.
                    </p>
                    <button onClick={() => window.open("https://www.geeksforgeeks.org/ways-to-host-your-full-stack-app-for-free/", "_blank")}>
                        <b>Learn More</b>
                    </button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;