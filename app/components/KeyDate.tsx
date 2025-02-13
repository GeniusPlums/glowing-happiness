import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import type React from "react" // Added import for React

interface KeyDateProps {
  date: string
  event: string
}

const KeyDate: React.FC<KeyDateProps> = ({ date, event }) => (
  <motion.li
    className="flex justify-between items-center"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <span className="font-bold flex items-center">
      <Calendar className="w-5 h-5 mr-2 text-blue-600" />
      {event}
    </span>
    <span>{date}</span>
  </motion.li>
)

export default KeyDate

