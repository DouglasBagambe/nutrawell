"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://picsum.photos/1920/1080?random=18"
              alt="Nutrawell Organics - Contact Us"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-700/50" />
          </div>
          <div className="relative text-center text-white z-10 px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="text-xl md:text-3xl max-w-3xl mx-auto drop-shadow"
            >
              We're here to help with any questions or feedback
            </motion.p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-green-700 mb-8 drop-shadow">
                  Get in Touch
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="mr-3 text-green-600 text-2xl">📍</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Address
                      </h3>
                      <p className="text-gray-700 text-lg">
                        123 Nutrition Street
                        <br />
                        Kampala, Uganda
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-green-600 text-2xl">📞</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Phone
                      </h3>
                      <p className="text-gray-700 text-lg">+256 123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-green-600 text-2xl">✉️</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Email
                      </h3>
                      <p className="text-gray-700 text-lg">
                        info@nutrawellorganics.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-green-600 text-2xl">⏰</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Business Hours
                      </h3>
                      <p className="text-gray-700 text-lg">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-700 transition-transform"
                  >
                    Call Us Now
                  </motion.button>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-green-100"
              >
                <h3 className="text-2xl font-bold text-green-700 mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-600 focus:border-transparent shadow-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-600 focus:border-transparent shadow-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-600 focus:border-transparent shadow-sm"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="products">Product Information</option>
                      <option value="partnership">
                        Partnership Opportunities
                      </option>
                      <option value="support">Customer Support</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent shadow-sm"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-transform shadow-lg"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-green-700 mb-16 drop-shadow">
              Find Us
            </h2>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d249.3495027763866!2d30.666334733955456!3d-0.6102141769695296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shappy%20sips%20%20mbarara!5e0!3m2!1sen!2sug!4v1751287382816!5m2!1sen!2sug"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Visit Us in Mbarara
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
