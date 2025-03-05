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

        <div className="container mx-auto px-4 relative z-20 flex flex-col md:flex-row items-center justify-between">
          {/* Left side content */}
          <div className="text-veriseek-white max-w-xl mb-10 md:mb-0">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Veriseek's</h1>
              <h2 className="text-3xl md:text-4xl font-bold italic mb-6 text-veriseek-yellow">Sharkathon</h2>
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg mb-4">Pitch your idea to a mystery Shark Tank judge, get live feedback & win up to Rs. 30,00,000</p>
              
              <div className="mb-8">
                <p className="text-sm mb-2">Built by alumni from</p>
                <div className="flex space-x-4">
                  <div className="bg-white rounded-md p-2 h-10 flex items-center">
                    <span className="text-veriseek-blue text-xs font-bold">HARVARD</span>
                  </div>
                  <div className="bg-white rounded-md p-2 h-10 flex items-center">
                    <span className="text-veriseek-blue text-xs font-bold">KELLOGG</span>
                  </div>
                </div>
              </div>
              
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSewxQq0FLXY8Hd_tcVegLLoclm2hIrpKiK4CQPmmtiDDEuJbw/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-veriseek-yellow text-veriseek-blue hover:bg-veriseek-white hover:text-veriseek-blue transition-all duration-300 transform hover:scale-105 inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold uppercase"
              >
                Sign Up Now
                <ArrowRight className="ml-2" />
              </Link>
              
              <p className="text-sm mt-4">For 11th & 12th graders only</p>
            </motion.div>
          </div>
          
          {/* Right side image */}
          <motion.div
            className="relative w-full md:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <img 
                src="/winner-image.jpg" 
                alt="Sharkathon Winners" 
                className="w-full h-auto rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x400/white/gray?text=Sharkathon+Winners";
                }}
              />
            </div>
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

      {/* What is Sharkathon Section */}
      <section id="what-is-sharkathon" className="py-20 bg-veriseek-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-10">
            {/* Left side content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold mb-2">What is the <span className="text-veriseek-blue">Sharkathon</span>?</h2>
              <p className="text-gray-700 mb-6">
                A never-seen-before challenge that brings together the brightest, entrepreneurial minds from India's top schools
              </p>
              
              <div className="bg-veriseek-blue/10 rounded-lg p-4 inline-flex items-center mb-6">
                <span className="text-gray-700">Pitch to a shark tank judge & win up to Rs. 20,00,000</span>
                <Link 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSewxQq0FLXY8Hd_tcVegLLoclm2hIrpKiK4CQPmmtiDDEuJbw/viewform?usp=header"
                  className="ml-4 bg-veriseek-blue text-veriseek-white px-4 py-2 rounded flex items-center text-sm uppercase font-bold"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Right side video */}
            <div className="w-full lg:w-1/2 relative">
              <div className="bg-gray-200 rounded-lg overflow-hidden aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-veriseek-blue/80 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-14 border-transparent border-l-white ml-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                  <span>WHAT IS VERISEEK?</span>
                </div>
                <img 
                  src="/video-thumbnail.jpg" 
                  alt="What is Veriseek" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/600x400/gray/white?text=Veriseek+Video";
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {/* Card 1 */}
            <div className="bg-veriseek-blue/10 rounded-lg overflow-hidden">
              <div className="h-40 bg-veriseek-blue/20 flex items-center justify-center p-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <img src="/icons/lightbulb.svg" alt="Idea" className="w-10 h-10" onError={(e) => { e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxpZ2h0YnVsYiI+PHBhdGggZD0iTTEyIDJhNyA3IDAgMCAwLTcgN2MwIDIuMzggMS4xOSA0LjQ3IDMgNS43NFYxN2ExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMXYtMi4yNmMxLjgxLTEuMjcgMy0zLjM2IDMtNS43NGE3IDcgMCAwIDAtNy03eiIvPjxwYXRoIGQ9Ik0xMCAyMHY0aDR2LTQiLz48L3N2Zz4="; }} />
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">Ideate & build your startup idea from scratch</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-veriseek-blue/10 rounded-lg overflow-hidden">
              <div className="h-40 bg-veriseek-blue/20 flex items-center justify-center p-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <img src="/icons/handshake.svg" alt="Mentorship" className="w-10 h-10" onError={(e) => { e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhhbmRzaGFrZSI+PHBhdGggZD0ibTIwLjQyIDQuNTgtNS40OSA1LjQ5LTQuNy00LjctNS40OSA1LjQ5Yy0uNjMuNjMtLjE4IDEuNzEuNzEgMS43MWgyLjVjLjU1IDAgMS4wNi4yNiAxLjQyLjY4bC4xMi4xMmMuMi4yLjUxLjMuOC4zaDEuNDNjLjU1IDAgMS4wNS4yNiAxLjQxLjY3bC4xMy4xM2MuMjEuMjEuNS4zMy43OS4zM0gxOWMuODkgMCAxLjM0LTEuMDguNzEtMS43MWwtLjI5LS4yOVYxMGMwLTEuMTUuOTMtMi4xIDIuMDgtMi4xLjM5IDAgLjcxLS4zMi43MS0uNzF2LS41YzAtLjE5LS4wNy0uMzctLjIxLS41WiIvPjxwYXRoIGQ9Ik0yIDE5LjVoMTIuNSIvPjxwYXRoIGQ9Ik0xOSAxOWMwIC42LS40IDEuNS0xLjUgMS41aC0zYy0xLjEgMC0xLjUtLjktMS41LTEuNXYtM2MwLS42LjQtMS41IDEuNS0xLjVoM2MxLjEgMCAxLjUuOSAxLjUgMS41WiIvPjwvc3ZnPg=="; }} />
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">Get mentored by legendary startup leaders to perfect your pitch</p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-veriseek-blue/10 rounded-lg overflow-hidden">
              <div className="h-40 bg-veriseek-blue/20 flex items-center justify-center p-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <img src="/icons/search.svg" alt="Mystery Judge" className="w-10 h-10" onError={(e) => { e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNlYXJjaCI+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjxwYXRoIGQ9Im0yMSAyMS00LjM1LTQuMzUiLz48L3N2Zz4="; }} />
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">Pitch directly to a mystery celebrity Shark Tank judge</p>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="bg-veriseek-blue/10 rounded-lg overflow-hidden">
              <div className="h-40 bg-veriseek-blue/20 flex items-center justify-center p-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <img src="/icons/money-bag.svg" alt="Prize" className="w-10 h-10" onError={(e) => { e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJhbmtub3RlIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTIiIHg9IjIiIHk9IjYiIHJ4PSIyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMiIvPjxwYXRoIGQ9Ik06IDEwaDhNOCAxNGg0Ii8+PC9zdmc+"; }} />
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">Massive cash prizes up for grabs upto Rs. 20,00,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-veriseek-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16">The <span className="text-veriseek-blue italic">Roadmap</span>.</h2>
          
          <div className="relative pt-8">
            {/* Timeline steps */}
            <div className="flex flex-row items-center justify-between w-full relative">
              {/* Timeline line segments between circles */}
              <div className="absolute top-8 left-[calc(8.33%+8px)] w-[calc(16.67%-16px)] h-1 bg-veriseek-yellow/50"></div>
              <div className="absolute top-8 left-[calc(25%+8px)] w-[calc(16.67%-16px)] h-1 bg-veriseek-yellow/50"></div>
              <div className="absolute top-8 left-[calc(41.67%+8px)] w-[calc(16.67%-16px)] h-1 bg-veriseek-yellow/50"></div>
              <div className="absolute top-8 left-[calc(58.33%+8px)] w-[calc(16.67%-16px)] h-1 bg-veriseek-yellow/50"></div>
              <div className="absolute top-8 left-[calc(75%+8px)] w-[calc(16.67%-16px)] h-1 bg-veriseek-yellow/50"></div>
              
              {/* Step 1 */}
              <div className="flex flex-col items-center z-10">
                <div className="w-16 h-16 bg-veriseek-yellow/20 rounded-full flex items-center justify-center relative">
                  <img 
                    src="/icons/registration.svg" 
                    alt="Registration" 
                    className="w-8 h-8"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNsaXBib2FyZC1saXN0Ij48cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI0IiB4PSI4IiB5PSIyIiByeD0iMSIgcnk9IjEiLz48cGF0aCBkPSJNMTYgNHYyYTIgMiAwIDAgMS0yIDJINmEyIDIgMCAwIDEtMi0yVjRhMiAyIDAgMCAxIDItMmgxMGEyIDIgMCAwIDEgMiAyeiIvPjxwYXRoIGQ9Ik04IDEwaDhNOCAxNGg0Ii8+PC9zdmc+";
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-center mt-2">Step 1</h3>
                <p className="text-gray-700 text-center mt-2 text-sm max-w-[150px]">Register solo or with your dream team by filling out the registration form</p>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center z-10">
                <div className="w-16 h-16 bg-veriseek-yellow/20 rounded-full flex items-center justify-center relative">
                  <img 
                    src="/icons/video.svg" 
                    alt="Video" 
                    className="w-8 h-8"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXZpZGVvIj48cG9seWdvbiBwb2ludHM9IjIzIDcgMTYgMTIgMjMgMTcgMjMgNyIvPjxyZWN0IHdpZHRoPSIxNSIgaGVpZ2h0PSIxNCIgeD0iMSIgeT0iNSIgcng9IjIiIHJ5PSIyIi8+PC9zdmc+";
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-center mt-2">Step 2</h3>
                <p className="text-gray-700 text-center mt-2 text-sm max-w-[150px]">Submit a 3-minute video pitching your startup idea by April 10th, 2025</p>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center z-10">
                <div className="w-16 h-16 bg-veriseek-yellow/20 rounded-full flex items-center justify-center relative">
                  <img 
                    src="/icons/notification.svg" 
                    alt="Notification" 
                    className="w-8 h-8"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJlbGwiPjxwYXRoIGQ9Ik0xOCA4QTE2IDggMCAwIDAgNiA4YzAgNy0zIDkuMjYtMyA5LjI2aDEwIi8+PHBhdGggZD0iTTEzLjczIDE4YTggOCAwIDAgMS0zLjQ2IDBNMTggOGE2IDYgMCAwIDAtMTIgMCIvPjxwYXRoIGQ9Ik0yIDE4aDIwIi8+PC9zdmc+";
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-center mt-2">Step 3</h3>
                <p className="text-gray-700 text-center mt-2 text-sm max-w-[150px]">Await your shortlist notification after evaluation by a panel of startup experts</p>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col items-center z-10">
                <div className="w-16 h-16 bg-veriseek-yellow/20 rounded-full flex items-center justify-center relative">
                  <img 
                    src="/icons/location.svg" 
                    alt="Location" 
                    className="w-8 h-8"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1hcC1waW4iPjxwYXRoIGQ9Ik0yMCAxMGMwIDYtOCAxMi04IDEycy04LTYtOC0xMmE4IDggMCAwIDEgMTYgMFoiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSIzIi8+PC9zdmc+";
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-center mt-2">Step 4</h3>
                <p className="text-gray-700 text-center mt-2 text-sm max-w-[150px]">Touchdown at Veriseek Campus on April 19th, 2025 for shortlisted students</p>
              </div>
              
              {/* Step 5 */}
              <div className="flex flex-col items-center z-10">
                <div className="w-16 h-16 bg-veriseek-yellow/20 rounded-full flex items-center justify-center relative">
                  <img 
                    src="/icons/bootcamp.svg" 
                    alt="Bootcamp" 
                    className="w-8 h-8"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXJzIj48cGF0aCBkPSJNMTYgMjF2LTJhNCA0IDAgMCAwLTQtNEg2YTQgNCAwIDAgMC00IDR2MiIvPjxjaXJjbGUgY3g9IjkiIGN5PSI3IiByPSI0Ii8+PHBhdGggZD0iTTIyIDIxdi0yYTQgNCAwIDAgMC0zLTMuODdNMTYgMy4xM2E0IDQgMCAwIDEgMCA3Ljc1Ii8+PC9zdmc+";
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-center mt-2">Step 5</h3>
                <p className="text-gray-700 text-center mt-2 text-sm max-w-[150px]">Immerse yourself in a startup bootcamp: attend sessions & get 1:1 mentorship</p>
              </div>
              
              {/* Step 6 */}
              <div className="flex flex-col items-center z-10">
                <div className="w-16 h-16 bg-veriseek-yellow/20 rounded-full flex items-center justify-center relative">
                  <img 
                    src="/icons/pitch.svg" 
                    alt="Pitch" 
                    className="w-8 h-8"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1pY3JvcGhvbmUiPjxwYXRoIGQ9Ik0xMiAxYTMgMyAwIDAgMC0zIDN2OGEzIDMgMCAwIDAgNiAwVjRhMyAzIDAgMCAwLTMtM1oiLz48cGF0aCBkPSJNMTkgMTB2MmE3IDcgMCAwIDEtMTQgMHYtMk0xMiAxOXY0TTggMjNoOCIvPjwvc3ZnPg==";
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-center mt-2">Step 6</h3>
                <p className="text-gray-700 text-center mt-2 text-sm max-w-[150px]">Pitch to India's most influential entrepreneurs & unicorn founders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Veriseek Section */}
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

      {/* Learn More Section */}
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
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSewxQq0FLXY8Hd_tcVegLLoclm2hIrpKiK4CQPmmtiDDEuJbw/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
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
          <div className="flex justify-center mt-8">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSewxQq0FLXY8Hd_tcVegLLoclm2hIrpKiK4CQPmmtiDDEuJbw/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-veriseek-yellow text-veriseek-blue hover:bg-veriseek-white hover:text-veriseek-blue transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              Register Now
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
