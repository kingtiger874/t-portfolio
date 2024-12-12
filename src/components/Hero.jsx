import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import SkillCloud from './SkillCloud';

const Hero = () => {
  return (
    <section className={"relative w-full h-[900px] mx-auto"}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF] text-[70px] ">Jared Davis</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I transform challenges <br className="sm:block hidden" />
            into seamless digital solutions.
          </p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <div className="flex w-full items-center justify-center absolute xs:bottom-10 bottom-32">
        <SkillCloud 
          iconSlugs={[
            "react",
            "next.js",
            "tailwindcss",
            "typescript",
            "mongodb",
            "prisma",
            "nodejs",
            "express",
            "threedotjs",
            "html5",
            "css3",
            "trpc",
            "javascript",
            "python",
            "nextdotjs",
            "vercel",
            "git",
            "figma",
            "framer",
            "react-native",
            "nextui",
            "auth0",
            "postgres",
            "drizzle",
            "postgresql",
            "supabase",
            "amazons3",
            "shopify",
            "strapi",
            "expo",
            "prismic",
            "greensock",
          ]}
        />
      </div>
      <ComputersCanvas />
      <p className="text-center relative top-[-3%]">
        Click on the model to interact
      </p>
      <div
        className="absolute xs:bottom-10 bottom-32 w-full
      flex justify-center items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 
            border-secodary flex justify-center items-start p-2
           "
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
