import "./hero.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Motion variants for scroll icon
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

// Motion variants for sliding text
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
    window.open(
        "https://drive.google.com/file/d/1BShRL7mjSt6XXpnL9oNu-uKdoCSCHIed/view?usp=drive_link",
        "_blank",
        "noopener,noreferrer"
    );
};

const handleContactClick = () => {
    window.location.href = "#Contact";
};

const handlePortfolioClick = () => {
    window.location.href = "#Portfolio";
};

const Hero = () => {
    const texts = ["Full Stack Web Developer", "MERN Stack Specialist", "JavaScript Enthusiast"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(true);

    const TYPING_SPEED = 150; // Speed of typing
    const DELETING_SPEED = 100; // Speed of deleting
    const PAUSE_TIME = 2000; // Time to pause before deleting or typing

    useEffect(() => {
        const handleTyping = () => {
            const fullText = texts[currentTextIndex];
            if (!isDeleting) {
                // Typing effect
                setDisplayedText((prev) => fullText.substring(0, prev.length + 1));

                if (displayedText === fullText) {
                    // Once typing is complete, pause before deleting
                    setTimeout(() => setIsDeleting(true), PAUSE_TIME);
                }
            } else {
                // Deleting effect
                setDisplayedText((prev) => prev.substring(0, prev.length - 1));

                if (displayedText === "") {
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % texts.length); // Move to the next text
                }
            }
        };

        const typingTimeout = setTimeout(
            handleTyping,
            isDeleting ? DELETING_SPEED : TYPING_SPEED
        );

        return () => clearTimeout(typingTimeout);
    }, [displayedText, isDeleting, currentTextIndex]);

    // Blinking cursor effect
    useEffect(() => {
        const cursorBlinking = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500); // Cursor blinks every 500ms

        return () => clearInterval(cursorBlinking);
    }, []);

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>
                        Hi, I'm<br />
                        <span style={{ fontFamily: "Poppins, sans-serif" }}>SAYAN RAJAK DAS</span>
                    </motion.h2>

                    {/* Typewriter effect with cursor */}
                    <motion.div
                        className="changingText"
                        style={{ position: "relative", height: "50px" }}
                        variants={textVariants}
                    >
                        <motion.h1
                            style={{ whiteSpace: "nowrap", color: "#854CE6" }} // Ensuring text stays on one line
                        >
                            <span style={{ color: "white" }}>I'm a </span>
                            <span style={{ color: "#854CE6" }}>{displayedText}</span>
                            <span
                                className={`cursor ${cursorVisible ? "visible" : ""}`}
                                style={{ color: "#854CE6" }} // cursor color
                            >
                                |
                            </span>
                        </motion.h1>
                    </motion.div >

                    <motion.div className="description" variants={textVariants}>
                        I am a proficient web developer with expertise in 
                        data structures and algorithms. Skilled in building 
                        scalable applications and solving complex problems, with 
                        a focus on delivering efficient, high-quality solutions.
                    </motion.div>

                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button
                            onClick={handlePortfolioClick}
                            variants={textVariants}
                        >
                            See the Latest Works
                        </motion.button>

                        <motion.button
                            onClick={handleContactClick}
                            variants={textVariants}
                        >
                            Contact Me
                        </motion.button>
                        <motion.button
                            onClick={handleResumeClick}
                            variants={textVariants}
                        >
                            My Resume
                        </motion.button>
                    </motion.div>

                    {/* Scroll Icon Animation */}
                    <motion.img
                        src="./scroll.png"
                        alt="scroll icon"
                        variants={textVariants}
                        animate="scrollButton"
                    />
                </motion.div>
            </div>

            {/* Sliding Text Animation */}
            <motion.div
                className="slidingTextContainer"
                variants={sliderVariants}
                animate="animate"
            >
                MERN-Stack LeetCode DSA Programming
            </motion.div>

            <div className="imageContainer">
                <img src="./mypic.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;
