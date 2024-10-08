import { createContext, useReducer, Dispatch, ReactNode } from "react";
import { BudgetActions, BudgetState, budgetReducer, initialState } from "../reducers/budget-reducer";

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
}

type BudgetProviderProps = {
    children: ReactNode
}

// Contexto para el estado de la app
export const BudgetContext = createContext<BudgetContextProps>(null!)

// Provider del contexto
export const BudgetProvider = ({ children } : BudgetProviderProps) => {
    
    const [state, dispatch] = useReducer(budgetReducer, initialState)

    return (
        <BudgetContext.Provider
            value={{
                state, 
                dispatch
            }}
        >
            {children}
        </BudgetContext.Provider>        
    )

}