import { motion } from "framer-motion"
import { headerVariants, menuVariants } from "@/lib/animation"
import {
  Close,
  CloseWishlist,
  Heart,
  Instagram,
  Search,
  Shopping_Cart,
} from "./Icons"
import Link from "next/link"
import { IItem } from "@/lib/model"

// export const Navigation = ({ openModal }: any) => (
//   <motion.ul variants={menuVariants}>
//     <MenuItem
//       openModal={openModal}
//       cart={[]}
//       wishlist={[]}

//       open=
//       wishlistOpen= handleToggle={function (): void {
//         throw new Error("Function not implemented.")
//       } } handleWishlistToggle={function (): void {
//         throw new Error("Function not implemented.")
//       } }    />
//   </motion.ul>
// )

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

interface IMenuItemProps {
  openModal: any
  handleToggle: any
  handleWishlistToggle: any
  open: any
  wishlistOpen: any
  cart: IItem[]
  wishlist: IItem[]
}
export const MenuItem = ({
  openModal,
  handleToggle,
  handleWishlistToggle,
  open,
  wishlistOpen,
  cart,
  wishlist,
}: IMenuItemProps) => {
  return (
    <motion.div
      className={`flex mt-20 p-10 gap-20 w-screen flex-col items-center h-screecn  overflow-y-auto `}
      variants={menuItemVariants}
    >
      <motion.div
        variants={headerVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Search onClick={openModal} />
      </motion.div>
      <motion.div
        variants={headerVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {cart.length !== 0 ? (
          <div onClick={handleToggle}>
            {open ? (
              <Close />
            ) : (
              <div className="flex">
                <Shopping_Cart size={28} />
                <div className=" text-sm font-bold text-white">
                  {cart.length}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div onClick={handleToggle}>
            {open ? <Close /> : <Shopping_Cart size={28} />}
          </div>
        )}
      </motion.div>
      <motion.div
        variants={headerVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {wishlist.length !== 0 ? (
          <div onClick={handleWishlistToggle}>
            {wishlistOpen ? (
              <CloseWishlist />
            ) : (
              <div className="flex">
                <Heart size={28} />
                <div className=" text-sm font-bold text-white">
                  {wishlist.length}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div onClick={handleWishlistToggle}>
            {wishlistOpen ? <CloseWishlist /> : <Heart size={28} />}
          </div>
        )}
      </motion.div>

      <motion.button
        variants={headerVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        type="button"
        className="bg-transparent text-white py-1 px-6  font-light hover:border-transparent "
      >
        <Link href="/products">Gallery</Link>
      </motion.button>

      <motion.button
        variants={headerVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        type="button"
        className="bg-transparent text-white py-1 px-6  font-light hover:border-transparent "
      >
        <Link href="/shop">Shop</Link>
      </motion.button>
      <motion.div
        variants={headerVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Instagram />
      </motion.div>
    </motion.div>
  )
}
