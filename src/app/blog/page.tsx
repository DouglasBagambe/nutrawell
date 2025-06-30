"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const categories = [
  "All",
  "Nutrition",
  "Recipes",
  "Sustainability",
  "Company News",
  "Health Tips",
];

const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Organic Juicing",
    excerpt:
      "Discover why organic juicing is the best way to get your daily dose of nutrients.",
    category: "Nutrition",
    image: "/images/blog/juicing.jpg",
    date: "March 15, 2024",
    author: "Dr. Sarah Johnson",
  },
  {
    id: 2,
    title: "Sustainable Farming in Uganda",
    excerpt:
      "How we're working with local farmers to promote sustainable agriculture.",
    category: "Sustainability",
    image: "/images/blog/farming.jpg",
    date: "March 10, 2024",
    author: "John Muwonge",
  },
  {
    id: 3,
    title: "Healthy Smoothie Recipes",
    excerpt:
      "Try these delicious and nutritious smoothie recipes using our products.",
    category: "Recipes",
    image: "/images/blog/smoothies.jpg",
    date: "March 5, 2024",
    author: "Chef Maria",
  },
  // Add more blog posts as needed
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://picsum.photos/1920/1080?random=19"
              alt="Nutrawell Organics Blog"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-700/50" />
          </div>
          <div className="relative text-center text-white z-10 px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg"
            >
              Our Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="text-xl md:text-3xl max-w-3xl mx-auto drop-shadow"
            >
              Explore the latest insights on nutrition, recipes, and sustainable
              living
            </motion.p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-8 drop-shadow">
              Browse by Category
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-base font-semibold transition-colors shadow-md ${
                    selectedCategory === category
                      ? "bg-green-600 text-white"
                      : "bg-white text-green-700 hover:bg-green-100"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-green-700 mb-16 drop-shadow">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border border-green-100"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="relative h-56 w-full">
                      <Image
                        src={`https://picsum.photos/800/600?random=${
                          post.id + 20
                        }`}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        {post.title}
                      </h2>
                      <p className="text-gray-700 mb-5 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-b from-green-50 to-green-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-green-700 mb-6 drop-shadow">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Subscribe to our newsletter for the latest updates, exclusive
                offers, and insightful articles on nutrition and sustainability.
              </p>
              <form className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 shadow-sm text-lg"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-transform shadow-lg"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
