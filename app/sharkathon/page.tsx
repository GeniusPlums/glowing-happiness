"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Sharkathon() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    grade: '',
    city: '',
  })

  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
      } else {
        throw new Error('Registration failed')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage(error.message)
    }
  }

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
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLSewxQq0FLXY8Hd_tcVegLLoclm2hIrpKiK4CQPmmtiDDEuJbw/viewform?usp=header" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary bg-veriseek-yellow text-veriseek-blue hover:bg-veriseek-white"
            >
              Register Now
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-veriseek-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-veriseek-blue"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Join the Sharkathon Competition?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                number: "01",
                title: "Develops critical, structured thinking",
                delay: 0.2,
              },
              {
                number: "02",
                title: "Enhances financial literacy and strategic decision-making",
                delay: 0.3,
              },
              {
                number: "03",
                title: "Boosts communication skills through articulation of investment rationale",
                delay: 0.4,
              },
              {
                number: "04",
                title: "Skills that enhance college applications and future job prospects",
                delay: 0.5,
              },
              {
                number: "05",
                title: "Networking opportunities with industry leaders",
                delay: 0.6,
              },
            ].map((benefit) => (
              <motion.div
                key={benefit.number}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: benefit.delay }}
              >
                <div className="mb-4">
                  <span className="text-3xl font-bold text-veriseek-blue">{benefit.number}</span>
                  <div className="h-0.5 w-12 bg-veriseek-blue mt-2"></div>
                </div>
                <p className="text-veriseek-blue/80 text-lg">{benefit.title}</p>
              </motion.div>
            ))}
          </div>
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
                <Image
                  src="/images/placeholders/sharkathon/image-1.jpg"
                  alt="Intra-School Round"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
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
                <Image
                  src="/images/placeholders/sharkathon/image-2.jpg"
                  alt="Inter-School Quarter-Finals"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
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
                <Image
                  src="/images/placeholders/sharkathon/image-3.jpg"
                  alt="Semi-Finals and Finals"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-veriseek-blue">Stage 3: Semi-Finals and Finals</h3>
              <p className="text-veriseek-blue/80">Teams face real-world business scenarios, evaluating and critiquing pitches.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-veriseek-blue/5">
        <div className="container mx-auto px-6">
          <motion.h2
            className="section-title text-center text-veriseek-blue"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Eligibility & Fee
          </motion.h2>
          <motion.div
            className="bg-veriseek-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto mt-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ul className="space-y-4 text-veriseek-blue/80">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 rounded-full bg-veriseek-blue mr-3 shrink-0"></span>
                <span>Class 9 to Class 12</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 rounded-full bg-veriseek-blue mr-3 shrink-0"></span>
                <span>Fees: INR 2,500 including taxes</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 rounded-full bg-veriseek-blue mr-3 shrink-0"></span>
                <span>Inclusions and exclusions: Includes Reading and practice materials for respective stages</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 rounded-full bg-veriseek-blue mr-3 shrink-0"></span>
                <span>Breakfast and snacks</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 rounded-full bg-veriseek-blue mr-3 shrink-0"></span>
                <span>Venue for Offline event - Delhi NCR</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 rounded-full bg-veriseek-blue mr-3 shrink-0"></span>
                <span>Does not include invigilation of intra-school competition and logistics for inter-school events</span>
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
        </div>
      </section>
    </div>
  )
}
