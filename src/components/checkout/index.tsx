"use client"
import { AppContext } from "@/context/AppContext"
import { calculateItemsTotal, formatPrice, getSubstring } from "@/lib/helpers"
import React, { useContext, useEffect, useState } from "react"
import Image from "next/image"

export const Checkout = () => {
  const [subTotal, setSubTotal] = useState<number>(0)
  const [tax, setTax] = useState<number>(0)

  const {
    state: { checkout },
  } = useContext(AppContext)

  useEffect(() => {
    const subTotal = calculateItemsTotal(checkout)
    const tax = 0.05 * subTotal
    setSubTotal(subTotal)
    setTax(tax)
  }, [checkout])

  return (
    <div className="bg-white flex flex-col gap-6 lg:gap-0    lg:flex-row lg:w-[90%] w-full  mx-auto justify-around p-4">
      <div className="border-gray-400 flex flex-col  lg:w-[60%] lg:full gap-6">
        <div className="">
          <div className="py-1 px-4 m-1">
            <h2 className="text-gray-800 font-semibold">Review Items</h2>
          </div>
          <div className="flex flex-col px-2 py-1">
            {checkout.map((item) => (
              <div
                key={item.id}
                className="xs:flex-row gap-6 xs:gap-0 flex-col flex p-2 justify-between  "
              >
                <div className="flex ">
                  <Image
                    src={item.mainImage}
                    alt=""
                    sizes="33vw"
                    width={100}
                    height={100}
                  />
                  <div className="mx-2 items-center">
                    <p className="text-md font-semibold text-gray-900 max-w-[500px]">
                      {item.name}
                    </p>
                    <p className=" text-xs font-light italic text-gray-700">
                      {getSubstring(item.description, 50)}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-md font-semibold text-gray-900">
                    GHS {formatPrice(item.price)}
                  </p>
                  <p className="text-xs font-light italic text-gray-700">
                    Quantity: {item.count}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <div className="py-1 px-4 m-1">
            <h2 className="text-gray-800 font-semibold">
              Delivery Information
            </h2>
          </div>
          <div className="flex flex-col px-2 py-1">
            <div className="space-y-1 p-2 ">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2  border border-gray-300 text-gray-700  focus:outline-black"
                placeholder="Full name"
              />
            </div>

            <div className="space-y-1 p-2">
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2  border border-gray-300 text-gray-700 focus:outline-black"
                placeholder="Address"
              />
            </div>

            <div className="space-y-1 p-2">
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2  border border-gray-300 text-gray-700  focus:outline-black"
                placeholder="Phone number"
              />
            </div>

            <div className="space-y-1  p-2">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2  border border-gray-300 text-gray-700 focus:outline-black"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full  lg:w-1/3 h-fit pb-2">
        <div className="py-1 px-4 m-1">
          <h2 className="text-gray-800 font-semibold">Payment Details</h2>
        </div>
        <div className=" px-2 py-1 flex flex-col  space-y-4 ">
          <div className="space-y-4">
            {/* <div className="flex justify-between">
              <input
                type="text"
                placeholder="Enter Coupon Code"
                className="w-full  px-4 py-1 border text-black  focus:outline-black"
              />
              <button className="bg-brand-primary text-black rounded-full ml-[-40px] px-8 py-2 hover:bg-brand-primaryDark active:bg-brand-primaryDark">
                Apply Coupon
              </button>
            </div> */}
            <hr className="mt-2" />
            <div>
              <h2 className="text-sm my-4 font-medium">Payment Option</h2>
              <div className="space-y-2 text-gray-700 font-light text-sm">
                <div className="flex items-center">
                  <input type="radio" value="cashOnDelivery" className="mr-2" />
                  <label>Cash On Delivery</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" value="momo" className="mr-2" />
                  <label>Mobile Money Payment</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" value="3" className="mr-2" />
                  <label>Credit Card (Master/Visa)</label>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-2" />
          <div className="flex flex-col text-gray-700  px-2 py-1">
            <div className="flex justify-between my-4 font-semibold ">
              <span className="">Sub Total</span>
              <span className="">GHS {formatPrice(subTotal)}</span>
            </div>
            <div className="flex justify-between items-center my-4 text-sm">
              <span className="">Tax(5%)</span>
              <span className="">GHS {formatPrice(tax)}</span>
            </div>
            {/* <div className="flex justify-between items-center my-4 text-sm">
              <span className="">Coupon Discount</span>
              <span className="">-GHS {formatPrice(tax)}</span>
            </div> */}
            <div className="flex justify-between items-center my-4 text-sm">
              <span className="">Shipping Cost</span>
              <span className=""> GHS {formatPrice(0)}</span>
            </div>
            <hr />
            <div className="flex justify-between items-center my-4">
              <span className="font-bold">Total</span>
              <span className="font-bold">
                GHS {formatPrice(subTotal + tax)}
              </span>
            </div>
          </div>

          <button className="bg-[#111111] text-white hover:border hover:bg-white hover:border-[#111111] hover:text-black py-1 px-6   font-light ">
            Pay GHS {formatPrice(subTotal)}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
