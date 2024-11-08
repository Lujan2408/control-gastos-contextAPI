import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetails from "./ExpenseDetails"

export default function ExpenseList() {

  const { state } = useBudget()

  const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses])

  const filteredCategory = state.currentCategory ? state.expenses.filter( expense => expense.category === state.currentCategory ) : state.expenses

  return (
    <div className="mt-10 bg-white shadow-lg rounded-lg p-10"> 
      { isEmpty ? <p className=" text-gray-600 font-bold text-2xl">No hay gastos Registrados</p> : (
        <>
          <p className=" text-gray-600 font-bold text-2xl my-5">Listado de Gastos</p>
          {filteredCategory.map( expense => (
            <ExpenseDetails
              key={expense.id} 
              expense={expense}
            />
          ))}
        </>
      )
      }
    </div>
  )
}
