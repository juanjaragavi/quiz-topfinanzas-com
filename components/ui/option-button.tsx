"use client"

import { motion } from "framer-motion"

interface OptionButtonProps {
  id: string
  label: string
  selected: boolean
  onClick: () => void
  delay?: number
}

export default function OptionButton({ id, label, selected, onClick, delay = 0 }: OptionButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`option-button flex items-center w-full rounded-full overflow-hidden mb-2 ${
        selected ? "selected bg-[#2E74B5] text-white" : "bg-[#333333] text-white hover:bg-[#444444]"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={`circle flex items-center justify-center h-10 w-10 rounded-full text-sm ${
          selected ? "bg-[#8DC63F] text-white" : "bg-white text-[#2E74B5]"
        }`}
      >
        {id}
      </div>
      <div className="px-3 py-2 font-medium text-sm flex-grow">{label}</div>
    </motion.button>
  )
}

