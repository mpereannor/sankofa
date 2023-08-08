import { motion } from "framer-motion"

type Product = {
  id: number
  title: string
  image: string
}

type ProductListProps = {
  products: Art[]
  selectedProductIndex: number
  handleProductClick: (product: Art) => void
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  selectedProductIndex,
  handleProductClick,
}) => {
  return (
    <div
      className="bg-zinc-800	
      max-h-96 overflow-y-scroll resultProductContainer rounded-b-xl"
    >
      {products.map((product, index) => (
        <div
          key={product._id}
          id={`product-${index}`}
          className={`py-2 px-4 flex items-center justify-between gap-8 hover:bg-black cursor-pointer 
          ${
            selectedProductIndex === index
             ?
            "bg-gray-200 "
             :
             ""
          }
          `}
          onClick={() => handleProductClick(product)}
        >
          <p className="font-medium">{product.title}</p>
          {/* <img src={product.image} alt="" className=" w-8" /> */}
        </div>
      ))}
    </div>
  )
}

export default ProductList
