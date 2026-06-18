import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full over">
      {/* text */}
      <div className="w-full h-fuldirl bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center pt-44 md:pt-28 xl:pt-40 xl:text-left h-full container mx-auto px-4">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-4xl md:text-7xl leading-tight"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Powerful Edit</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            I am a passionate video editor who creates high quality and engaging video. 
I help creators and brands turn their ideas into powerful visual stories that capture attention and grow their audience.
          </motion.p>

          {/* btn */}
        <div className="flex justify-center xl:hidden relative z-50 pointer-events-auto ml-[250px] sm:ml-20 md:ml-40 lg:ml-[250px]">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-full xl:w-[1200px] h-full absolute right-0 bottom-0 overflow-hidden">
        {/* bg img */}
        <div
          role="img"
          className="bg-explosion bg-cover bg-center bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 opacity-60 xl:opacity-100"
          aria-hidden
        />

        {/* particles */}
        <div className="pointer-events-none absolute inset-0">
  <ParticlesContainer />
</div>

        { /*avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[500px] sm:max-w-[500px] md:max-w-[500px] lg:max-w-[700px] absolute bottom-[-210px] lg:bottom-40 right-20 lg:right-[8%] pointer-events-none"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
