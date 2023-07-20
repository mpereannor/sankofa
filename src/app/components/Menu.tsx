import * as React from "react"
import { motion } from "framer-motion"
import { headerVariants } from "@/lib/animation"
import { Instagram, Search } from "./Icons"
const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
)

export const MenuToggle = ({ toggle }: any) => (
  <button
    onClick={toggle}
    className="bg-transparent rounded-full cursor-pointer absolute top-1.5 right-2.5 outline-none border-none w-12 h-12 select-none "
  >
    <svg width="20" height="20" viewBox="0 0 20 20">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
)

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const Navigation = ({openModal}:any) => (
  <motion.ul
  className="absolute top-12 w-full m-0"
    variants={variants}
    // style={{
    //   position: "absolute",
    //   top: "50px",
    //   width: "100%",
    //   margin: 0,
    // }}
  >
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

const MenuItem = ({openModal}:any) => {
  return (
    <motion.div
      className={`flex mt-2 p-10 gap-10 w-screen flex-col items-center h-screen`}
      variants={menuItemVariants}
    >
      <motion.div
        variants={headerVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Search onClick={openModal
        } />
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
