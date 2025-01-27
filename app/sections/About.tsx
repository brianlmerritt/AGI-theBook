"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className="paddings relative z-10">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flexCenter flex-col"
    >
      <TypingText title="AGI:theBook - Summary" textStyles="text-center text-white text-5xl" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Tech giant Agentic Solutions takes over New Yuga, searching for missing
        AI guru Tej and his breakthrough artificial general intelligence 
        (<span className="font-extrabold text-white">AGI</span>). 
        The investigation team discovers something far more extraordinary than 
        corporate secrets. 
        <br/><i>- Indian Metaphysical Insights</i>
        <br/><i>- Bio-Integrated Evolutionary AI</i>
        <br/><i>- Code meets Consciousness</i>
        <br/><i>- Nothing is quite what it seems...</i>
      </motion.p>
      <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
        <Link href="#explore">
          <Image
            src="/arrow-down.svg"
            width={18}
            height={28}
            alt="arrow down"
            className="object-contain mt-[28px]"
          />
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

export default About;
