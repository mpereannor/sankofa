import { motion } from "framer-motion"
import { Close } from "../Icons"

type SearchInputProps = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  inputRef: React.RefObject<HTMLInputElement>
  placeholder?: string
  closeModal:any
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onKeyDown,
  inputRef,
  placeholder = "Search products",
  closeModal
}) => {
  return (
    <div className="flex justify-between items-center px-2">
      <input
        type="text"
        style={{
          backgroundColor: "#F4F2F2",
        }}
        className=" flex-1  px-4 py-2 shadow-sm focus:outline-none	rounded-xl active:rounded-t-xl focus:rounded-b-none text-black placeholder-black h-16 "
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        ref={inputRef}
        placeholder={placeholder}
      />
      <Close onClick={closeModal} className="p-1  bg-black rounded-full"  size={18}/>
    </div>
  )
}

export default SearchInput
