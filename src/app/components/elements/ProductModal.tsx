import { motion } from "framer-motion"
import Image from "next/image"
import { Close } from "../Icons"

const ind = [1, 2, 3, 4, 5, 6]
const ProductModal = ({ closeModal }: any) => {
  return (
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
           
            <Close onClick={closeModal}size={30} className="rounded-2xl bg-black p-1.5" />
          </div>
          <div className=" w-full h-[70%] md:h-full relative md:w-[50%] lg:w-[60%] ">
            <Image
              src={`https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=922&q=80`}
              alt={`art.artist.name`}
              sizes="100vw"
              fill
              style={{ objectFit: "cover" }}
              className="w-full h-auto"
            />
          </div>
          <div className="text-[#111111] bg-white w-full h-30%  md:h-full flex flex-col md:w-[50%]  lg:w-[40%] m-2 gap-3 md:gap-10 py-2 md:p-4 align-center justify-center md:justify-normal">
            <div className="flex flex-col gap-1 text-center items-center md:items-start">
              <p className=" font-semibold">Grey Matter</p>
              <p className="font-thin italic text-sm ">
                Inspired by Le Rayon Vert. 2012
              </p>
              <p className="font-thin text-sm">
                Color impasto on board, gold leaf
              </p>
              <p className="font-thin text-sm">
                27 1/2 x 41 3/8 x 1 3/4 in. 70 cm{" "}
                <span className="font-semibold cursor-pointer">More Info...</span>
              </p>
              <p className="font-light mt-2">GHS 200.00</p>
            </div>
            <div className="flex  justify-around md:flex-col lg:flex-row lg:justify-between md:gap-4  md:w-[80%] ">
              <button className="bg-[#111111] text-white hover:border hover:bg-white hover:border-[#111111] hover:text-black py-1 px-6   font-light ">
                Add to Cart
              </button>
              <button className="bg-[#111111] text-white hover:bg-white hover:border hover:border-[#111111] hover:text-black py-1 px-6 font-light ">
                View on IG
              </button>
            </div>
            <div className="hidden lg:block w-[80%]">
              <p className="font-light text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus.{" "}
                <span className="font-semibold cursor-pointer">More Info...</span>
              </p>
            </div>
            <div className="hidden md:block ">
              <div
                className="grid  md:grid-cols-3 lg:grid-cols-4
            justify-items-center gap-y-4 gap-x-0 -m-2.5 overflow-x-hidden overflow-y-hidden"
              >
                {ind.map((art) => (
                  <div
                    key={art}
                    className="w-[90px] h-[90px] bg-black relative"
                  >
                    <Image
                      src={`https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=922&q=80`}
                      alt={`art.artist.name`}
                      sizes="33vw"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* <p className="font-semibold">View More...</p> */}
          </div>
        </div>
      </motion.div>
      <div
        onClick={closeModal}
        className="opacity-80 fixed inset-0 z-40 bg-black"
      ></div>
    </>
  )
}

export default ProductModal
