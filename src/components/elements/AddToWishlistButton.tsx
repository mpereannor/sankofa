import { AppContext } from "@/context/AppContext"
import { IProduct } from "@/lib/model"
import React, { useContext } from "react"
import { Heart, HeartFull } from "../Icons"

interface IAddtoWishlistButtonProps {
  product: IProduct
}

const AddToWishlistButton = ({ product }: IAddtoWishlistButtonProps) => {
  const { addItem, removeItem, isAdded } = useContext(AppContext)

  return (
    <>
      {isAdded("wishlist", product?.id) ? (
        <HeartFull
          onClick={() => removeItem("wishlist", product?.id)}
          size={30}
          color={"white"}
          className="rounded-2xl opacity-100  bg-black p-1.5"
        />
      ) : (
        <Heart
          onClick={() => addItem("wishlist", product)}
          size={30}
          className="rounded-2xl opacity-50 bg-black p-1.5"
        />
      )}
    </>
  )
}

export default AddToWishlistButton
