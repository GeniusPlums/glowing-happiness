"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, BookOpen, Users, Award, ChevronDown } from "lucide-react"

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-veriseek-blue via-veriseek-blue to-veriseek-blue/90 rounded-b-3xl">
        <motion.div
          className="absolute inset-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-veriseek-yellow opacity-10"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>

        <div className="relative z-20 text-veriseek-white text-center px-4 max-w-4xl">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Veriseek
          </motion.h1>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering Future Leaders
          </motion.h2>
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/sharkathon"
              className="btn-primary bg-veriseek-yellow text-veriseek-blue hover:bg-veriseek-white hover:text-veriseek-blue transition-all duration-300 transform hover:scale-105 inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold"
            >
              Join Sharkathon
              <ArrowRight className="ml-2" />
            </Link>
            <Link
              href="#learn-more"
              className="btn-secondary bg-transparent border-2 border-veriseek-white text-veriseek-white hover:bg-veriseek-white hover:text-veriseek-blue transition-all duration-300 inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold"
            >
              Learn More
              <ChevronDown className="ml-2" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-8 h-8 text-veriseek-white" />
        </motion.div>
      </section>

      <section id="what-is-veriseek" className="py-20 bg-veriseek-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-veriseek-blue"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What is Veriseek?
          </motion.h2>
          <motion.div
            className="max-w-3xl mx-auto text-lg text-veriseek-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="mb-6">
              Veriseek is an innovative educational platform that bridges the gap between traditional academic learning and real-world professional skills. We empower students to develop practical expertise through hands-on projects, industry mentorship, and collaborative learning experiences.
            </p>
            <p>
              Our unique approach combines cutting-edge technology with experiential learning, preparing the next generation of leaders for the challenges and opportunities of tomorrow's workforce.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="learn-more" className="py-20 bg-veriseek-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="section-title text-center text-veriseek-blue"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-xl text-center mb-12 max-w-3xl mx-auto text-veriseek-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            To empower students with critical thought and action leadership skills directly in school, reducing the need
            for remedial training in high-growth industries and eliminating the gap between education and practical
            application.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-12 h-12 text-veriseek-blue mb-4 mx-auto" />,
                title: "Dynamic Competitions",
                description: "Engage in real-world business scenarios and sharpen your decision-making skills.",
              },
              {
                icon: <Users className="w-12 h-12 text-veriseek-blue mb-4 mx-auto" />,
                title: "Practical Workshops",
                description: "Learn from industry experts and apply your knowledge in hands-on sessions.",
              },
              {
                icon: <Award className="w-12 h-12 text-veriseek-blue mb-4 mx-auto" />,
                title: "Skill Development",
                description: "Enhance your critical thinking, communication, and leadership abilities.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="card hover-grow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {item.icon}
                <h3 className="text-2xl font-bold mb-4 text-veriseek-blue text-center">{item.title}</h3>
                <p className="text-center text-veriseek-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-veriseek-blue-100 relative overflow-hidden rounded-3xl">
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            className="section-title text-center text-veriseek-blue"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Upcoming Event: Sharkathon
          </motion.h2>
          <motion.div
            className="bg-veriseek-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto glass-effect"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-veriseek-blue">Join the Sharkathon Competition</h3>
            <p className="mb-6 text-veriseek-gray-700">
              Experience the thrill of evaluating real-world business pitches and making strategic investment decisions.
              Enhance your skills in critical thinking, financial analysis, and teamwork.
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2 text-veriseek-gray-700">
              <li>Open to students in grades 9 to 12</li>
              <li>Three-stage competition process</li>
              <li>Guidance from industry mentors</li>
              <li>Prizes and recognition for top teams</li>
            </ul>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/sharkathon" className="btn-primary inline-flex items-center">
                Learn More About Sharkathon
                <ArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-veriseek-blue-100">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-veriseek-blue"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            className="mt-12 space-y-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-veriseek-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2 text-veriseek-blue">How can I participate in Sharkathon?</h3>
              <p className="text-veriseek-gray-700">
                To participate in Sharkathon, you need to register through our website. Check the Sharkathon page for
                more details on eligibility and registration process.
              </p>
            </div>
            <div className="bg-veriseek-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2 text-veriseek-blue">What resources are available for participants?</h3>
              <p className="text-veriseek-gray-700">
                We provide a range of resources including training materials, workshops, and mentorship opportunities during the competition.
              </p>
            </div>
            <div className="bg-veriseek-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2 text-veriseek-blue">
                How can schools get involved with Veriseek Education?
              </h3>
              <p className="text-veriseek-gray-700">
                Schools can partner with us to bring our programs to their students. Please contact us for more
                information on school partnerships and collaborations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-veriseek-blue text-veriseek-white rounded-t-3xl">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get Started Today
          </motion.h2>
          <motion.p
            className="text-xl text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join us in shaping the future of education.
          </motion.p>
        </div>
      </section>
    </div>
  )
}
