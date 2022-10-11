import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants/index';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => (
  <>
    <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

    <div className="app__profiles">
      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: 'tween' }}
        className="app__profile-item"
      >
        <img src={images.about02} alt="title" />
        <h2 className="bold-text" style={{ marginTop: 20 }}>Web Designer</h2>
        <p className="p-text" style={{ marginTop: 10 }}>With skills in NextJS and ReactJS I can create functional and responsive web applications</p>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: 'tween' }}
        className="app__profile-item"
      >
        <img src={images.about04} alt="title" />
        <h2 className="bold-text" style={{ marginTop: 20 }}>Smart Contract Engineer</h2>
        <p className="p-text" style={{ marginTop: 10 }}>I enjoy designing smart contracts which serve as effective backends for decentralised applications</p>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: 'tween' }}
        className="app__profile-item"
      >
        <img src={images.frontend} alt="title" />
        <h2 className="bold-text" style={{ marginTop: 20 }}>Front End Developer</h2>
        <p className="p-text" style={{ marginTop: 10 }}>I am a frontend developer with a passion for building simple and aesthetic user interfaces for web apps as well as decentralised applications</p>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: 'tween' }}
        className="app__profile-item"
      >
        <img src={images.about03} alt="title" />
        <h2 className="bold-text" style={{ marginTop: 20 }}>DApp Developer</h2>
        <p className="p-text" style={{ marginTop: 10 }}>By combining my skills I can create beautiful and functional decentralised applications which bring the power of blockchain to you</p>
      </motion.div>
    </div>
  </>
);

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
