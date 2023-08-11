"use client"
import React, { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import adobya from "../../assets/adobya.svg"
import { Cart, Close, Instagram, Menu, Search } from "./Icons"
import { AnimatePresence, motion } from "framer-motion"
import { headerVariants } from "../lib/animation"
import SearchBarModal from "./elements/SearchBarModal"
import { MenuItem } from "./Menu"
import { useScrollPosition } from "@/lib/hooks/usePosition"

function Header() {
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ")
  }
  const scrollPosition = useScrollPosition()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isClosed, setIsClosed] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  // mobile nav style
  const isHiddenStyle = "hidden"
  const isVisibleStyle =
    "block lg:hidden absolute space-y-10 bg-transparent w-full  left-0 opacity-90  bg-gradient-to-tl from-slate-800 via-black to-black right-0 top-0 max-h-screen text-black overflow-y-hidden"

  /* Framer Motion animation properties for the children of the parent motion container */

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 500, damping: 24 },
    },
    closed: { opacity: 0, y: -120, transition: { duration: 0.2 } },
  }
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <AnimatePresence>
        {isModalOpen && <SearchBarModal closeModal={closeModal} />}
      </AnimatePresence>

      <motion.header
        className={classNames(
          scrollPosition > 0 ? "bg-black opacity-80" : "bg-transparent",
          "  sticky top-0 left-0 right-0 z-10 flex items-center justify-between space-x-2  px-10 py-5  max-h-screen"
        )}
      >
        <motion.div className="flex  items-center flex-no-shrink">
          <Link href="/">
            <Image src={adobya} width={100} height={50} alt="logo" />
          </Link>
        </motion.div>
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className={`hidden lg:flex  w-80 justify-between items-center`}
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
            <Search onClick={openModal} style={{ cursor: "pointer" }} />
          </motion.div>
          <motion.div
            variants={headerVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Cart size={24} />
          </motion.div>
        </motion.div>
        <motion.div
          className="block lg:hidden"
          onClick={() => {
            setIsClosed(!isClosed)
            setIsOpen(!isOpen)
            setIsHidden(!isHidden)
          }}
          initial={{ opacity: 0.6 }}
          whileInView={{ opacity: 1 }}
        >
          <div
            className={
              "z-50 absolute top-5 right-5 grid w-[20px] h-[20px] place-items-center rounded-full"
            }
          >
            {isHidden ? (
              <Menu style={{ cursor: "pointer" }} />
            ) : (
              <Close style={{ cursor: "pointer" }} />
            )}
          </div>
        </motion.div>
        <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 0px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 0px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          layout
          className={isHidden ? isHiddenStyle : isVisibleStyle}
        >
          <MenuItem openModal={openModal} />
        </motion.ul>
      </motion.header>
    </>
  )
}

export default Header
