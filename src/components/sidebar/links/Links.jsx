import { motion } from "framer-motion";

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        scale: [0.8, 1.1, 1],
        rotate: [0, 10, -10, 0],
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
            opacity: { duration: 0.5 }, // Smooth fade-in
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        scale: 0.8,                    // Shrink while closing
        rotate: 0,
        transition: {
            type: "tween",
            ease: "easeInOut", 
            duration: 0.4,
        },
    },
};

const Links = () => {

    const items = [
        "Homepage",
        "Services",
        "Portfolio",
        "Contact",
    ]

    return (
        <motion.div className="links" variants={variants}>{items.map((item) => (
            <motion.a 
                href={`#${item}`} 
                key={item} 
                variants={itemVariants}

                initial={{ scale: 1, rotate: 0 }}

                /* **Hover effect: 1** */      
                // whileHover={{
                //     rotate: [0, 5, -5, 0], 
                //     scale: [1, 1.1, 1],       // Zoom in and out effect
                //     transition: {
                //         duration: 0.6,        // Speed of the hover effect
                //         repeat: Infinity,     // Continuous animation while hovering
                //         repeatType: "mirror", // Reverse the effect on repeat
                //     },
                // }}
                // animate={{
                //     scale: 1,              // Ensure the element zooms out to its original size when not hovered
                //     rotate: 0,             // Reset rotation to zero when not hovered
                //     transition: {
                //         duration: 0.4,     // Speed of the transition when not hovering
                //         ease: "easeInOut", // Smooth easing
                //     }
                // }}


                /* **Hover effect: 2** */
                whileHover={{
                    scale: [1, 1.1, 1],       // Zoom in and out effect
                    transition: {
                        duration: 0.6,        // Adjust the speed of zoom in/out
                        repeat: Infinity,     // Repeat animation continuously while hovered
                        repeatType: "mirror", // Mirror the zoom in/out effect
                    },
                }}
                animate={{ scale: 1 }}

                whileTap={{
                    scale: 0.95,
                    fontSize: '35px',         // Reduce font size on tap
                    transition: {
                        duration: 0.1,        // Quick tap effect
                    },
                }}
            >   
                {item}
            </motion.a>
        ))}
        </motion.div>
    );
};

export default Links;
