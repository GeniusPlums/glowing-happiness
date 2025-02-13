"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Resources() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-5xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Resources
          </motion.h1>
          <motion.p
            className="text-xl text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Enhance your skills with our curated collection of learning materials and tools.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Learning Materials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Financial Analysis</h3>
              <p className="mb-4">Learn the fundamentals of financial statement analysis and valuation techniques.</p>
              <Link href="#" className="text-blue-600 hover:underline">
                Access Materials
              </Link>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Business Strategy</h3>
              <p className="mb-4">Explore key concepts in business strategy and competitive analysis.</p>
              <Link href="#" className="text-blue-600 hover:underline">
                Access Materials
              </Link>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Presentation Skills</h3>
              <p className="mb-4">Improve your ability to create and deliver compelling presentations.</p>
              <Link href="#" className="text-blue-600 hover:underline">
                Access Materials
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-100">
        <div className="container mx-auto px-6">
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Recommended Tools
          </motion.h2>
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ul className="space-y-4">
              <li>
                <h3 className="text-xl font-bold text-blue-800">Financial Modeling Tools</h3>
                <p>Excel templates and online platforms for creating financial models.</p>
              </li>
              <li>
                <h3 className="text-xl font-bold text-blue-800">Market Research Databases</h3>
                <p>Access to industry reports and market data for in-depth analysis.</p>
              </li>
              <li>
                <h3 className="text-xl font-bold text-blue-800">Presentation Software</h3>
                <p>Tools for creating professional and engaging presentations.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Upcoming Workshops
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Financial Modeling Masterclass</h3>
              <p className="mb-4">Learn advanced techniques for building comprehensive financial models.</p>
              <p className="font-bold">Date: July 15, 2025</p>
              <Link href="#" className="btn-primary mt-4 inline-block">
                Register Now
              </Link>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Pitch Perfect: Presentation Skills Workshop</h3>
              <p className="mb-4">Enhance your ability to deliver compelling business presentations.</p>
              <p className="font-bold">Date: August 5, 2025</p>
              <Link href="#" className="btn-primary mt-4 inline-block">
                Register Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

