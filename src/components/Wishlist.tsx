import { AnimatePresence, motion } from "framer-motion"
import { CloseWishlist, Shopping_Cart } from "./Icons"
import { IItem, IProduct, ItemKey } from "@/lib/model"
import Image from "next/image"
import { formatPrice } from "@/lib/helpers"

function Wishlist({
  wishlistOpen,
  handleWishlistToggle,
  wishlist,
  resetItems,
  addItem,
  isAdded,
  removeItem,
}: {
  wishlistOpen: boolean
  handleWishlistToggle: () => void
  wishlist: IItem[]
  addItem: (key: ItemKey, product: IProduct, count?: number) => void
  isAdded: (key: ItemKey, productId: string) => boolean
  resetItems: (key: ItemKey) => void
  removeItem: (key: ItemKey, productId: string) => void
}) {
  return (
    <AnimatePresence>
      {wishlistOpen && (
        <motion.aside
          className="fixed top-20 bottom-0 bg-white  right-0  z-[999] [--width:90%] md:[--width:60%] lg:[--width:40%]  overflow-y-auto"
          initial={{ width: 0 }}
          animate={{
            width: "var(--width)",
          }}
          exit={{ width: 0, transition: { delay: 0.5, duration: 0.3 } }}
        >
          <motion.div initial="closed" animate="open" exit="closed">
            <div className="absolute z-10 -top-4 -left-4 m-1 opacity-100 hover:opacity-80">
              <CloseWishlist
                onClick={handleWishlistToggle}
                size={25}
                className="rounded-2xl bg-black p-1.5"
              />
            </div>
            <div className="relative h-full mx-auto justify-between flex flex-col  sm:bg-transparent  m-4">
              {wishlist.length === 0 ? (
                <div className="text-sm p-2 text-gray-500">
                  Wishlist is Empty
                </div>
              ) : (
                <>
                  {wishlist.map((item) => (
                    <div key={item.id}>
                      <div className=" mb-2 sm:py-4 sm:px-4 py:2 px:2 border-gray-300 border-b flex">
                        <div className="sm:block hidden w-20">
                          <Image
                            src={item.mainImage}
                            alt={item.name}
                            sizes="33vw"
                            width={80}
                            height={80}
                          />
                        </div>
                        <div className=" ml-4 flex w-full justify-between flex-col sm:flex-row sm:gap-y-0 gap-y-6">
                          <div className="mt-5  w-full sm:w-1/3">
                            <h2 className="text-md font-semibold text-gray-900">
                              {item.name}
                            </h2>
                            <p className="mt-1 text-xs font-light italic text-gray-700">
                              {item.description}
                            </p>
                          </div>
                          <div className=" flex flex-col sm:flex-row justify-between space-y-0 sm:space-y-6 sm:block space-x-6 w-full sm:w-2/3 sm:gap-y-0 gap-y-6">
                            <div className="flex sm:items-center items:left space-x-4 py-4 sm:py-0">
                              <p className="text-sm text-black font-light">
                                GHS {formatPrice(item.price)}
                              </p>
                              {isAdded("cart", item.id) ? (
                                <Shopping_Cart
                                  onClick={() => removeItem("cart", item.id)}
                                  className=" mx-2 "
                                  color="gray"
                                  size={24}
                                />
                              ) : (
                                <Shopping_Cart
                                  onClick={() => addItem("cart", item)}
                                  className="mx-2 "
                                  color="black"
                                  size={24}
                                />
                              )}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                onClick={() => removeItem("wishlist", item.id)}
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
                  ))}
                  <div className="">
                    <div className="flex justify-center mt-8 ">
                      <button
                        onClick={() => resetItems("wishlist")}
                        className="bg-[#111111] text-white hover:border hover:bg-white hover:border-[#111111] hover:text-black py-1 px-6   font-light "
                      >
                        Clear Wishlist
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

export default Wishlist
