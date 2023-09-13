import { AnimatePresence, motion } from "framer-motion"
import { CloseWishlist, Shopping_Cart } from "./Icons"

function Wishlist({
  wishlistOpen,
  handleWishlistToggle,
}: {
  wishlistOpen: boolean
  handleWishlistToggle: () => void
}) {
  return (
    <AnimatePresence>
      {wishlistOpen && (
        <motion.aside
          className="fixed top-20 bottom-0 bg-white  right-0 h-fit z-[999] [--width:90%] md:[--width:60%] lg:[--width:40%]"
          initial={{ width: 0 }}
          animate={{
            width: "var(--width)",
          }}
          exit={{ width: 0, transition: { delay: 0.5, duration: 0.3 } }}
        >
          <motion.div initial="closed" animate="open" exit="closed">
            <div className="absolute z-10 -top-4 -left-4 m-1 opacity-50 hover:opacity-100">
              <CloseWishlist
                onClick={handleWishlistToggle}
                size={25}
                className="rounded-2xl bg-black p-1.5"
              />
            </div>
            <div className="relative h-full mx-auto justify-between flex flex-col  sm:bg-transparent  m-4">
              <div className="">
                <div className="">
                  <div className=" mb-2 sm:py-4 sm:px-4 py:2 px:2 border-gray-300 border-b flex     ">
                    <img
                      src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="product-image"
                      className=" sm:block hidden  w-20"
                    />
                    <div className=" ml-4 flex w-full justify-between flex-col sm:flex-row sm:gap-y-0 gap-y-6">
                      <div className="  w-full sm:w-1/3">
                        <h2 className="text-md font-semibold text-gray-900">
                          Nike Air Max 2019
                        </h2>
                      </div>
                      <div className=" flex flex-col sm:flex-row justify-between space-y-0 sm:space-y-6 sm:block space-x-6 w-full sm:w-2/3 sm:gap-y-0 gap-y-6 ">
                        <div className="flex sm:items-center items:left space-x-4 py-4 sm:py-0 ">
                          <p className="text-sm text-black font-light">
                            GHS 250, 000. 00
                          </p>
                          <Shopping_Cart
                            className="hover:border border-black mx-2 "
                            color="black"
                            size={24}
                          />
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
                  
                  <div className="flex justify-center mt-8 ">
                      <button className="bg-[#111111] text-white hover:border hover:bg-white hover:border-[#111111] hover:text-black py-1 px-6   font-light ">
                        Clear Wishlist
                      </button>
                 
                  </div>
                </div>
            </div>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

export default Wishlist
