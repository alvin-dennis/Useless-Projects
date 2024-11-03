import React from 'react'
import { motion } from 'framer-motion'

const Display = ({ value, loading }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/50 rounded-lg p-4 mb-4 h-20 flex items-center justify-end overflow-hidden"
    >
      {loading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-t-2 border-neon-green rounded-full"
        />
      ) : (
        <p className="text-2xl font-semibold text-neon-green break-all">{value}</p>
      )}
    </motion.div>
  )
}

export default Display