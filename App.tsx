import Silk from './components/Silk/Silk';
import Balatro from './components/Balatro/Balatro';
import React from 'react';
import SplitText from './components/SplitText';
import CustomCursor from './components/CustomCursor';
import { GitHubIcon, ExternalLinkIcon } from './components/Icons';
import { motion } from 'framer-motion';
import Header from './components/Header';
import ClickSpark from './components/ClickSpark';
import Spacer from './components/Spacer';
import GlassSurface from './components/GlassSurface';

const projects = [
  {
    title: 'QR Code Generator',
    description: 'A simple and intuitive web tool for generating custom QR codes instantly using vanilla JavaScript.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/Archuser202/QR-CODE-GENERATOR-GOOGLE',
    liveUrl: null,
  },
  {
    title: 'Android Pattern Visualizer',
    description: 'A creative coding project using p5.js to visualize and explore complex Android lock screen patterns.',
    tags: ['p5.js', 'JavaScript', 'Creative Coding'],
    githubUrl: 'https://github.com/Archuser202/Pattern-Visualizer-Android-lock-Complex',
    liveUrl: null,
  },
  {
    title: 'Cryptic Coder & Decoder',
    description: 'A pair of web-based tools for encrypting and decrypting messages using various classical ciphers.',
    tags: ['JavaScript', 'Cryptography', 'Web Tools'],
    githubUrl: 'https://github.com/Archuser202/Cryptic-Coder',
    liveUrl: null,
  },
  {
    title: 'Wundows.Theme',
    description: 'My personal Win10 configuration.',
    tags: ['YASB', 'Theme', 'Terminal', 'Powershell', 'Win10' ,'Customization'],
    githubUrl: 'https://github.com/Archuser202/AReallyGoodWindowsSetup',
    liveUrl: null,
  },
];

const ProjectCard: React.FC<(typeof projects)[0]> = ({ title, description, tags, githubUrl, liveUrl }) => {
  return (
  <ClickSpark
    sparkColor='#ac231cff'
    sparkSize={10}
    sparkRadius={15}
    sparkCount={8}
    duration={400}
  >
      

    <motion.div
      data-cursor-hover
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <GlassSurface
        width="100%"
        height="100%"
        borderRadius={12}
        opacity={1}
        blur={4}
        backgroundOpacity={0.05}
        blueOffset={10}
        greenOffset={20}
      >
        <div className="flex h-full w-full flex-col justify-between p-4">
          <div>
            <h3 className="font-mono text-xl font-bold text-gray-200">{title}</h3>
            <p className="mt-2 text-gray-400">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full bg-zinc-800/60 px-3 py-1 text-xs text-red-400 ring-1 ring-inset ring-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`GitHub for ${title}`} className="text-gray-400 hover:text-white transition-colors" data-cursor-hover>
              <GitHubIcon className="h-6 w-6" />
            </a>
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Live demo for ${title}`} className="text-gray-400 hover:text-white transition-colors" data-cursor-hover>
                <ExternalLinkIcon className="h-6 w-6" />
              </a>
            )}
          </div>
        </div>
      </GlassSurface>
    </motion.div>
  </ClickSpark>
  );
};



const App: React.FC = () => {
  return (
  <ClickSpark
  sparkColor='#ef444488'
  sparkSize={20}
  sparkRadius={30}
  sparkCount={16}
  duration={500}
  >  
    <div className="relative min-h-screen w-full text-gray-300 font-sans antialiased">
      <div className="fixed top-0 left-0 -z-10 h-full w-full opacity-100">
        {/* <Balatro
          isRotate={false}
          mouseInteraction={true}
          pixelFilter={700}
          color1='#101010'
          color2='#244953ff'
        /> */}
        <Silk
          speed={5}
          scale={1}
          color="#145b9aff"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <CustomCursor />
      <Header />
      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-24">
        <section id="hero" className="flex min-h-screen flex-col items-center justify-center text-center scroll-mt-24">
          <SplitText>Hello, I'm ArchUser</SplitText>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.8 } }}
            className="mt-4 max-w-xl text-lg text-gray-400 md:text-xl"
          >
            Linux enthusiast, Developer Tech reviewer . Crafting elegant solutions and exploring the world of open-source.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1.8, duration: 0.8 } }}
            className="mt-8 flex items-center gap-6"
          >
            <a href="https://github.com/Archuser202" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" data-cursor-hover>
              <GitHubIcon className="h-8 w-8 text-gray-400 transition-colors hover:text-white" />
            </a>
          </motion.div>
        </section>

        <Spacer />

        <section id="projects" className="py-24 scroll-mt-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-center text-4xl font-bold tracking-wider"
          >
            Featured Projects
          </motion.h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  </ClickSpark>
  );
};

export default App;