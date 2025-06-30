"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: "Nutrawell Foods", href: "/products/nutrawell" },
      { name: "Happy Sips", href: "/products/happy-sips" },
      { name: "New Arrivals", href: "/products/new" },
      { name: "Best Sellers", href: "/products/best-sellers" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Impact", href: "/impact" },
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
    ],
  };

  const socialLinks = [
    { name: "Facebook", href: "#", icon: "/icons/facebook.svg" },
    { name: "Instagram", href: "#", icon: "/icons/instagram.svg" },
    { name: "Twitter", href: "#", icon: "/icons/twitter.svg" },
    { name: "LinkedIn", href: "#", icon: "/icons/linkedin.svg" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-white">Nutrawell</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Bringing pure, organic nutrition from Uganda to the world.
              Experience the natural goodness of Nutrawell Organics and Happy
              Sips.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social.name}</span>
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Products
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Support
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Nutrawell Organics. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
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
