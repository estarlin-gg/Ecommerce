import { createContext } from "react"



export const  FilterContext = createContext()
export const FilterProvider = ({children}) => {
  return (
    <FilterContext.Provider >
       {children}
    </FilterContext.Provider>
  )
}
