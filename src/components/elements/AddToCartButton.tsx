import { AppContext } from "@/context/AppContext"
import { IProduct } from "@/lib/model"
import React, { useContext } from "react"

interface IAddToCartButtonProps {
  product: IProduct
  count?: number
}

const AddToCartButton = ({ product, count }: IAddToCartButtonProps) => {
  const { addItem, removeItem, isAdded } = useContext(AppContext)
  return (
    <>
      {isAdded("cart", product?.id) ? (
        <button
          onClick={() => removeItem("cart", product?.id)}
          className="bg-[#111111] text-white hover:border hover:bg-white hover:border-[#111111] hover:text-black py-1 px-6   font-light "
        >
          Remove from cart
        </button>
      ) : (
        <button
          onClick={() => addItem("cart", product, count)}
          className="bg-[#111111] text-white hover:border hover:bg-white hover:border-[#111111] hover:text-black py-1 px-6   font-light "
        >
          Add to Cart
        </button>
      )}
    </>
  )
}

export default AddToCartButton
