'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
  'All',
  'Nutrition',
  'Recipes',
  'Sustainability',
  'Company News',
  'Health Tips'
];

const blogPosts = [
  {
    id: 1,
    title: 'The Benefits of Organic Juicing',
    excerpt: 'Discover why organic juicing is the best way to get your daily dose of nutrients.',
    category: 'Nutrition',
    image: '/images/blog/juicing.jpg',
    date: 'March 15, 2024',
    author: 'Dr. Sarah Johnson'
  },
  {
    id: 2,
    title: 'Sustainable Farming in Uganda',
    excerpt: 'How we're working with local farmers to promote sustainable agriculture.',
    category: 'Sustainability',
    image: '/images/blog/farming.jpg',
    date: 'March 10, 2024',
    author: 'John Muwonge'
  },
  {
    id: 3,
    title: 'Healthy Smoothie Recipes',
    excerpt: 'Try these delicious and nutritious smoothie recipes using our products.',
    category: 'Recipes',
    image: '/images/blog/smoothies.jpg',
    date: 'March 5, 2024',
    author: 'Chef Maria'
  },
  // Add more blog posts as needed
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/blog/hero.jpg"
            alt="Blog"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Discover the latest in nutrition, recipes, and sustainability
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-green-600 font-medium mb-2">
                      {post.category}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
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
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest updates and articles
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage; 