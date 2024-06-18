"use client"
import { motion } from "framer-motion"
import Image from "next/image"

import { IProduct } from "@/lib/model"
import {  Close } from "@/components/Icons"
import { getProductDetail } from "@/lib/queries"
import { client } from "../../../../../sanity/lib/client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import AddToCartButton from "@/components/elements/AddToCartButton"
import AddToWishlistButton from "@/components/elements/AddToWishlistButton"

const ProductModalPage = async (props: any) => {
  const { slug } = props.params

  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)
  const [activeImg, updateActiveImg] = useState("")
  const product: IProduct = await client.fetch(getProductDetail, { slug })
  const closeModal = () => {
    router.push("/products")
  }

  return (
    <>
      {isOpen && (
        <>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.75,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                ease: "easeOut",
                duration: 0.2,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
              transition: {
                ease: "easeIn",
                duration: 0.2,
              },
            }}
            className="
          fixed bg-white overflow-x-hidden overflow-y-hidden outline-none inset-0 z-50 focus-outline-none w-full md:w-5/6 mx-auto  md:mt-20 md:rounded-xl md:max-h-[80vh] h-screen "
          >
            <div className=" w-full h-full flex flex-col md:flex-row-reverse items-center  ">
              <div className=" z-10 absolute top-0 right-0 mx-4 my-2 opacity-50 hover:opacity-100">
                <Close
                  onClick={closeModal}
                  size={30}
                  className="rounded-2xl bg-black p-1.5"
                />
              </div>
              {/* image carousel */}
              <div
                className="
              w-full 
              h-[70%] 
              md:h-full 
              relative 
              md:w-[50%] 
              lg:w-[60%] 
              grid 
              grid-cols-6
              grid-rows-6
              lg:grid-rows-1
              overflow-hidden
              "
              >
                {/* navigation */}
                <nav
                  className="
                  relative
                  row-span-1
                  row-start-5
                  row-end-7
                  lg:row-start-auto
                  lg:row-end-auto
                  col-span-6
                lg:col-span-1 
                flex
                flex-wrap
              lg:flex-col
              lg:flex-nowrap
                lg:overflow-x-hidden
                overflow-y-scroll
                "
                >
                  {product?.gallery.map((imgs: string, index: number) => (
                    <a
                      href={`#${imgs}-${index}`}
                      key={imgs}
                      className="opacity-50 bg-white hover:opacity-100 ease-linear focus:opacity-100"
                    >
                      <Image
                        className=""
                        src={imgs}
                        alt={product?.name}
                        sizes="33vw"
                        width={100}
                        height={50}
                        style={{ objectFit: "cover" }}
                      />
                    </a>
                  ))}
                </nav>
                <div
                  className="
                  row-span-5
                  lg:row-span-6 
                  row-start-1
                  row-end-5
                col-span-6 
                lg:col-span-5
                overflow-x-scroll
                overflow-y-hidden
                snap-x 
                snap-mandatory 
                scroll-smooth 
                overflow-scroll 
                flex 
                relative"
                >
                  {/* wishlistIcon */}
                  <div className=" z-10 absolute top-0 left-0 mx-4 my-2  hover:opacity-100">
                    <AddToWishlistButton product={product} />{" "}
                  </div>
                  {product?.gallery.map((imgs: string, index: number) => (
                    <div
                      id={`${imgs}-${index}`}
                      key={imgs}
                      className="
                      min-w-full
                      relative  
                      scroll-start  
                      snap-start"
                    >
                      <Image
                        className="block max-w-full"
                        src={imgs}
                        alt={product?.name}
                        sizes="33vw"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[#111111] bg-white w-full h-30%  md:h-full flex flex-col md:w-[50%]  lg:w-[40%] m-2 gap-3 md:gap-10 py-2 md:p-4 align-center justify-center md:justify-normal">
                <div className="flex flex-col gap-1 text-center items-center md:items-start">
                  <p className=" font-semibold">{product?.name}</p>

                  <p className="font-thin text-sm text-left">
                    {product?.description}
                  </p>
                  <p className="font-light mt-2">GHS {product?.price}.00</p>
                </div>
                <div className="flex justify-around md:flex-col lg:flex-row lg:justify-between md:gap-4  md:w-[80%] ">
                  <AddToCartButton product={product} />
                  <a href={product?.link} target="_blank" rel="noreferrer">
                    <button className="bg-[#111111] text-white hover:bg-white hover:border hover:border-[#111111] hover:text-black py-1 px-6 font-light ">
                      View on IG
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <div
            onClick={closeModal}
            className="opacity-80 fixed inset-0 z-40 bg-black"
          ></div>
        </>
      )}
    </>
  )
}

export default ProductModalPage

export const revalidate = 60;
