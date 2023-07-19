"use client"
import React, { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import adobya from "../../../assets/adobya.svg"
import { Instagram, Search } from "./Icons"
import { AnimatePresence, motion, useCycle } from "framer-motion"
import {
  headerVariants,
  menuVariants,
  sidebarVariants,
} from "../../lib/animation"
import { useDimensions } from "../../lib/hooks/useDimensions"
import { MenuToggle, Navigation } from "./Menu"
import SearchBarModal from "./elements/Searchbar"
function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)
  return (
    <>
    <AnimatePresence>

      {isModalOpen && <SearchBarModal closeModal={closeModal} />}
    </AnimatePresence>
      <header className="flex items-center  justify-between space-x-2  px-10 py-5 ">
        <div className="flex  items-center flex-no-shrink">
          <Link href="/">
            <Image src={adobya} width={100} height={50} alt="logo" />
          </Link>
        </div>

        <motion.div
          variants={menuVariants}
          className={`hidden lg:flex  w-60 justify-between items-center`}
        >
          <motion.button
            variants={headerVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="bg-transparent text-white hover:bg-white hover:text-black py-1 px-6 border border-white font-light hover:border-transparent "
          >
            SHOP
          </motion.button>
          <motion.div
            variants={headerVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram />
          </motion.div>
          <motion.div
            variants={headerVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Search onClick={openModal} style={{cursor: "pointer"}} />
          </motion.div>
        </motion.div>

        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          className="block lg:hidden absolute top-0 left-0 bottom-0 w-full h-screen"
        >
          <motion.div
            className="bg-gradient-to-b from-black via-black to-black absolute top-0 right-0 bottom-0 w-full h-screen"
            variants={sidebarVariants}
          />
          <MenuToggle toggle={() => toggleOpen()} />

          <Navigation />
        </motion.nav>
      </header>
    </>
  )
}

export default Header
