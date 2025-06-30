"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      title: "Products",
      href: "/products",
      dropdown: [
        {
          title: "Nutrawell Nutritious Foods",
          items: ["Smoothies", "Nutrition Bars", "Superfoods", "Supplements"],
        },
      ],
    },
    { title: "About Us", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  const happySipsItem = {
    title: "Happy Sips",
    href: "/happy-sips",
    standout: true,
  };

  // Determine navbar background and text color based on scroll position only
  const navBgClass = !isScrolled
    ? "bg-gradient-to-r from-green-800/90 to-green-700/90 backdrop-blur-md"
    : "bg-white/95 backdrop-blur-md shadow-md";
  const navTextClass = !isScrolled ? "text-white" : "text-green-700";
  const navHoverClass = !isScrolled
    ? "hover:text-green-300"
    : "hover:text-green-600";

  return (
    <nav
      className={`fixed w-full ${navBgClass} z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex-shrink-0 flex items-center transition-transform transform hover:scale-105"
            >
              <motion.span
                className={`text-3xl font-bold ${
                  !isScrolled ? "text-green-300" : "text-green-600"
                } drop-shadow-lg`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Nutrawell
              </motion.span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
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
                    className={`px-4 py-3 text-base font-medium ${navTextClass} ${navHoverClass} transition-colors rounded-full`}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <button
                    className={`px-4 py-3 text-base font-medium ${navTextClass} ${navHoverClass} transition-colors rounded-full`}
                  >
                    {item.title}
                    <svg
                      className="inline-block ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}

                {item.dropdown && activeDropdown === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-96 bg-white rounded-2xl shadow-xl py-3 overflow-hidden border border-green-100"
                  >
                    <div className="grid grid-cols-2 gap-4 p-5">
                      {item.dropdown.map((section) => (
                        <div key={section.title}>
                          <h3 className="text-sm font-semibold text-green-700 mb-3">
                            {section.title}
                          </h3>
                          <ul className="space-y-3">
                            {section.items.map((subItem) => (
                              <li key={subItem}>
                                <Link
                                  href="/products"
                                  className="text-sm text-gray-700 hover:text-green-600 transition-colors"
                                >
                                  {subItem}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
            {/* Special Happy Sips Section */}
            <motion.div whileHover={{ scale: 1.05 }} className="relative ml-4">
              <Link
                href={happySipsItem.href}
                className="px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-lg transition-all relative overflow-hidden"
              >
                <span className="relative z-10">{happySipsItem.title}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${navTextClass} ${navHoverClass} focus:outline-none transition-colors`}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-7 w-7`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-7 w-7`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div
          className={`px-2 pt-2 pb-3 space-y-2 sm:px-3 ${
            !isScrolled ? "bg-green-800/95" : "bg-white/95"
          }`}
        >
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.href ? (
                <Link
                  href={item.href}
                  className={`block px-4 py-3 text-lg font-medium ${navTextClass} ${navHoverClass} rounded-lg`}
                >
                  {item.title}
                </Link>
              ) : (
                <div className="px-4 py-3">
                  <button
                    className={`text-lg font-medium ${navTextClass} ${navHoverClass}`}
                  >
                    {item.title}
                  </button>
                  {item.dropdown && (
                    <div className="mt-3 space-y-3 pl-5">
                      {item.dropdown.map((section) => (
                        <div key={section.title}>
                          <h3 className="text-base font-semibold text-green-700">
                            {section.title}
                          </h3>
                          <ul className="mt-2 space-y-2">
                            {section.items.map((subItem) => (
                              <li key={subItem}>
                                <Link
                                  href="/products"
                                  className={`text-base ${navTextClass} ${navHoverClass}`}
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
          {/* Special Happy Sips Section for Mobile */}
          <motion.div whileTap={{ scale: 0.95 }} className="mt-4 mx-2">
            <Link
              href={happySipsItem.href}
              className="block px-6 py-5 text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl shadow-lg relative overflow-hidden"
            >
              <span className="relative z-10">{happySipsItem.title}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
