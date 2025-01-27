"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { blogPosts } from "../../constants";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { TypingText } from "../../components";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return <div>Post not found</div>;

  return (
    <section className="paddings relative z-10">
      <motion.div
        variants={staggerContainer(0.25, 0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex flex-col"
      >
        <TypingText title="AGI:theBook - Blog" textStyles="text-center" />
        
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="relative flex flex-col gap-8"
        >
          <Image
            src={post.imgUrl}
            width={1920}
            height={1080}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-[32px]"
          />
          
          <div className="flex flex-col gap-4">
            <h1 className="font-normal text-[64px] text-white">
              {post.title}
            </h1>
            
            <div className="text-secondary-white">
              <span>{post.date}</span> • <span>{post.author}</span>
            </div>
            
            <div className="mt-8 text-secondary-white prose prose-invert">
              {post.content.split('\n').map((paragraph, i) => (
                <p key={i} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BlogPost; 