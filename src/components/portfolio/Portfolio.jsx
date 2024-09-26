import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";


const items = [
    {
        id: 1,
        title: "React Commerse",
        img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quasi fugit fugiat consequuntur quaerat modi delectus architecto ? Maiores officia modi porro animi dolorem voluptates aspernatur repellat commodi doloremque ratione, iure quasi.",
    },
    {
        id: 2,
        title: "Next.js Blog",
        img: "https://images.pexels.com/photos/28451399/pexels-photo-28451399.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quasi fugit fugiat consequuntur quaerat modi delectus architecto ? Maiores officia modi porro animi dolorem voluptates aspernatur repellat commodi doloremque ratione, iure quasi.",
    },
    {
        id: 3,
        title: "Vanila JS App",
        img: "https://images.pexels.com/photos/28176070/pexels-photo-28176070.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quasi fugit fugiat consequuntur quaerat modi delectus architecto ? Maiores officia modi porro animi dolorem voluptates aspernatur repellat commodi doloremque ratione, iure quasi.",
    },
    {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=400",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quasi fugit fugiat consequuntur quaerat modi delectus architecto ? Maiores officia modi porro animi dolorem voluptates aspernatur repellat commodi doloremque ratione, iure quasi.",
    },
];

const Single = ({item}) => {
    return (
        <section>
            {item.title}
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

