"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";

const HappySipsHome = () => {
  // Animation variants for hero text
  const heroTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100">
      <Head>
        <title>Happy Sips - 100% Real Juice | Nutrawell</title>
        <meta
          name="description"
          content="Discover Happy Sips, Nutrawell's premium juice line made from 100% real fruits with no added sugar. Pure, vibrant, and refreshing!"
        />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video or Image with Parallax */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/1920/1080?random=21"
            alt="Happy Sips Juice Pour Background"
            fill
            className="object-cover opacity-80 transition-transform duration-10000 transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/60 to-yellow-500/60 mix-blend-multiply" />
          {/* Particle Effect for Wow Factor */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-400 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={heroTextVariants}
            className="text-6xl md:text-8xl font-bold text-orange-600 mb-6 drop-shadow-2xl"
          >
            Happy Sips: 100% Real Juice
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={heroTextVariants}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl text-gray-800 mb-10 drop-shadow-lg font-medium"
          >
            Pure, vibrant, and bursting with natural flavor. Straight from
            Uganda's finest fruits.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroTextVariants}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link
              href="/happy-sips/products"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-5 px-10 rounded-full shadow-xl transition-transform transform hover:scale-105 text-lg"
            >
              Explore Our Juices
            </Link>
            <Link
              href="/happy-sips/quiz"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold py-5 px-10 rounded-full shadow-xl transition-transform transform hover:scale-105 hover:bg-white/10 text-lg"
            >
              Find Your Flavor
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-yellow-50">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-600 text-center mb-16 drop-shadow-lg">
          Why Happy Sips?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center border border-orange-100 transform transition-transform duration-300 hover:scale-105"
          >
            <div className="text-orange-500 mb-5 text-5xl">
              {/* Icon placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              100% Natural
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              No added sugars, preservatives, or artificial flavors. Just pure
              fruit juice.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center border border-orange-100 transform transition-transform duration-300 hover:scale-105"
          >
            <div className="text-orange-500 mb-5 text-5xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Sustainably Sourced
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Supporting Ugandan farmers with every sip, using eco-friendly
              practices.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center border border-orange-100 transform transition-transform duration-300 hover:scale-105"
          >
            <div className="text-orange-500 mb-5 text-5xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M16.5 8v10H5V6h11.5a2.5 2.5 0 000-5H5a4 4 0 00-4 4v14a4 4 0 004 4h14a4 4 0 004-4V9.5a2.5 2.5 0 00-5 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Vegan</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Completely plant-based, aligning with your healthy lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-yellow-500 text-white text-center overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Find Your Perfect Juice
          </h2>
          <p className="text-2xl mb-10 drop-shadow">
            Take our quick quiz to discover the Happy Sips flavor that matches
            your vibe!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/happy-sips/quiz"
              className="inline-block bg-white text-orange-600 font-bold py-5 px-12 rounded-full shadow-xl transition-transform hover:bg-gray-100 text-xl"
            >
              Take the Quiz
            </Link>
          </motion.div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl opacity-10"></div>
      </section>

      {/* About Happy Sips */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-gradient-to-b from-yellow-50 to-orange-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6 drop-shadow-lg">
              About Happy Sips
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Happy Sips is Nutrawell’s vibrant juice line, born from the lush
              fields of Uganda. Crafted with a passion for health and happiness,
              each bottle bursts with the authentic taste of real fruit.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our mission is to refresh and nourish, bringing smiles with every
              sip while supporting sustainable farming and community growth
              across Uganda.
            </p>
            <Link
              href="/happy-sips/about"
              className="inline-block mt-6 bg-orange-600 text-white font-semibold py-4 px-6 rounded-full shadow-lg hover:bg-orange-700 transition-transform transform hover:scale-105"
            >
              Learn More About Our Story
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://picsum.photos/800/600?random=22"
              alt="Happy Sips Fruit Harvest"
              fill
              className="object-cover transform transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Pure Ugandan Fruits
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HappySipsHome;
