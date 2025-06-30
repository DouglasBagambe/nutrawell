"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ImpactPage = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://picsum.photos/1920/1080?random=18"
              alt="Sustainable Farming in Uganda"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-700/50 mix-blend-multiply" />
          </div>
          <div className="relative text-center text-white z-10 px-4 max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-5xl md:text-8xl font-bold mb-6 drop-shadow-2xl"
            >
              Our Impact
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="text-xl md:text-3xl mb-10 drop-shadow-lg max-w-3xl mx-auto"
            >
              At Nutrawell Organics, we are committed to making a positive
              difference in Uganda through sustainable practices and community
              empowerment.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              <Link
                href="#impact-details"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-10 rounded-full shadow-xl transition-transform transform hover:scale-105 text-lg"
              >
                Discover Our Initiatives
              </Link>
            </motion.div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 rounded-full filter blur-3xl opacity-10"></div>
        </section>

        {/* Introduction Section */}
        <section className="py-24 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-green-700 mb-8 drop-shadow-lg"
            >
              Sustainability at Our Core
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              Nutrawell Organics is more than just a nutrition company. We are
              dedicated to creating a sustainable future by supporting local
              farmers, protecting the environment, and uplifting communities
              across Uganda.
            </motion.p>
          </div>
        </section>

        {/* Impact Details Section */}
        <section className="py-24 bg-white" id="impact-details">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6 drop-shadow-lg">
                Our Key Initiatives
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Explore the impactful programs and practices that define our
                commitment to sustainability and social responsibility.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  title: "Organic Farming Partnerships",
                  description:
                    "We collaborate with over 500 local Ugandan farmers to cultivate organic produce, ensuring fair trade practices and sustainable farming methods that preserve the land for future generations.",
                  image: "https://picsum.photos/800/600?random=19",
                  icon: "🌱",
                },
                {
                  title: "Community Empowerment",
                  description:
                    "Through education programs and fair wage initiatives, we empower local communities, providing resources for schools and health services to improve quality of life.",
                  image: "https://picsum.photos/800/600?random=20",
                  icon: "🤝",
                },
                {
                  title: "Eco-Friendly Packaging",
                  description:
                    "All our packaging is 100% recyclable and made from sustainable materials, reducing waste and minimizing our environmental footprint.",
                  image: "https://picsum.photos/800/600?random=21",
                  icon: "♻️",
                },
                {
                  title: "Tree Planting Initiative",
                  description:
                    "For every product sold, we plant a tree in Uganda, contributing to reforestation efforts and combating climate change. To date, we've planted over 10,000 trees.",
                  image: "https://picsum.photos/800/600?random=22",
                  icon: "🌳",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-100 transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-4xl mb-4 text-green-600 drop-shadow">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-green-700 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Counter Section */}
        <section className="py-24 bg-gradient-to-b from-green-100 to-green-50 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-green-700 mb-8 drop-shadow-lg"
            >
              Our Impact by the Numbers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              See the tangible results of our sustainability and community
              initiatives.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "10,000+", label: "Trees Planted", icon: "🌳" },
                { value: "500+", label: "Farmers Supported", icon: "👨‍🌾" },
                { value: "1M+", label: "Sustainable Bottles Sold", icon: "🍼" },
                { value: "50+", label: "Community Projects", icon: "🏫" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-green-200"
                >
                  <div className="text-5xl mb-4 text-green-600 drop-shadow">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-green-700 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Map or Visual Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6 drop-shadow-lg">
                Where We Make a Difference
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Our initiatives span across Uganda, impacting various regions
                with sustainable farming and community projects.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative h-[500px] w-full bg-gray-200 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://picsum.photos/1200/600?random=23"
                alt="Map of Uganda with Impact Locations"
                fill
                className="object-cover"
              />
              {/* Simulated map markers */}
              <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-green-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
              <div className="absolute top-2/3 left-3/4 w-8 h-8 bg-green-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-green-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 bg-gradient-to-b from-orange-100 to-yellow-100 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-orange-600 mb-6 drop-shadow-lg"
            >
              Join Us in Making an Impact
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto"
            >
              Support our mission by choosing Nutrawell Organics. Every purchase
              contributes to a sustainable future and community development in
              Uganda.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <Link
                href="/products"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-10 rounded-full shadow-xl transition-transform transform hover:scale-105 text-lg"
              >
                Shop Now
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-5 px-10 rounded-full shadow-xl transition-transform transform hover:scale-105 text-lg"
              >
                Get Involved
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ImpactPage;
