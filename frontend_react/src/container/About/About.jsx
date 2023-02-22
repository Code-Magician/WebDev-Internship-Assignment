import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';




const About = () => {
    const [abouts, setAbouts] = useState([

        {
            id: 1,
            imgUrl: images.m1,
            title: "Attack on Titan",
            description: "Attack on Titan Manga"
        },
        {
            id: 2,
            imgUrl: images.m2,
            title: "Your Name",
            description: "Your Name Manga"
        },
        {
            id: 3,
            imgUrl: images.m3,
            title: "Demon Slayer",
            description: "Demon Slayer Manga"
        },
        {
            id: 4,
            imgUrl: images.m4,
            title: "Itachi",
            description: "Itachi Manga"
        },
        {
            id: 5,
            imgUrl: images.m5,
            title: "ChainSaw Man",
            description: "ChainSaw Man Manga"
        },
        {
            id: 6,
            imgUrl: images.m6,
            title: "Jujutsu Kiesen",
            description: "Jujutsu Kiesen Manga"
        },
        {
            id: 7,
            imgUrl: images.m7,
            title: "Berserk",
            description: "Berserk Manga"
        },
        {
            id: 8,
            imgUrl: images.m8,
            title: "One Piece",
            description: "One Piece Manga"
        }
    ]);



    return (
        <>
            <motion.div className='app__header-text app__flex'
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ opacity: 0.75 }}
            >
                <h2 className='head-text'>Anime is more than just a genre, <span>it's a culture and a way of life.</span> <br /> It has the power to transport us to fantastical worlds <span>and inspire us with its themes of courage, friendship, and perseverance.</span></h2>
            </motion.div>

            <div className='app__profiles'>
                {
                    abouts.map(
                        (about, index) => (
                            <motion.div
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ opacity: 0.75 }}
                                className="app__profile-item"
                                key={about.title + index}
                            >
                                <img src={about.imgUrl} alt={about.title} />
                                <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
                                <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
                            </motion.div>
                        )
                    )
                }
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg',
);