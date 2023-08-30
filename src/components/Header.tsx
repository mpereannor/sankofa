"use client"
import React, { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import adobya from "../../assets/adobya.svg"
import { Close, Instagram, Menu, Search, Shopping_Cart } from "./Icons"
import { AnimatePresence, Cycle, motion, useCycle } from "framer-motion"
import { headerVariants } from "../lib/animation"
import SearchBarModal from "./elements/SearchBarModal"
import { MenuItem } from "./Menu"
import { useScrollPosition } from "@/lib/hooks/usePosition"
import Cart from "./Cart"

function Header() {
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ")
  }
  const scrollPosition = useScrollPosition()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isClosed, setIsClosed] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(true)
  const [open, cycleOpen] = useCycle(false, true)

  // mobile nav style
  const isHiddenStyle = "hidden"
  const isVisibleStyle =
    "block lg:hidden absolute space-y-10 bg-transparent w-full  left-0 opacity-90  bg-gradient-to-tl from-slate-800 via-black to-black right-0 top-0 max-h-screen text-black overflow-y-hidden"

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleToggle = () => {
    cycleOpen()
  }
  return (
    <>
      <AnimatePresence>
        {isModalOpen && <SearchBarModal closeModal={closeModal} />}
      </AnimatePresence>

      <motion.header
        className={classNames(
          scrollPosition > 0 ? "bg-black opacity-80 sticky" : "bg-transparent",
          "  fixed top-0 left-0 right-0 z-10 flex items-center justify-between space-x-2  px-10 py-5  max-h-screen"
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
          className={`hidden lg:flex  w-80 justify-evenly items-center `}
        >
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
            className="py-1 px-6"
          >
            <Instagram />
          </motion.div>
          <motion.div
            variants={headerVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="py-1 px-6"
          >
            <Search onClick={openModal} style={{ cursor: "pointer" }} />
          </motion.div>
          <motion.div
            variants={headerVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="py-1 px-6"
          >
            <div onClick={handleToggle}>
              {open ? <Close /> : <Shopping_Cart size={28} />}
            </div>
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
      <Cart cartOpen={open} />
    </>
  )
}

export default Header
