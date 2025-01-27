"use client";

import { motion } from "framer-motion";
import { BlogCard } from "../components";
import { TitleText, TypingText } from "../components";
import { staggerContainer } from "../utils/motion";
import { blogPosts } from "../constants";

const BlogPage = () => (
  <section className="paddings relative z-10">
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col"
    >
      <TypingText title="AGI:theBook - Blog" textStyles="text-center" />
      <TitleText title="Latest Posts" textStyles="text-center" />
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

export default BlogPage; 