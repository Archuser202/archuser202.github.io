import AnimatedContent from './components/AnimatedContent'
import React from 'react';
import Silk from './components/Silk/Silk';
import SplitText from './components/SplitText';
import CustomCursor from './components/CustomCursor';
import { GitHubIcon, ExternalLinkIcon, YouTubeIcon } from './components/Icons';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Spacer from './components/Spacer';
import GlassSurface from './components/GlassSurface';
import GradientText from './components/GradientText';
import TargetCursor from './components/TargetCursor';

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
    description: 'My personal Win10 configuration featuring YASB, custom terminal, and PowerShell profile.',
    tags: ['YASB', 'Theme', 'Terminal', 'Powershell', 'Win10' ,'Customization'],
    githubUrl: 'https://github.com/Archuser202/AReallyGoodWindowsSetup',
    liveUrl: null,
  },
];

const ProjectCard: React.FC<(typeof projects)[0]> = ({ title, description, tags, githubUrl, liveUrl }) => {
  return (
    <motion.a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor-hover
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="block h-full group focus:outline-none cursor-target"
    >
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        > 
          <GlassSurface
            width="100%"
            height="100%"
            borderRadius={12}
            opacity={0}
            blur={30}
            displace={10}
            distortionScale={300}
            backgroundOpacity={0.015}
            className="transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20"
          >
            <div className="flex h-full w-full flex-col justify-between p-6">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-xl font-bold text-gray-200 group-hover:text-red-500 transition-colors">{title}</h3>
                  <ExternalLinkIcon className="h-5 w-5 text-gray-500 opacity-0 group-hover:opacity-100 group-hover:text-red-500 transition-all transform translate-y-1 group-hover:translate-y-0" />
                </div>
                <p className="mt-2 text-gray-400 text-sm group-hover:text-gray-200 transition-colors">{description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-zinc-800/60 px-3 py-1 text-[10px] font-mono uppercase text-red-400 ring-1 ring-inset ring-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <GitHubIcon className="h-6 w-6 text-gray-500 group-hover:text-white transition-colors" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 group-hover:text-red-500">View Project</span>
              </div>
            </div>
          </GlassSurface>
        </AnimatedContent>
    </motion.a>
  );
};

const App: React.FC = () => {
  return (
      <div className="relative min-h-screen w-full text-gray-300 font-sans antialiased overflow-x-hidden">
        {/* Background Layer */}
        <div className="fixed top-0 left-0 -z-10 h-full w-full">
          <Silk
            speed={3}
            scale={1}
            color="#145b9aff"
            noiseIntensity={1.2}
            rotation={0}
          />
        </div>
      <div>
        <TargetCursor 
          spinDuration={2}
          hideDefaultCursor={true}
          parallaxOn={true}
        />

        <Header />
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 pt-24">
          {/* Hero Section */}
          <section id="hero" className="flex min-h-screen flex-col items-center justify-center text-center scroll-mt-24">
            <SplitText>
              <GradientText
                colors={["#27beff","#9fe2ff","#9ecfef"]}
                animationSpeed={1}
                showBorder={false}
                className="custom-class .cursor-target"
              >
                Hello, I'm ArchUser
              </GradientText>
            </SplitText>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.8 } }}
              className="mt-4 max-w-xl text-lg text-gray-400 md:text-xl"
            >
              Linux enthusiast, Developer, Tech reviewer. Crafting elegant solutions and exploring the world of open-source.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 1.8, duration: 0.8 } }}
              className="mt-8 flex items-center gap-6"
            >
              <a href="https://github.com/Archuser202" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" data-cursor-hover className="transition-transform hover:scale-110 cursor-target">
                <GitHubIcon className="h-10 w-10 text-gray-400 transition-colors hover:text-black" />
              </a>
              <a href="https://www.youtube.com/@Arch-User-202" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel" data-cursor-hover className="transition-transform hover:scale-110 cursor-target">
                <YouTubeIcon className="h-10 w-10 text-gray-400 transition-colors hover:text-red-500" />
              </a>
            </motion.div>
          </section>

          <Spacer />

          {/* Projects Section */}
          <section id="projects" className="py-24 scroll-mt-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-center text-4xl font-bold tracking-wider mb-16"
            >
              Featured Projects
            </motion.h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </section>
          
          <footer className="py-12 text-center text-gray-600 text-xs font-mono tracking-widest uppercase">
            &copy; {new Date().getFullYear()} ARCH &bull; BUILT WITH PASSION
          </footer>
        </div>
        </div>  
      </div>
  );
};

export default App;
