import { IProduct } from "@/lib/model"
import Link from "next/link"
import Image from "next/image"

type ProductListProps = {
  products: IProduct[]

  isLoading: boolean
}

const ProductList: React.FC<ProductListProps> = ({
  products,
 
  isLoading,
}) => {
  return (
    <div
      className="bg-black
      max-h-96 overflow-y-scroll resultProductContainer rounded-b-xl"
    >
      {isLoading && (
        <div className="flex flex-row items-center justify-center h-12 space-x-5 animate-pulse">
          <div className="h-full bg-slate-600  w-full "></div>
        </div>
      )}
      {products.map((product, index) => (
        <Link key={product.id} href={`/products/${product.slug}`}>
          <div
            key={product.id}
            id={`product-${index}`}
            className={`py-2 px-4 flex items-center justify-between gap-8 hover:bg-slate-900 cursor-pointer 
          `}
          >
            <p className="font-medium">{product.name}</p>
            <div className=" w-8 h-8">
              <Image
                src={product.mainImage}
                alt={product.name}
                sizes="33vw" 
                width={8}
                height={8}
                style={{ objectFit: "cover" }}
                className="w-full h-auto"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProductList
