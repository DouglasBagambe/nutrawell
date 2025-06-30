"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const timeline = [
  {
    year: "2020",
    title: "The Beginning",
    description:
      "Nutrawell Organics was founded with a vision to provide pure, organic nutrition to Uganda.",
    image: "/images/about/founding.jpg",
  },
  {
    year: "2021",
    title: "Happy Sips Launch",
    description:
      "Launched our first line of organic juices under the Happy Sips brand.",
    image: "/images/about/happy-sips-launch.jpg",
  },
  {
    year: "2022",
    title: "Expansion",
    description:
      "Expanded our product line to include nutrition bars and superfoods.",
    image: "/images/about/expansion.jpg",
  },
  {
    year: "2023",
    title: "Sustainability Milestone",
    description:
      "Achieved 100% sustainable packaging and zero-waste production.",
    image: "/images/about/sustainability.jpg",
  },
];

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://picsum.photos/1920/1080?random=9"
              alt="Nutrawell Organics - Ugandan Farms"
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
              Our Epic Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="text-xl md:text-3xl max-w-3xl mx-auto drop-shadow"
            >
              From the lush fields of Uganda to your table, we deliver the
              purest, most vibrant nutrition on Earth
            </motion.p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-green-700 mb-6 drop-shadow">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  At Nutrawell Organics, we harness the raw power of nature to
                  nourish and heal. Our mission is to deliver unparalleled
                  organic nutrition that transforms health and wellness, while
                  championing sustainable farming across Uganda's fertile lands.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through Happy Sips and our premium product lines, we bring the
                  vibrant essence of Uganda's natural bounty straight to your
                  table, one unforgettable sip at a time.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
                >
                  Learn More
                </motion.button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://picsum.photos/800/600?random=10"
                  alt="Our Mission - Ugandan Agriculture"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://picsum.photos/1920/1080?random=11"
              alt="Background Pattern"
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl font-bold text-center text-green-700 mb-20 drop-shadow">
              Our Legendary Journey
            </h2>
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-12 items-center`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
                      <Image
                        src={`https://picsum.photos/800/600?random=${
                          index + 12
                        }`}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                          {item.title} - {item.year}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-lg border-l-4 border-green-500">
                      <div className="text-green-600 font-bold text-lg mb-3">
                        {item.year}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-5">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-green-700 mb-20 drop-shadow">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Purity",
                  description:
                    "We source only the finest organic ingredients from Uganda's richest soils, ensuring unmatched quality in every product we craft.",
                  icon: "🌿",
                },
                {
                  title: "Sustainability",
                  description:
                    "Our unwavering commitment to environmental stewardship drives every decision, from sourcing to packaging, for a greener planet.",
                  icon: "🌍",
                },
                {
                  title: "Community",
                  description:
                    "We empower local farmers and fuel Uganda's agricultural growth, building thriving communities with every harvest.",
                  icon: "🤝",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center p-10 bg-white rounded-2xl shadow-lg border-t-2 border-green-500 transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="text-5xl mb-5 drop-shadow">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-green-700 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Happy Sips Highlight Section */}
        <section className="py-24 bg-gradient-to-b from-orange-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-orange-600 mb-6 drop-shadow">
                  About Happy Sips
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Happy Sips is the vibrant heart of Nutrawell Organics,
                  delivering 100% real juice with no added sugar. Crafted from
                  the freshest Ugandan fruits, each bottle bursts with natural
                  flavor and nutrition.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  As our flagship sub-brand, Happy Sips embodies our mission of
                  pure, joyful hydration. From classic flavors to kid-friendly
                  options, it's a celebration of health in every sip.
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                  className="flex gap-4"
                >
                  <Link
                    href="/happy-sips"
                    className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-700 transition-transform transform hover:scale-105"
                  >
                    Explore Happy Sips
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://picsum.photos/800/600?random=17"
                  alt="Happy Sips Juice Pour"
                  fill
                  className="object-cover transform transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  100% Real Juice
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
