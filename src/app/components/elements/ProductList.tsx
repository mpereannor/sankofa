 
type Product = {
  id: number
  title: string
  image: string
}

type ProductListProps = {
  products: Product[]
  selectedProductIndex: number
  handleProductClick: (product: Product) => void
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  selectedProductIndex,
  handleProductClick,
}) => {
  return (
    <motion.div
      className="bg-sky-500/50

      max-h-96 overflow-y-scroll resultProductContainer"
      variants={{
        open: {
          clipPath: "inset(0% 0% 0% 0% round 10px)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05
          }
        },
        closed: {
          clipPath: "inset(10% 50% 90% 50% round 10px)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3
          }
        }
      }}
    >
      {products.map((product, index) => (
        <div
          key={product.id}
          id={`product-${index}`}
          className={`py-2 px-4 flex items-center justify-between gap-8 hover:bg-black cursor-pointer ${
            selectedProductIndex === index ? "bg-gray-200 " : ""
          }`}
          onClick={() => handleProductClick(product)}
        >
          <p className="font-medium">{product.title}</p>
          <img src={product.image} alt="" className=" w-8" />
        </div>
      ))}
    </motion.div>
  )
}

export default ProductList
