"use client";

import { motion } from "framer-motion";
import { BlogCard, TitleText, TypingText } from "@/components";
import { staggerContainer } from "../utils/motion";
import { blogPosts } from "../constants";

const Insights = () => (
  <section className="paddings relative z-10" id="insights">
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col"
    >
      <TypingText title="AGI:theBook - Insights" textStyles="text-center" />
      <TitleText title="Writing Tips and Techniques" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={post.slug}
            {...post}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
