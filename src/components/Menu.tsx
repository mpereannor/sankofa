import * as React from "react"
import { motion } from "framer-motion"
import { headerVariants, menuVariants } from "@/lib/animation"
import { Instagram, Search } from "./Icons"


export const Navigation = ({ openModal }: any) => (
  <motion.ul variants={menuVariants}>
    <MenuItem openModal={openModal} />
  </motion.ul>
)

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const MenuItem = ({ openModal }: any) => {
  return (
    <motion.div
      className={`flex mt-20 p-10 gap-20 w-screen flex-col items-center h-screen  `}
      variants={menuItemVariants}
    >
      <motion.div
        variants={headerVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Search onClick={openModal} />
      </motion.div>
      <motion.div
        variants={headerVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Instagram />
      </motion.div>
      <motion.button
        variants={headerVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        type="button"
        className="bg-transparent text-white hover:bg-white hover:text-black py-1 px-6 border border-white font-light hover:border-transparent "
      >
        SHOP
      </motion.button>
    </motion.div>
  )
}
