"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { blogPosts } from "../../constants";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { BlogCard, Navbar, TypingText } from "../../components";

const InsightPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return <div>Post not found</div>;

  return (
    <main className="bg-primary-black overflow-hidden">
      <Navbar />
      <div className="pt-[100px]">
        <section className="paddings relative z-10">
          <motion.div
            variants={staggerContainer(0.25, 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="innerWidth mx-auto flex flex-col"
          >
            <TypingText title="AGI:theBook - Insights" textStyles="text-center" />
            
            <div className="flex flex-row gap-8 mt-8">
              {/* Main Content - Left 2/3 */}
              <motion.div
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="relative flex flex-col gap-8 w-2/3"
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
                  
                  <div className="mt-8 text-secondary-white prose prose-invert whitespace-pre-wrap">
                    {post.content}
                  </div>
                </div>
              </motion.div>

              {/* Sidebar - Right 1/3 */}
              <motion.div
                variants={fadeIn("left", "tween", 0.2, 1)}
                className="w-1/3 flex flex-col gap-8"
              >
                <h3 className="font-normal text-[32px] text-white">
                  More Insights
                </h3>
                <div className="flex flex-col gap-6">
                  {blogPosts
                    .filter(p => p.slug !== slug)
                    .map((post, index) => (
                      <BlogCard
                        key={post.slug}
                        {...post}
                        index={index + 1}
                      />
                    ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default InsightPost; 