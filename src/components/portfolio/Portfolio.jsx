import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
    {
        id: 1,
        title: "Weather App",
        img: "./Weather-App.gif",
        desc: "The weather app allows users to type in a city name to see the current weather. It shows important details like temperature, humidity, and wind speed. The design is simple and easy to use, making it quick for anyone to check the weather.",
        demoLink: "https://sayan-rajak-das.github.io/Web-Development/",
    },
    {
        id: 2,
        title: "Simon Game",
        img: "./Simon-game.gif",
        desc: "The Simon Game is a memory game created with HTML, CSS, and JavaScript, where players follow and repeat a growing sequence of colors and sounds. It offers a fun way to challenge memory skills while providing an engaging and enjoyable experience for players of all ages.",
        demoLink: "https://sayan-rajak-das.github.io/Simon-Game-using-HTML-CSS-JavaScript/",
    },
    {
        id: 3,
        title: "Task Management Web Application",
        img: "./task1.gif",
        desc: "A webpage includes a sticky navigation bar, interactive buttons, and forms, focusing on simplicity and user experience. It combines clean design elements with responsive functionality for ease of use.",
        demoLink: "https://sayan-rajak-das.github.io/Web-Development-Assignmnt-by-Fyle/",
    },
    {
        id: 4,
        title: "Text Style Editor",
        img: "./text-style.gif",
        desc: "This is a simple text styling tool that allows users to modify font family, text size, and color dynamically. It offers a range of font options, sizes, and colors for customizing text, as well as undo/redo functionality for easy editing.",
        demoLink: "",
    },
];

const Single = ({item}) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({ 
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">

                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button onClick={() => window.open(item.demoLink, "_blank")}>See Demo</button>
                    </motion.div>
                </div>  
                
            </div>         
        </section>
    );
};

const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id}/>
            ))}
        </div>
    );
};

export default Portfolio;

