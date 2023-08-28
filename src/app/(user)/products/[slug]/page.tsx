"use client"
import { motion } from "framer-motion"
import Image from "next/image"

import { IProduct } from "@/lib/model"
import { Close, Heart } from "@/components/Icons"
import { getProductDetail } from "@/lib/queries"
import { client } from "../../../../../sanity/lib/client"
import { useState } from "react"
import { useRouter } from "next/navigation"


const ProductModalPage = async (props: any) => {
  const { slug } = props.params

  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)
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
             
              <div className=" w-full h-[70%] md:h-full relative md:w-[50%] lg:w-[60%] ">
              <div className=" z-10 absolute top-0 left-0 mx-4 my-2 opacity-50 hover:opacity-100">
                <Heart
                  size={30}
                  className="rounded-2xl bg-black p-1.5"
                />
              </div>
                <Image
                  src={product.mainImage}
                  alt={product.name}
                  sizes="100vw"
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-auto"
                />
              </div>
              <div className="text-[#111111] bg-white w-full h-30%  md:h-full flex flex-col md:w-[50%]  lg:w-[40%] m-2 gap-3 md:gap-10 py-2 md:p-4 align-center justify-center md:justify-normal">
                <div className="flex flex-col gap-1 text-center items-center md:items-start">
                  <p className=" font-semibold">{product.name}</p>

                  <p className="font-thin text-sm">
                    {product.description}
                    <span className="font-semibold cursor-pointer">
                      More Info...
                    </span>
                  </p>
                  <p className="font-light mt-2">GHS {product.price}</p>
                </div>
                <div className="flex  justify-around md:flex-col lg:flex-row lg:justify-between md:gap-4  md:w-[80%] ">
                  <button className="bg-[#111111] text-white hover:border hover:bg-white hover:border-[#111111] hover:text-black py-1 px-6   font-light ">
                    Add to Cart
                  </button>
                  <button className="bg-[#111111] text-white hover:bg-white hover:border hover:border-[#111111] hover:text-black py-1 px-6 font-light ">
                    View on IG
                  </button>
                </div>

                <div className="hidden md:block ">
                  <div
                    className="grid  md:grid-cols-3 lg:grid-cols-4
              justify-items-center gap-y-4 gap-x-0 -m-2.5 overflow-x-hidden overflow-y-hidden"
                  >
                    {product.gallery.map((imgs: string) => (
                      <div
                        key={imgs}
                        className="w-[90px] h-[90px] bg-black relative"
                      >
                        <Image
                          src={imgs}
                          alt={product.name}
                          sizes="33vw"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    ))}
                  </div>
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
