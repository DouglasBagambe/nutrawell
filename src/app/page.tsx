"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

// Happy Sips Products Data (Top Products)
const happySipsProducts = [
  {
    id: "1",
    name: "Mango Bliss",
    description:
      "Pure mango juice with a tropical twist, crafted from the ripest Ugandan mangoes.",
    image: "https://picsum.photos/600/800?random=1",
    category: "classic",
    price: "4.99",
    slug: "mango-bliss",
  },
  {
    id: "2",
    name: "Pineapple Punch",
    description:
      "Refreshing pineapple juice straight from Uganda, bursting with tangy sweetness.",
    image: "https://picsum.photos/600/800?random=2",
    category: "classic",
    price: "4.99",
    slug: "pineapple-punch",
  },
  {
    id: "3",
    name: "Berry Blast (Kids)",
    description:
      "Mixed berry juice perfect for little ones, packed with natural goodness.",
    image: "https://picsum.photos/600/800?random=3",
    category: "kids",
    price: "3.49",
    slug: "berry-blast-kids",
  },
  {
    id: "4",
    name: "Citrus Zing (Kids)",
    description:
      "Tangy citrus blend in a kid-friendly size, full of zesty energy.",
    image: "https://picsum.photos/600/800?random=4",
    category: "kids",
    price: "3.49",
    slug: "citrus-zing-kids",
  },
  {
    id: "5",
    name: "Tropical Fusion",
    description:
      "Limited edition blend of exotic fruits, a rare tropical delight.",
    image: "https://picsum.photos/600/800?random=5",
    category: "special",
    price: "5.99",
    slug: "tropical-fusion",
  },
  {
    id: "6",
    name: "Passion Fruit Glow",
    description:
      "Seasonal passion fruit juice to brighten your day with vibrant flavor.",
    image: "https://picsum.photos/600/800?random=6",
    category: "seasonal",
    price: "5.49",
    slug: "passion-fruit-glow",
  },
];

// Nutritional Products Data (Other Products)
const nutritionalProducts = [
  {
    id: "7",
    name: "Green Power Smoothie",
    description:
      "A nutrient-packed smoothie with spinach, kale, and tropical fruits.",
    image: "https://picsum.photos/600/800?random=7",
    category: "smoothies",
    price: "6.99",
    slug: "green-power-smoothie",
  },
  {
    id: "8",
    name: "Energy Boost Bar",
    description:
      "A wholesome bar packed with nuts, seeds, and natural energy boosters.",
    image: "https://picsum.photos/600/800?random=8",
    category: "bars",
    price: "2.99",
    slug: "energy-boost-bar",
  },
  {
    id: "9",
    name: "Superfood Mix",
    description:
      "A blend of organic superfoods to enhance your daily nutrition.",
    image: "https://picsum.photos/600/800?random=9",
    category: "superfoods",
    price: "9.99",
    slug: "superfood-mix",
  },
  {
    id: "10",
    name: "Vitamin Plus Supplement",
    description:
      "Daily supplements to support your immune system and overall health.",
    image: "https://picsum.photos/600/800?random=10",
    category: "supplements",
    price: "12.99",
    slug: "vitamin-plus-supplement",
  },
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://picsum.photos/1920/1080?random=1"
              alt="Ugandan Scenery with Nutrition Imagery"
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
              Pure Nutrition from Uganda
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="text-xl md:text-3xl mb-10 drop-shadow-lg"
            >
              Experience the vibrant essence of Uganda with Nutrawell Organics.
              From farm to table, we deliver the purest, most nutritious
              products.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <Link
                href="/happy-sips"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-5 px-10 rounded-full shadow-xl transition-transform transform hover:scale-105 text-lg"
              >
                Explore Happy Sips
              </Link>
              <Link
                href="#products"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-10 rounded-full shadow-xl transition-transform transform hover:scale-105 text-lg"
              >
                View All Products
              </Link>
            </motion.div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl opacity-10"></div>
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
              Welcome to Nutrawell Organics
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              At Nutrawell Organics, we are dedicated to bringing you the finest
              organic nutrition straight from the lush fields of Uganda. Our
              mission is to nourish your body and soul with products that are
              pure, sustainable, and bursting with natural goodness.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/about"
                className="inline-block bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105 text-lg"
              >
                Learn Our Story
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Featured Happy Sips Section */}
        <section
          className="py-24 bg-gradient-to-b from-orange-50 to-yellow-50"
          id="products"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6 drop-shadow-lg">
                Join the Nutrawell Community
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Discover the vibrant flavors of Happy Sips, our flagship juice
                line. Crafted from 100% real Ugandan fruits with no added sugar,
                these juices are the heart of Nutrawell Organics.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {happySipsProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    image={product.image}
                    category={product.category}
                    price={product.price}
                  />
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-16"
            >
              <Link
                href="/happy-sips"
                className="inline-block bg-orange-600 text-white font-bold py-5 px-10 rounded-full shadow-xl hover:bg-orange-700 transition-transform transform hover:scale-105 text-lg"
              >
                Explore All Happy Sips
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Nutritional Products Section */}
        <section className="py-24 bg-gradient-to-b from-green-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6 drop-shadow-lg">
                Nutrawell Nutritional Products
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Beyond our signature juices, explore our range of nutritional
                products designed to support a healthy lifestyle with organic,
                high-quality ingredients.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {nutritionalProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    image={product.image}
                    category={product.category}
                    price={product.price}
                  />
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-16"
            >
              <Link
                href="/products"
                className="inline-block bg-green-600 text-white font-bold py-5 px-10 rounded-full shadow-xl hover:bg-green-700 transition-transform transform hover:scale-105 text-lg"
              >
                Explore All Nutritional Products
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Nutrition & Benefits Section */}
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
                Why Choose Nutrawell Products?
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Our products are crafted with care to provide you with the best
                health benefits, straight from nature.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Rich in Vitamins",
                  description:
                    "Packed with essential vitamins to boost your immune system and overall health.",
                  icon: "💊",
                },
                {
                  title: "Natural Energy",
                  description:
                    "Fuel your day with natural energy from organic fruits and superfoods.",
                  icon: "⚡",
                },
                {
                  title: "Ultimate Freshness",
                  description:
                    "Harvested at peak ripeness to ensure maximum flavor and nutritional value.",
                  icon: "🍎",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center p-10 bg-green-100 rounded-2xl shadow-lg border border-green-200 transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="text-5xl mb-5 text-green-600 drop-shadow">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-green-700 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability and Impact Section */}
        <section className="py-24 bg-gradient-to-b from-green-50 to-green-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6 drop-shadow-lg">
                Our Commitment to Sustainability
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                At Nutrawell Organics, we are committed to sustainable practices
                that support our planet and the communities in Uganda.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  title: "Organic Farming",
                  description:
                    "We partner with local Ugandan farmers to source ingredients through organic, sustainable farming methods.",
                  image: "https://picsum.photos/800/600?random=11",
                },
                {
                  title: "Community Support",
                  description:
                    "Our initiatives empower local communities by providing fair wages and supporting educational programs.",
                  image: "https://picsum.photos/800/600?random=12",
                },
                {
                  title: "Eco-Friendly Packaging",
                  description:
                    "All our packaging is 100% recyclable, reducing waste and protecting the environment.",
                  image: "https://picsum.photos/800/600?random=13",
                },
                {
                  title: "Tree Planting Initiative",
                  description:
                    "For every bottle sold, we plant a tree in Uganda to combat deforestation and promote biodiversity.",
                  image: "https://picsum.photos/800/600?random=14",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-100"
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-16"
            >
              <Link
                href="/impact"
                className="inline-block bg-green-600 text-white font-bold py-5 px-10 rounded-full shadow-xl hover:bg-green-700 transition-transform transform hover:scale-105 text-lg"
              >
                Learn More About Our Impact
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6 drop-shadow-lg">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Hear from our satisfied customers who have experienced the joy
                and health benefits of Nutrawell Organics.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  name: "Sarah K.",
                  quote:
                    "Happy Sips has transformed my mornings! The Mango Bliss is my favorite - pure, refreshing, and full of flavor. I feel healthier already!",
                  image: "https://picsum.photos/200/200?random=15",
                },
                {
                  name: "John M.",
                  quote:
                    "I love the commitment to sustainability. Knowing that my purchase supports Ugandan farmers and the environment makes every sip even better.",
                  image: "https://picsum.photos/200/200?random=16",
                },
                {
                  name: "Aisha N.",
                  quote:
                    "The Green Power Smoothie is a game-changer for my busy lifestyle. It’s quick, nutritious, and keeps me energized throughout the day!",
                  image: "https://picsum.photos/200/200?random=17",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 text-center transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-5 border-4 border-green-200">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-700 italic mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <h4 className="text-lg font-bold text-green-700">
                    {testimonial.name}
                  </h4>
                </motion.div>
              ))}
            </div>
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
              Join the Nutrawell Family
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto"
            >
              Subscribe to our newsletter for exclusive offers, nutrition tips,
              and updates on our sustainability initiatives.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-md mx-auto"
            >
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 shadow-sm text-lg"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-transform shadow-lg"
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
