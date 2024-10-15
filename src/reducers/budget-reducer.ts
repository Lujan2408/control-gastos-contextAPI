import { v4 as uuidv4 } from 'uuid'
import { DraftExpense, Expense } from "../types"

// type Actions 
export type BudgetActions = 
    {type: 'define-budget', payload: {budget : number}} | 
    {type: 'show-modal'} |
    {type: 'close-modal'} | 
    {type: 'add-expense', payload: {expense: DraftExpense}} 

// type State
export type BudgetState = {
    budget: number 
    modal: boolean
    expenses: Expense[]
}

// Initial state 
export const initialState : BudgetState = {
    budget: 0,
    modal: false,
    expenses: []
}

// Función para crear el gasto 
const createExpense = (draftExpense: DraftExpense): Expense => {
    return {
    ...draftExpense,
    id: uuidv4(),
    };
};

// reducer 
export const budgetReducer = (
        state: BudgetState = initialState,
        action: BudgetActions
) => {

    if(action.type === 'define-budget') {
        return {
            ...state,
            budget: action.payload.budget
        }
    }

    if(action.type === 'show-modal') {
        return {
            ...state,
            modal: true
        }
    }

    if(action.type === 'close-modal') {
        return {
            ...state,
            modal: false
        }
    }

    if(action.type === 'add-expense') {

        const expense = createExpense(action.payload.expense)
        return {
            ...state, 
            expenses: [...state.expenses, expense]
        }
    }

    return state
}