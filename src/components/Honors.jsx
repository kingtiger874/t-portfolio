import React from "react";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const AwardCard = () => {
  return (
    <motion.div variants={fadeIn("up", "spring", 10 * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={"/Ingram-Award.png"}
            alt={"Ingram-Award"}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px] text-center">
            {"Xvantage Core Foundational Member Award"}
          </h3>
          <div className="mt-4 text-secondary text-[14px]">
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="bg-[#1d1836] w-14 h-14 border-gray-600 border-2 rounded-full p-2">
                <img
                  src={"/ingram.png"}
                  className="w-full h-full object-contain"
                  alt="company_log"
                />
              </div>
              <div>
                <p className="text-white font-medium mb-2">Ingram Micro</p>
                <p>Aug 2023</p>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Honors = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>WHAT I AM PROUD OF</p>
        <h2 className={styles.sectionHeadText}>Honors & Awards.</h2>
      </motion.div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AwardCard/>
      </div>
    </>
  );
};

export default SectionWrapper(Honors, "");
