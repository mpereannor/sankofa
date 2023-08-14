"use client"
import { AnimatePresence, motion, useCycle } from "framer-motion"
import { Close, Shopping_Cart } from "./Icons"
import { cartItemVariants, cartSideVariants } from "@/lib/animation"

function Cart({ cartOpen }: { cartOpen: boolean }) {
  // const [open, cycleOpen] = useCycle(false, true)

  const links = [
    { name: "Home", to: "#", id: 1 },
    { name: "About", to: "#", id: 2 },
    { name: "Blog", to: "#", id: 3 },
    { name: "Contact", to: "#", id: 4 },
  ]

  return (
    <>
      <AnimatePresence>
        {cartOpen && (
          <motion.aside
            className=" fixed top-20 bottom-0 bg-white  right-0 h-fit z-[999]"
            initial={{ width: 0 }}
            animate={{
              width: 600,
            }}
            exit={{ width: 0, transition: { delay: 0.7, duration: 0.3 } }}
          >
            <motion.div initial="closed" animate="open" exit="closed">
              <div className="relative h-full mx-auto justify-between flex flex-col  m-4">
                <div className="">
                  <div className="">
                    <div className=" mb-2 p-4 border-gray-300 border-b flex">
                      <img
                        src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="product-image"
                        className="w-full  w-20"
                      />
                      <div className=" ml-4 flex w-full justify-between">
                        <div className="mt-5 mt-0">
                          <h2 className="text-md font-semibold text-gray-900">
                            Nike Air Max 2019
                          </h2>
                          <p className="mt-1 text-xs font-light italic text-gray-700">
                            Color impasto on board, gold leaf
                          </p>
                        </div>
                        <div className=" flex justify-between space-y-6 sm:block space-x-6">
                          <div className="flex items-center justify-center">
                            <span className="cursor-pointer mx-2 bg-black py-1 px-3.5 duration-100 hover:bg-gray-800 hover:text-blue-50">
                              {" "}
                              -{" "}
                            </span>
                            <input
                              className="h-10 w-14 border border-gray-500 text-center text-xs outline-none text-black"
                              type="number"
                              value="2"
                              min="1"
                            />
                            <span className="cursor-pointer mx-2 bg-black py-1 px-3 duration-100 hover:bg-gray-800 hover:text-blue-50">
                              {" "}
                              +{" "}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <p className="text-sm text-black font-light">
                              GHS 250, 000. 00
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500 text-black"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" mb-2 p-4 border-gray-300 border-b flex">
                      <img
                        src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
                        alt="product-image"
                        className="w-full w-20"
                      />
                      <div className=" ml-4 flex w-full justify-between">
                        <div className="mt-5 mt-0">
                          <h2 className="text-md font-semibold text-gray-900">
                            Nike Max 2021
                          </h2>
                          <p className="mt-1 text-xs font-light italic text-gray-700">
                            Color impasto on board, gold leaf
                          </p>
                        </div>
                        <div className=" flex justify-between space-y-6 sm:block space-x-6">
                          <div className="flex items-center justify-center">
                            <span className="cursor-pointer mx-2 bg-black py-1 px-3.5 duration-100 hover:bg-gray-800 hover:text-blue-50">
                              {" "}
                              -{" "}
                            </span>
                            <input
                              className="h-10 w-14 border border-gray-500 text-center text-xs outline-none text-black"
                              type="number"
                              value="5"
                              min="1"
                            />
                            <span className="cursor-pointer mx-2 bg-black py-1 px-3 duration-100 hover:bg-gray-800 hover:text-blue-50">
                              {" "}
                              +{" "}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <p className="text-sm text-black font-light">
                              GHS 50, 800. 00
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500 text-black"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="  border-b  px-4  py-2 ">
                    <div className="mb-2 flex justify-between">
                      <p className="text-gray-700">Subtotal</p>
                      <p className="text-gray-700 font-light">GHS 300,800.00</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-700">Shipping</p>
                      <p className="text-gray-700 font-light">GHS 200</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between font-light text-gray-700">
                      <p className=" ">Total</p>
                      <div className="">
                        <p className="mb-1 ">GHS 301, 000.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-around mt-8 ">
                    <button className="bg-[#111111] text-white hover:border hover:bg-white hover:border-[#111111] hover:text-black py-1 px-6   font-light ">
                      Checkout
                    </button>
                    <button className="bg-[#111111] text-white hover:border hover:bg-white hover:border-[#111111] hover:text-black py-1 px-6   font-light ">
                      Continue Shipping
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}

export default Cart

//   <div className="h-screen bg-gray-100 pt-20">
//     <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
//     <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
//       <div className="rounded-lg md:w-2/3">
//         <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
//           <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image" className="w-full rounded-lg sm:w-40" />
//           <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//             <div className="mt-5 sm:mt-0">
//               <h2 className="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
//               <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
//             </div>
//             <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
//               <div className="flex items-center border-gray-100">
//                 <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
//                 <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
//                 <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <p className="text-sm">259.000 ₭</p>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
//                   <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
//           <img src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80" alt="product-image" className="w-full rounded-lg sm:w-40" />
//           <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//             <div className="mt-5 sm:mt-0">
//               <h2 className="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
//               <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
//             </div>
//             <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
//               <div className="flex items-center border-gray-100">
//                 <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
//                 <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
//                 <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <p className="text-sm">259.000 ₭</p>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
//                   <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <!-- Sub total -->
//       <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
//         <div className="mb-2 flex justify-between">
//           <p className="text-gray-700">Subtotal</p>
//           <p className="text-gray-700">$129.99</p>
//         </div>
//         <div className="flex justify-between">
//           <p className="text-gray-700">Shipping</p>
//           <p className="text-gray-700">$4.99</p>
//         </div>
//         <hr className="my-4" />
//         <div className="flex justify-between">
//           <p className="text-lg font-bold">Total</p>
//           <div className="">
//             <p className="mb-1 text-lg font-bold">$134.98 USD</p>
//             <p className="text-sm text-gray-700">including VAT</p>
//           </div>
//         </div>
//         <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
//       </div>
//     </div>
//   </div>
