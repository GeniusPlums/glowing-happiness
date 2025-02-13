import type React from "react"
import { motion } from "framer-motion"

interface CompetitionStageProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

const CompetitionStage: React.FC<CompetitionStageProps> = ({ icon, title, description, delay }) => (
  <motion.div
    className="card hover-grow"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-4 text-blue-800 text-center">{title}</h3>
    <p className="text-center">{description}</p>
  </motion.div>
)

export default CompetitionStage

