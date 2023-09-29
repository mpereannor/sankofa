import { IContext, IProduct, IState, ItemKey } from "@/lib/model"
import React, { ReactNode, createContext, useContext } from "react"
import { useLocalStorage } from "@mantine/hooks"

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
  const [state, setState] = useLocalStorage<IState>({
    key: "sankofa",
    defaultValue: initialState,
  })
  const addItem = (key: ItemKey, product: IProduct, count?: number) => {
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
    if (state) {
      const items = [...state[key]]
      const index = items.findIndex((item) => item.id === productId)
      if (index !== -1) {
        items[index].count += 1
        setState((prevState) => ({ ...prevState, [key]: items }))
      }
    }
  }

  const decreaseCount = (key: ItemKey, productId: string) => {
    if (state) {
      const items = [...state[key]]
      const index = items.findIndex((item) => item.id === productId)
      if (items[index].count > 1) {
        items[index].count -= 1
      }
      setState((prevState) => ({ ...prevState, [key]: items }))
    }
  }
  const isAdded = (key: ItemKey, productId: string): boolean => {
    if (state && state[key]) {
      return state[key].some((item) => item.id === productId)
    }
    return false
  }

  return (
    <AppContext.Provider
      value={{
        //@ts-ignore
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

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider")
  }
  return context
}
