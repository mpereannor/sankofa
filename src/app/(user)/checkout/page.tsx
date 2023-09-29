import Header from "@/components/Header"
import { Checkout } from "@/components/checkout"
import { NextPage } from "next"

const CheckoutPage: NextPage = () => {
  return (
    <div>
      <Header/>
      <Checkout />
    </div>
  )
}

export default CheckoutPage 