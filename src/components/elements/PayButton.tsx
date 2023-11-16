import { useAppContext } from "@/context/AppContext"
import { ItemKey } from "@/lib/model"
import { useRouter } from "next/navigation"
import { PaystackButton } from "react-paystack"

const PayButton = ({ amount, email }: { amount: number; email: string }) => {
  const { resetItems } = useAppContext()
  const router = useRouter()

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY || ""

  const handlePaystackSuccessAction = (reference: any) => {
    alert(`Your purchase was successful.`)
    console.log("ref", reference)
    resetItems("checkout")
    setTimeout(() => {
      router.push("/")
    }, 3000)
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
