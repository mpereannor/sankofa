"use client"

import Link from "next/link"
import { Search } from "./Icons"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import SearchBarModal from "./elements/SearchBarModal"

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
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
      <div
        className="w-full flex flex-col justify-end bg-hero bg-no-repeat pt [10vh] relative h-screen bg-cover bg-center"
        style={{ backgroundSize: "100% cover" }}
      >
        <div className="flex  w-screen h-screen justify-center items-center">
          <div className="flex lg:flex-row items-center flex-col gap-y-6  justify-evenly w-[50%] ">
            <Link href={"/products"}>
              <button className="bg-[#111111] text-white  hover:bg-white w-[200px]  hover:text-black py-1 px-6   font-light ">
                Start Exploring
              </button>
            </Link>

            <button
              onClick={() => openModal()}
              className="bg-[#111111] text-white  hover:bg-white  w-[200px]    hover:text-black py-1 px-6   font-light "
            >
              Search
            </button>
          </div>
        </div>
        <div className="text-sm self-end p-8">
          Photo by{" "}
          <a
            className="text-white/[0.5] hover:text-white"
            href="https://unsplash.com/@goashape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            Goashape
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/Rb_wkrNoMnA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
      </div>
    </>
  )
}

export default Hero
