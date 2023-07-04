import Link from "next/link"
import Image from "next/image"
import React from "react"
import adobya from "../../../assets/adobya.svg"
import { Instagram, Search } from "./Icons"
function Header() {
  return (
    <header className="flex items-center justify-between space-x-2  px-10 py-5">
      <div>
        <Link href="/">
          <Image src={adobya} width={50} height={50} alt="logo" />
        </Link>
      </div>
      <div className=" flex w-60 justify-between items-center	">
        <button
          type="button"
          className="bg-transparent text-white hover:bg-white hover:text-black py-1 px-6 border border-white font-light hover:border-transparent "
        >
          SHOP
        </button>
        <Instagram />
        <Search />
      </div>
    </header>
  )
}

export default Header
