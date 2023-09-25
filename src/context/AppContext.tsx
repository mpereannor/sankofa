import { IContext, IProduct, IState, ItemKey } from "@/lib/model"
import { ReactNode, createContext, useState } from "react"

export const AppContext = createContext<IContext>(null as any)

interface IAppContextProviderProps {
  children: ReactNode
}

const initialState: IState = {
  cart: [],
  wishlist: [],
  checkout: [],
}
export const AppContextProvider: React.FC<IAppContextProviderProps> = ({
  children,
}) => {
  const [state, setState] = useState<IState>(initialState)
  const addItem = (key: ItemKey, product: IProduct, count?: number) => {
    console.log('isAdded')
    setState((prevState) => ({
      ...prevState,
      [key]: [...prevState[key], { ...product, count: count || 1 }],
    }))
  }

  const removeItem = (key: ItemKey, productId: string) => {
    setState((prevState) => ({
      ...prevState,
      [key]: prevState[key].filter((item) => item.id !== productId),
    }))
  }
  const resetItems = (key: ItemKey) => {
    setState((prevState) => ({
      ...prevState,
      [key]: [],
    }))
  }

  const increaseCount = (key: ItemKey, productId: string) => {
    const items = [...state[key]]
    const index = items.findIndex((item) => item.id === productId)
    items[index].count += 1
    setState((prevState) => ({ ...prevState, [key]: items }))
  }

  const decreaseCount = (key: ItemKey, productId: string) => {
    const items = [...state[key]]
    const index = items.findIndex((item) => item.id === productId)
    if (items[index].count > 1) {
      items[index].count -= 1
    }
    setState((prevState) => ({ ...prevState, [key]: items }))
  }
  const isAdded = (key: ItemKey, productId: string): boolean => {

    return state[key].some((item) => item.id === productId)
  }

  return (
    <AppContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        increaseCount,
        decreaseCount,
        resetItems,
        isAdded,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
