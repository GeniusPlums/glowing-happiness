"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Sharkathon() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-r from-veriseek-blue to-veriseek-blue/90 text-veriseek-white">
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-5xl font-bold mb-8 text-center text-veriseek-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sharkathon Competition
          </motion.h1>
          <motion.p
            className="text-xl text-center mb-12 max-w-3xl mx-auto text-veriseek-white/80"
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
            <Link href="#register" className="btn-primary bg-veriseek-yellow text-veriseek-blue hover:bg-veriseek-white">
              Register Now
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-veriseek-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="section-title text-center text-veriseek-blue"
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
              <div className="w-full h-48 bg-veriseek-blue/10 rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-veriseek-blue/40">
                  <span className="text-sm">Stage 1 Image</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-veriseek-blue">Stage 1: Intra-School Round</h3>
              <p className="text-veriseek-blue/80">Online, proctored MCQ test focused on critical thinking and problem-solving skills.</p>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-full h-48 bg-veriseek-blue/10 rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-veriseek-blue/40">
                  <span className="text-sm">Stage 2 Image</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-veriseek-blue">Stage 2: Inter-School Quarter-Finals</h3>
              <p className="text-veriseek-blue/80">Teams analyze financial data and prepare strategic recommendations for a designated company.</p>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-full h-48 bg-veriseek-blue/10 rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-veriseek-blue/40">
                  <span className="text-sm">Stage 3 Image</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-veriseek-blue">Stage 3: Semi-Finals and Finals</h3>
              <p className="text-veriseek-blue/80">Teams face real-world business scenarios, evaluating and critiquing pitches.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-veriseek-blue/10">
        <div className="container mx-auto px-6">
          <motion.h2
            className="section-title text-center text-veriseek-blue"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Key Dates
          </motion.h2>
          <motion.div
            className="bg-veriseek-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span className="font-bold text-veriseek-blue">School Participation Deadline:</span>
                <span>20th June 2025</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-bold text-veriseek-blue">Materials Provided:</span>
                <span>1st July 2025</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-bold text-veriseek-blue">Intra-School Test (Online):</span>
                <span>13th July 2025</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-bold text-veriseek-blue">Inter-School Case Study Analysis (Online):</span>
                <span>25th July 2025</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-bold text-veriseek-blue">Final Inter-School Competition (Offline):</span>
                <span>3rd August 2025</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="register" className="py-20 bg-veriseek-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="section-title text-center text-veriseek-blue"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Register for Sharkathon
          </motion.h2>
          <motion.div
            className="bg-veriseek-blue/10 rounded-lg shadow-xl p-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-veriseek-blue">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-veriseek-blue/50 shadow-sm focus:border-veriseek-blue focus:ring-veriseek-blue"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-veriseek-blue">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-veriseek-blue/50 shadow-sm focus:border-veriseek-blue focus:ring-veriseek-blue"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-veriseek-blue">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-md border-veriseek-blue/50 shadow-sm focus:border-veriseek-blue focus:ring-veriseek-blue"
                  required
                />
              </div>
              <div>
                <label htmlFor="school" className="block text-sm font-medium text-veriseek-blue">
                  School Name
                </label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  className="mt-1 block w-full rounded-md border-veriseek-blue/50 shadow-sm focus:border-veriseek-blue focus:ring-veriseek-blue"
                  required
                />
              </div>
              <div>
                <label htmlFor="schoolAddress" className="block text-sm font-medium text-veriseek-blue">
                  School Address
                </label>
                <textarea
                  id="schoolAddress"
                  name="schoolAddress"
                  rows={3}
                  className="mt-1 block w-full rounded-md border-veriseek-blue/50 shadow-sm focus:border-veriseek-blue focus:ring-veriseek-blue"
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="grade" className="block text-sm font-medium text-veriseek-blue">
                  Grade
                </label>
                <select
                  id="grade"
                  name="grade"
                  className="mt-1 block w-full rounded-md border-veriseek-blue/50 shadow-sm focus:border-veriseek-blue focus:ring-veriseek-blue"
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
                <button type="submit" className="w-full btn-primary bg-veriseek-yellow text-veriseek-blue hover:bg-veriseek-white">
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
