"use client"
import Link from "next/link"
import Image from "next/image"
import sankofa from "../../assets/sankofa.svg"
import { motion } from "framer-motion"

function HeaderSanity() {
  return (
    <>
      <motion.header className="bg-black sticky top-0 left-0 right-0 z-10 flex items-center justify-between space-x-2  px-10 py-5  max-h-screen">
        <motion.div className="flex  items-center flex-no-shrink">
          <Link href="/">
            <Image src={sankofa} width={100} height={50} alt="logo" />
          </Link>
        </motion.div>
      </motion.header>
    </>
  )
}

export default HeaderSanity
