import * as React from "react"
import { motion } from "framer-motion"
import { headerVariants, menuVariants } from "@/lib/animation"
import { Close, Instagram, Search, Shopping_Cart } from "./Icons"
import Link from "next/link"

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

export const MenuItem = ({ openModal,handleToggle, open }: any) => {
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
        className="bg-transparent text-white py-1 px-6  font-light hover:border-transparent "
      >
        <Link href="/products">Gallery</Link>
      </motion.button>

      <motion.button
        variants={headerVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        type="button"
        className="bg-transparent text-white py-1 px-6  font-light hover:border-transparent "
      >
        <Link href="/shop">Shop</Link>
      </motion.button>
      <motion.div
        variants={headerVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div onClick={handleToggle}>
          {open ? <Close /> : <Shopping_Cart size={28} />}
        </div>
      </motion.div>
    </motion.div>
  )
}
