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

        <section className="px-2 py-4">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            justify-items-center gap-y-6 

    mb-[20px]"
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

    // <div class="grid grid--large">

    //     <div class="grid__cell grid__cell-c1-r1">
    //         <div class="grid__cell-img">
    //             <div class="grid__cell-img-inner" style="background-image:url(img/1.jpg)" data-item="item-1"></div>
    //         </div>
    //     </div>

    //     <div class="grid__cell grid__cell-c1-r2">
    //         <div class="grid__cell-img">
    //             <div class="grid__cell-img-inner" style="background-image:url(img/4.jpg)" data-item="item-4"></div>
    //         </div>
    //     </div>

    //     <div class="grid__cell grid__cell-c1-r4">
    //         <div class="grid__cell-img">
    //             <div class="grid__cell-img-inner" style="background-image:url(img/8.jpg)" data-item="item-8"></div>
    //         </div>
    //     </div>

    // </div>
    // <div class="content">
    //     <div class="content__item" id="item-1">
    //         <span class="content__item-number oh"><span class="oh__inner">01</span></span>
    //         <h2 class="content__item-heading oh"><span class="oh__inner">Masses</span></h2>
    //         <p class="content__item-text">
    //             The instruments by which public opinion is organized and focused may be misused. But such organization and focusing are necessary to orderly life.
    //         </p>
    //         <a class="content__item-link oh"><span class="oh__inner">View more</span></a>
    //         <nav class="slide-nav">
    //             <div class="slide-nav__img slide-nav__img--prev" style="background-image:url(img/11.jpg);"></div>
    //             <div class="slide-nav__img slide-nav__img--next" style="background-image:url(img/12.jpg);"></div>
    //         </nav>
    //     </div>

    //     <button class="back">
    //         <svg viewBox="0 0 50 9" width="100%"><path d="M0 4.5l5-3M0 4.5l5 3M50 4.5h-77"></path></svg>
    //     </button>
    //     <nav class="grid grid--mini">
    //         <div class="grid__cell grid__cell-c1-r1">
    //             <div class="grid__cell-img">
    //                 <div class="grid__cell-img-inner" style="background-image:url(img/1.jpg)"></div>
    //             </div>
    //         </div>
    //     </nav>
    // </div>
  )
}

export default Gallery
