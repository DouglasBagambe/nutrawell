"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/about/hero.jpg"
            alt="Nutrawell Organics Team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            From farm to table, we're committed to bringing you the purest
            nutrition
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Nutrawell Organics, we believe in the power of nature to
                nourish and heal. Our mission is to provide pure, organic
                nutrition that supports health and wellness while promoting
                sustainable farming practices in Uganda.
              </p>
              <p className="text-lg text-gray-600">
                Through Happy Sips and our other product lines, we're bringing
                the best of Uganda's natural bounty to your table, one delicious
                sip at a time.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <Image
                src="/images/about/mission.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Our Journey
          </h2>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative h-[300px] rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="bg-white p-8 rounded-xl shadow-md">
                    <div className="text-green-600 font-bold mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Purity",
                description:
                  "We source only the finest organic ingredients, ensuring the highest quality in every product.",
                icon: "🌿",
              },
              {
                title: "Sustainability",
                description:
                  "Our commitment to environmental responsibility guides every decision we make.",
                icon: "🌍",
              },
              {
                title: "Community",
                description:
                  "We support local farmers and contribute to the growth of Uganda's agricultural sector.",
                icon: "🤝",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center p-8 bg-white rounded-xl shadow-md"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
