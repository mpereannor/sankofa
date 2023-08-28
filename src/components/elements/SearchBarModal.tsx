"use client"
import { motion } from "framer-motion"
import {  useEffect, useRef, useState } from "react"
import SearchInput from "./SearchInput"
import ProductList from "./ProductList"
import { artsQuery } from "@/lib/queries"
import { client } from "../../../sanity/lib/client"



const SearchBarModal = ({ closeModal }: any) => {
  const [query, setQuery] = useState("")
  const [products, setProducts] = useState<Art[]>([])
  const [selectedProductIndex, setSelectedProductIndex] = useState<number>(-1)
  const [searchResults, setSearchResults] = useState<Art[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const artsData = await client.fetch(artsQuery)
      setProducts(artsData)
    }

    fetchProducts()
  }, [])

 

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
    setSelectedProductIndex(-1)
    setSearchResults(
      products.filter((product) =>
        product.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    )
  }

  const handleProductClick = (product: Art) => {
    setQuery("")
    setSelectedProductIndex(-1)
  }

  const scrollActiveProductIntoView = (index: number) => {
    const activeProduct = document.getElementById(`product-${index}`)
    if (activeProduct) {
      activeProduct.scrollIntoView({
        block: "nearest",
        inline: "start",
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    if (selectedProductIndex !== -1) {
      scrollActiveProductIntoView(selectedProductIndex)
    }
  }, [selectedProductIndex])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      setSelectedProductIndex((prevIndex) =>
        prevIndex === -1 ? searchResults.length - 1 : prevIndex - 1
      )
    } else if (event.key === "ArrowDown") {
      setSelectedProductIndex((prevIndex) =>
        prevIndex === searchResults.length - 1 ? -1 : prevIndex + 1
      )
    } else if (event.key === "Enter") {
      if (selectedProductIndex !== -1) {
        const selectedProduct = searchResults[selectedProductIndex]
        alert(`You selected ${selectedProduct.title}`)
        setQuery("")
        setSelectedProductIndex(-1)
        setSearchResults([])
      }
    }
  }



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
        className=" flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none flex-col w-5/6 md:w-full md:max-w-xl max-w-xs h-fit mt-20 mx-auto  rounded-xl"
        style={{ backgroundColor: "#F4F2F2" }}
      >
        <SearchInput
          value={query}
          onChange={handleQueryChange}
          onKeyDown={handleKeyDown}
          inputRef={inputRef}
          placeholder="Search Artwork"
          closeModal={closeModal}
        />
        {query !== "" && searchResults.length > 0 && (
          <ProductList
            products={searchResults}
            selectedProductIndex={selectedProductIndex}
            handleProductClick={handleProductClick}
          />
    )} 
        {/* </div> */}
      </motion.div>
      <div
        onClick={closeModal}
        className="opacity-80 fixed inset-0 z-40 bg-black "
      ></div>
    </>
  )
}

export default SearchBarModal
