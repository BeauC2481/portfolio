import React, { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';

const Work = () => {
  const [works] = useState([]);
  const [setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  function renderWorks() {
    if (activeFilter === 'All') {
      return (
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          <div className="app__work-item app__flex">
            <div
              className="app__work-img app__flex"
            >

              <img src={images.portfolio2} alt="name" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href="blank" target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href="blank" target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">Portfolio Website</h4>
              <p className="p-text" style={{ marginTop: 10 }}>A front end web application with a modern UI/UX built in React JS</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">React JS</p>
              </div>
            </div>
          </div>
          <div className="app__work-item app__flex">
            <div
              className="app__work-img app__flex"
            >

              <img src={images.nft1} alt="name" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href="https://beausnftmarketplace.com/" target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href="https://github.com/BeauC2481/nftmarketplace" target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">NFT Marketplace</h4>
              <p className="p-text" style={{ marginTop: 10 }}>A decentralised application similar to OpenSea designed for users to buy and sell NFTs</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">Next JS</p>
              </div>
            </div>
          </div>
          <div className="app__work-item app__flex">
            <div
              className="app__work-img app__flex"
            >

              <img src={images.nft2} alt="name" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href="https://www.beauscryptochat.com" target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href="https://github.com/BeauC2481/cryptochat" target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">Chat DApp</h4>
              <p className="p-text" style={{ marginTop: 10 }}>A decentralised application designed for users to send messages to a public forum</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">Next JS</p>
              </div>
            </div>
          </div>
          <div className="app__work-item app__flex">
            <div
              className="app__work-img app__flex"
            >

              <img src={images.about01} alt="name" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href="blank" target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href="blank" target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">DAO</h4>
              <p className="p-text" style={{ marginTop: 10 }}>A DAO designed to allow GT holders to send Governor Tokens from a central bank</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">Next JS</p>
              </div>
            </div>
          </div>
        </motion.div>
      );
    } if (activeFilter === 'React JS') {
      return (
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          <div className="app__work-item app__flex">
            <div
              className="app__work-img app__flex"
            >

              <img src={images.about01} alt="name" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href="blank" target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href="blank" target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">Portfolio Website</h4>
              <p className="p-text" style={{ marginTop: 10 }}>A front end web application with a modern UI/UX built in React JS</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">React JS</p>
              </div>
            </div>
          </div>
        </motion.div>
      );
    } if (activeFilter === 'Next JS') {
      return (
        <>
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
          >
            <div className="app__work-item app__flex">
              <div
                className="app__work-img app__flex"
              >

                <img src={images.nft1} alt="name" />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >
                  <a href="blank" target="_blank" rel="noreferrer">

                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href="blank" target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">NFT Marketplace</h4>
                <p className="p-text" style={{ marginTop: 10 }}>A decentralised application similar to OpenSea designed for users to buy and sell NFTs</p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">Next JS</p>
                </div>
              </div>
            </div>
            <div className="app__work-item app__flex">
              <div
                className="app__work-img app__flex"
              >

                <img src={images.nft2} alt="name" />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >
                  <a href="blank" target="_blank" rel="noreferrer">

                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href="blank" target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">Chat DApp</h4>
                <p className="p-text" style={{ marginTop: 10 }}>A decentralised application similar to twitter designed for users to send messages to a public forum</p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">Next JS</p>
                </div>
              </div>
            </div>
            <div className="app__work-item app__flex">
              <div
                className="app__work-img app__flex"
              >

                <img src={images.about01} alt="name" />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >
                  <a href="blank" target="_blank" rel="noreferrer">

                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href="blank" target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">DAO</h4>
                <p className="p-text" style={{ marginTop: 10 }}>A DAO designed to allow GT holders to send Governor Tokens from a central bank</p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">Next JS</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      );
    } if (activeFilter === 'Web Apps') {
      return (
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          <div className="app__work-item app__flex">
            <div
              className="app__work-img app__flex"
            >

              <img src={images.portfolio2} alt="name" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href="blank" target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href="blank" target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">Portfolio Website</h4>
              <p className="p-text" style={{ marginTop: 10 }}>A front end web application with a modern UI/UX built in React JS</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">React JS</p>
              </div>
            </div>
          </div>
        </motion.div>
      );
    } if (activeFilter === 'DApps') {
      return (
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          <div className="app__work-item app__flex">
            <div
              className="app__work-img app__flex"
            >

              <img src={images.nft1} alt="name" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href="blank" target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href="blank" target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">NFT Marketplace</h4>
              <p className="p-text" style={{ marginTop: 10 }}>A decentralised application similar to OpenSea designed for users to buy and sell NFTs</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">Next JS</p>
              </div>
            </div>
          </div>
          <div className="app__work-item app__flex">
            <div
              className="app__work-img app__flex"
            >

              <img src={images.nft2} alt="name" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href="blank" target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href="blank" target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">Chat DApp</h4>
              <p className="p-text" style={{ marginTop: 10 }}>A decentralised application similar to twitter designed for users to send messages to a public forum</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">Next JS</p>
              </div>
            </div>
          </div>
          <div className="app__work-item app__flex">
            <div
              className="app__work-img app__flex"
            >

              <img src={images.about01} alt="name" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href="blank" target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href="blank" target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">DAO</h4>
              <p className="p-text" style={{ marginTop: 10 }}>A DAO designed to allow GT holders to send Governor Tokens from a central bank</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">Next JS</p>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }
    return null;
  }

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['DApps', 'Web Apps', 'Next JS', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-row w-full">
        {renderWorks()}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
