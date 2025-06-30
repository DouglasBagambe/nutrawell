"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

// All Products Combined
const allProducts = [...happySipsProducts, ...nutritionalProducts];

// Categories for filtering
const categories = [
  "All Products",
  "Happy Sips Juices",
  "Nutrawell Nutritious Foods",
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All Products"
      ? allProducts
      : selectedCategory === "Happy Sips Juices"
      ? happySipsProducts
      : nutritionalProducts;

  return (
    <div>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://picsum.photos/1920/1080?random=20"
              alt="Nutrawell Organics - All Products"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-orange-700/50 mix-blend-multiply" />
          </div>
          <div className="relative text-center text-white z-10 px-4 max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-5xl md:text-8xl font-bold mb-6 drop-shadow-2xl"
            >
              Explore All Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="text-xl md:text-3xl mb-10 drop-shadow-lg max-w-3xl mx-auto"
            >
              Discover the full range of Nutrawell Organics, from our signature
              Happy Sips juices to premium nutritional products, all crafted
              with pure Ugandan goodness.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              <Link
                href="#products-grid"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-5 px-10 rounded-full shadow-xl transition-transform transform hover:scale-105 text-lg"
              >
                View Our Collection
              </Link>
            </motion.div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 rounded-full filter blur-3xl opacity-10"></div>
        </section>

        {/* Category Filter Section */}
        <section className="py-12 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-green-700 mb-6 drop-shadow-lg">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Filter our extensive product range to find exactly what you're
                looking for.
              </p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-base font-semibold transition-colors shadow-md ${
                    selectedCategory === category
                      ? "bg-green-600 text-white"
                      : "bg-white text-green-700 hover:bg-green-100 border border-green-300"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="py-24 bg-white" id="products-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6 drop-shadow-lg">
                {selectedCategory === "All Products"
                  ? "All Nutrawell Products"
                  : selectedCategory}
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                {selectedCategory === "All Products"
                  ? "Explore our complete range of organic nutrition and juice products."
                  : selectedCategory === "Happy Sips Juices"
                  ? "Dive into the vibrant flavors of our 100% real fruit juices, crafted from the finest Ugandan harvests."
                  : "Discover our premium nutritional products designed to support a healthy lifestyle."}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
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
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center py-20 text-gray-500 text-lg"
              >
                No products found in this category. Please try another category.
              </motion.div>
            )}
          </div>
        </section>

        {/* Featured Comparison Section */}
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
                Why Nutrawell Stands Out
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Compare the benefits of our top product lines to see which fits
                your lifestyle best.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-orange-50 p-10 rounded-2xl shadow-lg border border-orange-100"
              >
                <h3 className="text-3xl font-bold text-orange-600 mb-6 drop-shadow">
                  Happy Sips Juices
                </h3>
                <ul className="space-y-4 text-gray-700 text-lg">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 text-2xl">✓</span>
                    <span>100% Real Fruit Juice, No Added Sugar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 text-2xl">✓</span>
                    <span>Rich in Natural Vitamins & Antioxidants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 text-2xl">✓</span>
                    <span>Perfect for On-the-Go Refreshment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 text-2xl">✓</span>
                    <span>Kid-Friendly Options Available</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="/happy-sips"
                    className="inline-block bg-orange-600 text-white font-bold py-4 px-6 rounded-full shadow-lg hover:bg-orange-700 transition-transform transform hover:scale-105"
                  >
                    Explore Happy Sips
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-green-50 p-10 rounded-2xl shadow-lg border border-green-100"
              >
                <h3 className="text-3xl font-bold text-green-700 mb-6 drop-shadow">
                  Nutrawell Nutritional Foods
                </h3>
                <ul className="space-y-4 text-gray-700 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-2xl">✓</span>
                    <span>High in Protein, Fiber, and Essential Nutrients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-2xl">✓</span>
                    <span>Supports Long-Term Health & Wellness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-2xl">✓</span>
                    <span>Ideal for Meal Planning & Dietary Needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-2xl">✓</span>
                    <span>Organic & Sustainably Sourced Ingredients</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="/products"
                    className="inline-block bg-green-600 text-white font-bold py-4 px-6 rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105"
                  >
                    Explore Nutritional Products
                  </Link>
                </div>
              </motion.div>
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
              Join the Nutrawell Community
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

export default ProductsPage;
