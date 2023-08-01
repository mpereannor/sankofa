"use client"

import urlFor from "@/lib/urlFor"
import { AnimatePresence } from "framer-motion"
import Image from "next/image"
import ProductModal from "./elements/ProductModal"
import { useRef, useState } from "react"
type Props = { arts: Art[] }
function Gallery({ arts }: Props) {
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
      {isModalOpen && <ProductModal closeModal={closeModal} />}
      </AnimatePresence>

        <section className="p-2">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            justify-items-center gap-y-6 
    mb-[20px] "
          >
            {arts.map((art) => (
              <div
                key={art._id}
                className="rounded-xl  w-[300px] h-[200px] hover:scale-95 transition-transform duration-500 ease-in relative overflow-hidden"
                onClick={openModal}
              >
                <Image
                  src={urlFor(art.mainImage).url()}
                  alt={art.artist.name}
                  sizes="100vw"
                  fill
                  style={{ borderRadius: "15px", objectFit: "cover" }}
                  className="w-full h-auto  hover:scale-150 transition-transform duration-500 ease-out"
                />
              </div>
            ))}
          </div>
        </section>
    </>

    )
}

export default Gallery
