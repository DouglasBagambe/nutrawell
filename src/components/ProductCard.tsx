"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price: string;
  isNew?: boolean;
}

const ProductCard = ({
  id,
  name,
  description,
  image,
  category,
  price,
  isNew = false,
}: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-xl shadow-md overflow-hidden"
    >
      <Link href={`/products/${id}`}>
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isNew && (
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              New
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="text-sm text-green-600 font-medium mb-2">
            {category}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">{price}</span>
            <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
