"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-r from-[#003366] to-[#004080] text-white">
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-5xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Veriseek
          </motion.h1>
          <motion.p
            className="text-xl text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Founded on the principles of truth and inquiry, Veriseek nurtures curiosity and fosters real-world knowledge
            to prepare today's students for tomorrow's leadership roles.
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
            Our Vision
          </motion.h2>
          <motion.p
            className="text-xl text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            To empower students with critical thought and action leadership skills directly in school, reducing the need
            for remedial training in high-growth industries and eliminating the gap between education and practical
            application.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h2 className="text-3xl font-bold mb-4 text-veriseek-blue">Our Mission</h2>
              <p className="mb-6">
                Veriseek is dedicated to empowering students with real-world skills through dynamic competitions and
                workshops. With a high bar for success, these engaging events seek to complement school education with
                foundational business skills.
              </p>
              <p>
                We are committed to providing students with opportunities to apply their academic knowledge in
                real-world scenarios, fostering critical thinking, structured thinking, and effective communication
                skills.
              </p>
              <motion.ul className="mt-6 space-y-2">
                {["Critical Thinking", "Problem Solving", "Financial Literacy", "Communication Skills"].map(
                  (skill, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <ArrowRight className="w-5 h-5 text-veriseek-blue mr-2" />
                      {skill}
                    </motion.li>
                  ),
                )}
              </motion.ul>
            </div>
            <motion.div
              className="relative h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/placeholders/about/students-collaborating.jpg"
                alt="Students collaborating"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#f0f7ff]">
        <div className="container mx-auto px-6">
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <TeamMember
              name="Rajat Kumar"
              role="Director"
              bio="A McKinsey alum and Wharton graduate, Rajat brings over 26 years of experience in finance, strategy, and leadership, in both international and national settings."
              delay={0.2}
            />
            <TeamMember
              name="Durba Ray"
              role="Director"
              bio="An Airtel alum and University of Rochester graduate, Durba has been active in various educational activities for several years, focusing on confident communication and fact-based thinking."
              delay={0.4}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

const TeamMember = ({ name, role, bio, delay }) => (
  <motion.div
    className="bg-white rounded-lg shadow-xl p-8 hover-grow"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay }}
  >
    <motion.div
      className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Image
        src={`/images/team/${name.toLowerCase().replace(" ", "-")}.jpg`}
        alt={name}
        width={128}
        height={128}
        className="object-cover"
      />
    </motion.div>
    <h3 className="text-2xl font-bold mb-2 text-veriseek-blue text-center">{name}</h3>
    <p className="text-center mb-4 text-veriseek-blue">{role}</p>
    <p className="text-center">{bio}</p>
  </motion.div>
)
