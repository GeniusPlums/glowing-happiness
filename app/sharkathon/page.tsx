"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Sharkathon() {
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
            Sharkathon Competition
          </motion.h1>
          <motion.p
            className="text-xl text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            An experiential challenge for students in grades 9 to 12. Evaluate real-world business pitches and make
            strategic investment decisions.
          </motion.p>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="#register" className="btn-primary bg-yellow-400 text-blue-800 hover:bg-white">
              Register Now
            </Link>
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
            Competition Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="text-sm">Stage 1 Image</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Stage 1: Intra-School Round</h3>
              <p>Online, proctored MCQ test focused on critical thinking and problem-solving skills.</p>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="text-sm">Stage 2 Image</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Stage 2: Inter-School Quarter-Finals</h3>
              <p>Teams analyze financial data and prepare strategic recommendations for a designated company.</p>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="text-sm">Stage 3 Image</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Stage 3: Semi-Finals and Finals</h3>
              <p>Teams face real-world business scenarios, evaluating and critiquing pitches.</p>
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
            Key Dates
          </motion.h2>
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span className="font-bold">School Participation Deadline:</span>
                <span>20th June 2025</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-bold">Resources Provided:</span>
                <span>1st July 2025</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-bold">Intra-School Test (Online):</span>
                <span>13th July 2025</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-bold">Inter-School Case Study Analysis (Online):</span>
                <span>25th July 2025</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-bold">Final Inter-School Competition (Offline):</span>
                <span>3rd August 2025</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="register" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Register for Sharkathon
          </motion.h2>
          <motion.div
            className="bg-blue-100 rounded-lg shadow-xl p-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="school" className="block text-sm font-medium text-gray-700">
                  School Name
                </label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="schoolAddress" className="block text-sm font-medium text-gray-700">
                  School Address
                </label>
                <textarea
                  id="schoolAddress"
                  name="schoolAddress"
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
                  Grade
                </label>
                <select
                  id="grade"
                  name="grade"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Grade</option>
                  <option value="9">9th Grade</option>
                  <option value="10">10th Grade</option>
                  <option value="11">11th Grade</option>
                  <option value="12">12th Grade</option>
                </select>
              </div>
              <div>
                <button type="submit" className="w-full btn-primary">
                  Register for Sharkathon
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
