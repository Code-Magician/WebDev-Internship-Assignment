import { motion } from 'framer-motion';
import React from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Header.scss';



const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Header = () => {
    return (
        <div className='app__header app__flex'>


            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info"
            >
                <div className='app__header-badge'>
                    <motion.div className='badge-cmp app__flex'
                        whileInView={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ opacity: 0.75 }}
                    >
                        <span>😎</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className='p-text'>
                                Get Lost in the World of Manga with Our Online Store
                            </p>
                            <h1 className='head-text'>Manga World</h1>
                        </div>
                    </motion.div>

                    <motion.div className='tag-cmp app__flex '
                        whileInView={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ opacity: 0.75 }}>
                        <p className='p-text'>Find Your Perfect Manga Match,</p>
                        <p className='p-text'>Explore a Universe of Manga,</p>
                        <p className='p-text'>Unleash Your Inner Otaku with Our Vast Selections</p>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, delayChildren: 1 }}
                className="app__header-img"
            >
                <img src={images.profile} alt="profile_bg" />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1.5, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle}
                    alt="profile-circle"
                    className='overlay_circle'
                />
            </motion.div>

            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
                {[images.C1, images.C2, images.C3].map(
                    (circle, index) => (
                        <motion.div
                            whileInView={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ opacity: 0.75 }}
                            className='circle-cmp app__flex'
                            key={`circle-${index}`}
                        >
                            <img src={circle} alt="circle" />
                        </motion.div>
                    )
                )}
            </motion.div>
        </div >
    )
}

export default AppWrap(
    MotionWrap(Header, 'app__about'),
    'home',
    'app__whitebg',
);