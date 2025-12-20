import React from 'react';
import { motion } from 'framer-motion';
import GlassSurface from './GlassSurface';

const FlexSpacer: React.FC = () => <div className="flex-1" />;

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut', delay: 1.0 }}
      className="fixed top-0 left-0 right-0 z-20 px-4"
    >
      <GlassSurface
        className="mt-4"
        width="100%"
        height={64}
        borderRadius={9999}
        opacity={1}
        blur={30}
        backgroundOpacity={0}
        distortionScale={300}
        redOffset={0}
        blueOffset={0}
        greenOffset={0}
        displace={5}
      >
        <nav className="flex w-full items-center px-6">
          <a href="#" className="font-mono text-xl font-bold tracking-wider text-gray-200 cursor-target" data-cursor-hover>
            Arch
          </a>
          <FlexSpacer />
          <ul className="flex items-center gap-6">
            <li>
              <a href="#hero" className="text-gray-400 transition-colors hover:text-white cursor-target" data-cursor-hover>
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-400 transition-colors hover:text-white cursor-target" data-cursor-hover>
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </GlassSurface>
    </motion.header>
  );
};

export default Header;