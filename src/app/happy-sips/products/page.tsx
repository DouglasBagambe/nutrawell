"use client";

import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import ProductGrid from "../../../components/ProductGrid";

const HappySipsProducts = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Sample categories for Happy Sips juices
  const categories = [
    { id: "all", name: "All Juices" },
    { id: "classic", name: "Classic Juices" },
    { id: "kids", name: "Kids Juices" },
    { id: "special", name: "Special Editions" },
    { id: "seasonal", name: "Seasonal Flavors" },
  ];

  // Sample product data (replace with CMS fetch in production)
  const products = [
    {
      id: "1",
      name: "Mango Bliss",
      description: "Pure mango juice with a tropical twist.",
      image: "https://picsum.photos/300/400?random=1",
      category: "classic",
      slug: "mango-bliss",
      price: "4.99",
    },
    {
      id: "2",
      name: "Pineapple Punch",
      description: "Refreshing pineapple juice straight from Uganda.",
      image: "https://picsum.photos/300/400?random=2",
      category: "classic",
      slug: "pineapple-punch",
      price: "4.99",
    },
    {
      id: "3",
      name: "Berry Blast (Kids)",
      description: "Mixed berry juice perfect for little ones.",
      image: "https://picsum.photos/300/400?random=3",
      category: "kids",
      slug: "berry-blast-kids",
      price: "3.49",
    },
    {
      id: "4",
      name: "Citrus Zing (Kids)",
      description: "Tangy citrus blend in a kid-friendly size.",
      image: "https://picsum.photos/300/400?random=4",
      category: "kids",
      slug: "citrus-zing-kids",
      price: "3.49",
    },
    {
      id: "5",
      name: "Tropical Fusion",
      description: "Limited edition blend of exotic fruits.",
      image: "https://picsum.photos/300/400?random=5",
      category: "special",
      slug: "tropical-fusion",
      price: "5.99",
    },
    {
      id: "6",
      name: "Passion Fruit Glow",
      description: "Seasonal passion fruit juice to brighten your day.",
      image: "https://picsum.photos/300/400?random=6",
      category: "seasonal",
      slug: "passion-fruit-glow",
      price: "5.49",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-yellow-50">
      <Head>
        <title>Happy Sips Products | Nutrawell</title>
        <meta
          name="description"
          content="Explore the full range of Happy Sips juices, from classic flavors to seasonal specials. 100% real fruit juice with no added sugar."
        />
      </Head>

      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl"
          >
            Happy Sips Juices
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-2xl max-w-3xl mx-auto drop-shadow-lg"
          >
            Discover our vibrant range of 100% real fruit juices, crafted to
            refresh and nourish.
          </motion.p>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl opacity-10"></div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 max-w-7xl mx-auto bg-orange-50">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-8 drop-shadow">
          Filter by Category
        </h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold text-base transition-colors shadow-md ${
                activeCategory === category.id
                  ? "bg-orange-600 text-white"
                  : "bg-white text-orange-700 hover:bg-orange-100"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto bg-yellow-50">
        {filteredProducts.length > 0 ? (
          <>
            <h2 className="text-4xl font-bold text-center text-orange-600 mb-12 drop-shadow-lg">
              Our Juices
            </h2>
            <ProductGrid
              products={filteredProducts}
              categories={categories.map((category) => category.name)}
              title="Happy Sips Juices"
            />
          </>
        ) : (
          <p className="text-center text-gray-700 text-lg">
            No products found in this category.
          </p>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-orange-100 to-yellow-100 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-orange-600 mb-6 drop-shadow-lg">
            Not Sure Which Juice to Pick?
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Take our quick quiz to find the perfect Happy Sips flavor for you!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/happy-sips/quiz"
              className="inline-block bg-orange-600 text-white font-bold py-5 px-10 rounded-full shadow-xl hover:bg-orange-700 transition-transform text-lg"
            >
              Take the Quiz
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HappySipsProducts;
