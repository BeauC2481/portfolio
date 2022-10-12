import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { images } from '../../constants';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

const Skills = () => {
  useEffect(() => {
    ReactTooltip.rebuild();
  });

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div
              className="app__flex"
              style={{ backgroundColor: '#faebc3' }}
            >
              <img src={images.javascript} alt="skill" />
            </div>
            <p className="p-text">Javascript</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div
              className="app__flex"
              style={{ backgroundColor: '#e3faff' }}
            >
              <img src={images.react} alt="skill" />
            </div>
            <p className="p-text">React JS</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div
              className="app__flex"
              style={{ backgroundColor: '#d7f7de' }}
            >
              <img src={images.node} alt="skill" />
            </div>
            <p className="p-text">Node JS</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div
              className="app__flex"
              style={{ backgroundColor: '' }}
            >
              <img src={images.nextjs} alt="skill" />
            </div>
            <p className="p-text">Next JS</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div
              className="app__flex"
              style={{ backgroundColor: '#ffdbd6' }}
            >
              <img src={images.html} alt="skill" />
            </div>
            <p className="p-text">HTML 5</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div
              className="app__flex"
              style={{ backgroundColor: '#ffd6f1' }}
            >
              <img src={images.sass} alt="skill" />
            </div>
            <p className="p-text">Sass</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div
              className="app__flex"
              style={{ backgroundColor: '#ededed' }}
            >
              <img src={images.solidity1} alt="skill" />
            </div>
            <p className="p-text">Solidity</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div
              className="app__flex"
              style={{ backgroundColor: '#cfd7ff' }}
            >
              <img src={images.css} alt="skill" />
            </div>
            <p className="p-text">CSS3</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div
              className="app__flex"
              style={{ backgroundColor: '#fff6cf' }}
            >
              <img src={images.hardhat} alt="skill" />
            </div>
            <p className="p-text">HardHat</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div
              className="app__flex"
              style={{ backgroundColor: '#dbfff7' }}
            >
              <img src={images.truffle} alt="skill" />
            </div>
            <p className="p-text">Truffle</p>
          </motion.div>

        </motion.div>
        <div className="app__skills-exp">
          <div>
            <motion.div
              className="app__skills-exp-item"
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">2021</p>
              </div>
              <motion.div className="app__skills-exp-works">

                <>
                  <OverlayTrigger
                    placement="top"
                    overlay={(
                      <Tooltip id="tooltip-1" className="skills-tooltip">
                        Revolution technology is a minor investing firm where I analysed small cap crypto currencies and clinical stage biotechnology companies
                      </Tooltip>
                    )}
                  >
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                    >
                      <h4 className="bold-text">Web3 and Biotechnology Analyst</h4>
                      <p className="p-text">Revolution Technology</p>
                    </motion.div>
                  </OverlayTrigger>
                </>

              </motion.div>
            </motion.div>
          </div>
          <div>
            <motion.div
              className="app__skills-exp-item"
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">2020</p>
              </div>
              <motion.div className="app__skills-exp-works">

                <>
                  <OverlayTrigger
                    placement="top"
                    overlay={(
                      <Tooltip id="tooltip-1" className="skills-tooltip">
                        After becoming one of the youngest people in Australia to complete high school I went on to pursue my passion for the sciences, however during downtime caused by shoulder surgery I decided to drop out and pursue my interest in web3
                      </Tooltip>
                    )}
                  >
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                    >
                      <h4 className="bold-text">Bachelor of Biotechnology</h4>
                      <p className="p-text">University of Queensland</p>
                    </motion.div>
                  </OverlayTrigger>
                </>

              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
