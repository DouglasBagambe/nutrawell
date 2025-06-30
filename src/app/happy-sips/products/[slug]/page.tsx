"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Head from "next/head";

// Sample product data with detailed information (replace with CMS fetch in production)
const productData = {
  "mango-bliss": {
    id: "1",
    name: "Mango Bliss",
    description:
      "Pure mango juice with a tropical twist, crafted from the ripest Ugandan mangoes.",
    image: "https://picsum.photos/600/800?random=1",
    category: "classic",
    price: "4.99",
    ingredients: ["100% Ugandan Mango Juice", "Natural Vitamin C"],
    benefits: [
      "Rich in Vitamin C for immune support",
      "Natural energy boost from fruit sugars",
      "Hydrating and refreshing",
      "No added sugars or preservatives",
    ],
    nutritionFacts: {
      servingSize: "250ml",
      calories: "120",
      totalFat: "0g",
      sodium: "5mg",
      totalCarbs: "30g",
      sugars: "28g",
      protein: "1g",
      vitaminC: "60%",
    },
    story:
      "Our Mango Bliss is sourced from smallholder farmers in Uganda, where the tropical climate produces the sweetest, juiciest mangoes. Each bottle captures the essence of a sunny day, bringing a burst of flavor and nutrition to your life.",
  },
  "pineapple-punch": {
    id: "2",
    name: "Pineapple Punch",
    description:
      "Refreshing pineapple juice straight from Uganda, bursting with tangy sweetness.",
    image: "https://picsum.photos/600/800?random=2",
    category: "classic",
    price: "4.99",
    ingredients: ["100% Ugandan Pineapple Juice"],
    benefits: [
      "High in Vitamin C and antioxidants",
      "Supports digestion with natural enzymes",
      "Hydrates with a tropical flair",
      "No artificial additives",
    ],
    nutritionFacts: {
      servingSize: "250ml",
      calories: "130",
      totalFat: "0g",
      sodium: "2mg",
      totalCarbs: "32g",
      sugars: "30g",
      protein: "1g",
      vitaminC: "50%",
    },
    story:
      "Pineapple Punch embodies the vibrant spirit of Uganda's pineapple fields. Harvested at peak ripeness, this juice delivers a punch of flavor and health benefits in every sip, supporting local farmers with every bottle.",
  },
  "berry-blast-kids": {
    id: "3",
    name: "Berry Blast (Kids)",
    description:
      "Mixed berry juice perfect for little ones, packed with natural goodness.",
    image: "https://picsum.photos/600/800?random=3",
    category: "kids",
    price: "3.49",
    ingredients: [
      "Strawberry Juice",
      "Blueberry Juice",
      "Raspberry Juice",
      "Apple Juice (for sweetness)",
    ],
    benefits: [
      "Kid-friendly portion size",
      "Rich in antioxidants for growing bodies",
      "No added sugar, just natural fruit",
      "Boosts immunity with berry power",
    ],
    nutritionFacts: {
      servingSize: "200ml",
      calories: "90",
      totalFat: "0g",
      sodium: "3mg",
      totalCarbs: "22g",
      sugars: "20g",
      protein: "0.5g",
      vitaminC: "40%",
    },
    story:
      "Berry Blast is designed with kids in mind, combining the best berries into a fun, nutritious drink. Sourced sustainably, it supports Ugandan fruit growers while giving your child a healthy treat they’ll love.",
  },
  "citrus-zing-kids": {
    id: "4",
    name: "Citrus Zing (Kids)",
    description:
      "Tangy citrus blend in a kid-friendly size, full of zesty energy.",
    image: "https://picsum.photos/600/800?random=4",
    category: "kids",
    price: "3.49",
    ingredients: ["Orange Juice", "Lemon Juice", "Tangerine Juice"],
    benefits: [
      "Perfect size for small hands",
      "High in Vitamin C for immunity",
      "Natural hydration for active kids",
      "No artificial flavors or colors",
    ],
    nutritionFacts: {
      servingSize: "200ml",
      calories: "85",
      totalFat: "0g",
      sodium: "2mg",
      totalCarbs: "21g",
      sugars: "19g",
      protein: "0.5g",
      vitaminC: "70%",
    },
    story:
      "Citrus Zing brings a burst of sunshine to your child’s day. Made from Ugandan citrus fruits, this juice is a refreshing, healthy choice that supports local agriculture and keeps kids energized.",
  },
  "tropical-fusion": {
    id: "5",
    name: "Tropical Fusion",
    description:
      "Limited edition blend of exotic fruits, a rare tropical delight.",
    image: "https://picsum.photos/600/800?random=5",
    category: "special",
    price: "5.99",
    ingredients: [
      "Mango Juice",
      "Passion Fruit Juice",
      "Guava Juice",
      "Pineapple Juice",
    ],
    benefits: [
      "Unique blend for a special treat",
      "Packed with tropical vitamins and minerals",
      "Supports hydration with natural electrolytes",
      "Limited edition, exclusive flavor",
    ],
    nutritionFacts: {
      servingSize: "250ml",
      calories: "140",
      totalFat: "0g",
      sodium: "5mg",
      totalCarbs: "35g",
      sugars: "32g",
      protein: "1g",
      vitaminC: "60%",
    },
    story:
      "Tropical Fusion is a celebration of Uganda’s exotic fruit bounty. This limited edition blend is crafted in small batches, supporting sustainable farming while offering a taste adventure you won’t find anywhere else.",
  },
  "passion-fruit-glow": {
    id: "6",
    name: "Passion Fruit Glow",
    description:
      "Seasonal passion fruit juice to brighten your day with vibrant flavor.",
    image: "https://picsum.photos/600/800?random=6",
    category: "seasonal",
    price: "5.49",
    ingredients: ["100% Ugandan Passion Fruit Juice"],
    benefits: [
      "Seasonal flavor for a limited time",
      "High in antioxidants for skin health",
      "Natural mood booster with unique taste",
      "Supports local seasonal harvests",
    ],
    nutritionFacts: {
      servingSize: "250ml",
      calories: "110",
      totalFat: "0g",
      sodium: "4mg",
      totalCarbs: "27g",
      sugars: "25g",
      protein: "1g",
      vitaminC: "45%",
    },
    story:
      "Passion Fruit Glow captures the fleeting magic of Uganda’s passion fruit season. Available only for a short time, each bottle supports local farmers and brings a radiant, tangy glow to your palate.",
  },
};

const ProductDetail = () => {
  const params = useParams();
  const slug = params.slug as string;
  const product = productData[slug as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">
          Product Not Found
        </h1>
        <p className="text-gray-700 mb-6">
          Sorry, we couldn't find the product you're looking for.
        </p>
        <Link
          href="/happy-sips/products"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-50">
      <Head>
        <title>{product.name} | Happy Sips | Nutrawell</title>
        <meta
          name="description"
          content={`Discover ${product.name} from Happy Sips, a premium juice by Nutrawell. Learn about its ingredients, benefits, and nutritional facts.`}
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-yellow-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/60 to-yellow-500/60 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl"
          >
            {product.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-2xl md:text-3xl max-w-4xl mx-auto mb-10 drop-shadow-lg"
          >
            {product.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            <Link
              href="/happy-sips/products"
              className="inline-block bg-white text-orange-600 font-bold py-5 px-10 rounded-full shadow-xl hover:bg-gray-100 transition-transform transform hover:scale-105 text-lg"
            >
              Back to All Juices
            </Link>
          </motion.div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl opacity-10"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Product Image and Quick Info */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-500 hover:scale-105">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={800}
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                {product.category.charAt(0).toUpperCase() +
                  product.category.slice(1)}
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-orange-600 mb-5 drop-shadow-lg">
              About {product.name}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {product.story}
            </p>
            <div className="bg-orange-100 p-8 rounded-2xl shadow-lg border border-orange-200">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">
                Quick Facts
              </h3>
              <p className="text-gray-800 text-lg mb-3">
                <strong>Category:</strong>{" "}
                {product.category.charAt(0).toUpperCase() +
                  product.category.slice(1)}
              </p>
              <p className="text-gray-800 text-lg mb-3">
                <strong>Price:</strong> ${product.price}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#"
                  className="inline-block mt-4 bg-orange-600 text-white font-bold py-4 px-6 rounded-full shadow-lg hover:bg-orange-700 transition-transform text-lg"
                >
                  Add to Cart
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ingredients */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-orange-600 mb-8 text-center drop-shadow-lg">
            Ingredients
          </h2>
          <div className="bg-white p-10 rounded-2xl shadow-lg max-w-4xl mx-auto border border-orange-100">
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-3">
              {product.ingredients.map((ingredient, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {ingredient}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-orange-600 mb-8 text-center drop-shadow-lg">
            Health Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {product.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-yellow-100 p-8 rounded-2xl shadow-lg border border-yellow-200 transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-orange-500 mb-4 text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-800 text-lg font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Nutrition Facts */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-orange-600 mb-8 text-center drop-shadow-lg">
            Nutrition Facts
          </h2>
          <div className="bg-white p-10 rounded-2xl shadow-lg max-w-3xl mx-auto border border-orange-100">
            <p className="text-gray-800 text-lg mb-3">
              <strong>Serving Size:</strong>{" "}
              {product.nutritionFacts.servingSize}
            </p>
            <div className="border-t-2 border-gray-300 my-3"></div>
            <p className="text-gray-800 text-lg mb-2">
              <strong>Calories:</strong> {product.nutritionFacts.calories}
            </p>
            <p className="text-gray-800 text-lg mb-2">
              <strong>Total Fat:</strong> {product.nutritionFacts.totalFat}
            </p>
            <p className="text-gray-800 text-lg mb-2">
              <strong>Sodium:</strong> {product.nutritionFacts.sodium}
            </p>
            <p className="text-gray-800 text-lg mb-2">
              <strong>Total Carbohydrates:</strong>{" "}
              {product.nutritionFacts.totalCarbs}
            </p>
            <p className="text-gray-800 text-lg mb-2 pl-4">
              <strong>Sugars:</strong> {product.nutritionFacts.sugars}
            </p>
            <p className="text-gray-800 text-lg mb-2">
              <strong>Protein:</strong> {product.nutritionFacts.protein}
            </p>
            <p className="text-gray-800 text-lg mb-2">
              <strong>Vitamin C:</strong> {product.nutritionFacts.vitaminC} of
              Daily Value
            </p>
            <p className="text-gray-600 text-sm mt-3 italic">
              Percent Daily Values are based on a 2,000 calorie diet.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-orange-100 to-yellow-100 text-center rounded-2xl shadow-lg">
          <h2 className="text-4xl font-bold text-orange-600 mb-6 drop-shadow-lg">
            Love {product.name}?
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Share your experience with us on social media or explore more
            flavors from Happy Sips!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/happy-sips/products"
                className="inline-block bg-orange-600 text-white font-bold py-5 px-10 rounded-full shadow-xl hover:bg-orange-700 transition-transform text-lg"
              >
                Explore More Flavors
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="inline-block bg-white text-orange-600 font-bold py-5 px-10 rounded-full shadow-xl hover:bg-gray-100 transition-transform text-lg">
                Share on Social Media
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
