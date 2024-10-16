import "./hero.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: [0, 10, 0],
        transition: {
            duration: 1.5,
            repeat: Infinity,
        },
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-280%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1BShRL7mjSt6XXpnL9oNu-uKdoCSCHIed/view?usp=drive_link", "_blank", "noopener,noreferrer");
};

const handleContactClick = () => {
    window.location.href = "#Contact";
};

const handlePortfolioClick = () => {
    window.location.href = "#Portfolio";
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>SAYAN RAJAK DAS</motion.h2>
                    <motion.h1 variants={textVariants}>Full Stack Web Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants} onClick={handlePortfolioClick}>See the Latest Works</motion.button>
                        <motion.button variants={textVariants} onClick={handleContactClick}>Contact Me</motion.button>
                        <motion.button 
                            variants={textVariants} 
                            onClick={handleResumeClick}
                        >
                            My Resume
                        </motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="./scroll.png" alt=""></motion.img>
                </motion.div>
            </div>

            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                MERN-Stack LeetCode DSA Programming
            </motion.div>

            <div className="imageContainer">
                <img src="./mypic.png" alt=""></img>
            </div>
        </div>
    );
};

export default Hero;
