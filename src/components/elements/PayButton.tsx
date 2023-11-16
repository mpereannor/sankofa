import { useState } from "react"
import { PaystackButton } from "react-paystack"

const PayButton = ({ amount, email }: { amount: number; email: string }) => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY || ""

  const handlePaystackSuccessAction = (reference: any) => {
    alert(`Your purchase was successful. reference ${reference}`)
  }

  const componentProps = {
    email,
    amount: amount * 100,
    publicKey,
    text: `Pay GHS ${amount}`,
    onSuccess: (reference: any) => handlePaystackSuccessAction(reference),
    onClose: () => alert("Payment canceled by user."),
  }

  return (
    <PaystackButton
      currency="GHS"
      className="bg-[#111111] text-white hover:border hover:bg-white hover:border-[#111111] hover:text-black py-1 px-6   font-light "
      {...componentProps}
    />
  )
}

export default PayButton
