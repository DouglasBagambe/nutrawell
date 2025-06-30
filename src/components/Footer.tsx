"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    nutrawellProducts: [
      { name: "Nutrawell Foods", href: "/products/nutrawell" },
      { name: "Smoothies", href: "/products/smoothies" },
      { name: "Nutrition Bars", href: "/products/bars" },
      { name: "Superfoods", href: "/products/superfoods" },
    ],
    happySipsProducts: [
      {
        name: "Happy Sips Juices",
        href: "/happy-sips/products",
        standout: true,
      },
      { name: "Classic Flavors", href: "/happy-sips/products/classic" },
      { name: "Kids Juices", href: "/happy-sips/products/kids" },
      { name: "Seasonal Specials", href: "/happy-sips/products/seasonal" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQs", href: "/faqs" },
      { name: "Shipping", href: "/shipping" },
      { name: "Returns", href: "/returns" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Sitemap", href: "/sitemap" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column with Newsletter */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block transition-transform transform hover:scale-105"
            >
              <span className="text-3xl font-bold text-green-400 drop-shadow-lg">
                Nutrawell
              </span>
            </Link>
            <p className="mt-5 text-gray-300 max-w-md text-lg leading-relaxed">
              Bringing pure, organic nutrition from Uganda to the world.
              Experience the unrivaled quality of Nutrawell Organics and the
              vibrant energy of Happy Sips.
            </p>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-3">
                Join Our Community
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Subscribe for exclusive offers and nutrition tips.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-transform transform hover:scale-105 shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="mt-8 flex space-x-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-300 hover:text-green-400 transition-transform transform hover:scale-110 text-lg font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-5">
              Nutrawell Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.nutrawellProducts.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-5">
              Happy Sips
            </h3>
            <ul className="space-y-3">
              {footerLinks.happySipsProducts.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-base transition-colors ${
                      link.standout
                        ? "text-orange-400 hover:text-orange-300 font-semibold"
                        : "text-gray-300 hover:text-orange-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-5">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications and Bottom Section */}
        <div className="mt-16 pt-10 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-300 text-sm">
                © {currentYear} Nutrawell Organics. All rights reserved.
              </p>
              <div className="mt-4 flex flex-wrap gap-6">
                <div className="bg-green-800/50 px-4 py-2 rounded-lg text-xs text-gray-200">
                  Organic Certified
                </div>
                <div className="bg-green-800/50 px-4 py-2 rounded-lg text-xs text-gray-200">
                  B-Corp Certified
                </div>
                <div className="bg-green-800/50 px-4 py-2 rounded-lg text-xs text-gray-200">
                  Fair Trade
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
