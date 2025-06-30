"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: "Products",
      dropdown: [
        {
          title: "Nutrawell Nutritious Foods",
          items: ["Smoothies", "Nutrition Bars", "Superfoods", "Supplements"],
        },
        {
          title: "Happy Sips Juices",
          items: [
            "Classic Juices",
            "Kids Juices",
            "Special Editions",
            "Seasonal Flavors",
          ],
        },
      ],
    },
    { title: "About Us", href: "/about" },
    { title: "Impact", href: "/impact" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-green-600">
                Nutrawell
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <button className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium">
                    {item.title}
                  </button>
                )}

                {item.dropdown && activeDropdown === item.title && (
                  <div className="absolute left-0 mt-2 w-96 bg-white rounded-lg shadow-lg py-2">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      {item.dropdown.map((section) => (
                        <div key={section.title}>
                          <h3 className="text-sm font-semibold text-gray-900 mb-2">
                            {section.title}
                          </h3>
                          <ul className="space-y-2">
                            {section.items.map((subItem) => (
                              <li key={subItem}>
                                <Link
                                  href={`/products/${subItem
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                  className="text-sm text-gray-600 hover:text-green-600"
                                >
                                  {subItem}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600"
                >
                  {item.title}
                </Link>
              ) : (
                <div className="px-3 py-2">
                  <button className="text-base font-medium text-gray-700 hover:text-green-600">
                    {item.title}
                  </button>
                  {item.dropdown && (
                    <div className="mt-2 space-y-2 pl-4">
                      {item.dropdown.map((section) => (
                        <div key={section.title}>
                          <h3 className="text-sm font-semibold text-gray-900">
                            {section.title}
                          </h3>
                          <ul className="mt-1 space-y-1">
                            {section.items.map((subItem) => (
                              <li key={subItem}>
                                <Link
                                  href={`/products/${subItem
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                  className="text-sm text-gray-600 hover:text-green-600"
                                >
                                  {subItem}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          <button className="w-full mt-4 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
