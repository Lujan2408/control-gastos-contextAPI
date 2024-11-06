import { v4 as uuidv4 } from 'uuid'
import { DraftExpense, Expense } from "../types"

// type Actions 
export type BudgetActions = 
    {type: 'define-budget', payload: {budget : number}} | 
    {type: 'show-modal'} |
    {type: 'close-modal'} | 
    {type: 'add-expense', payload: {expense: DraftExpense}} |
    {type: 'remove-expense', payload: {id: Expense['id']}} |
    {type: 'get-expense-by-id', payload: {id: Expense['id']}} | 
    {type: 'update-expense', payload: {expense: Expense}} | 
    {type: 'reset-app'}

// type State
export type BudgetState = {
    budget: number 
    modal: boolean
    expenses: Expense[]
    editingId: Expense['id']
}

// LocalStorage
const initialBudget = () : number => {
    const localStorageBudget = localStorage.getItem('budget')
    return localStorageBudget ? +localStorageBudget : 0
}

const localStorageExpense = () : Expense[] => {
    const localStorageExpense = localStorage.getItem('expenses')
    return localStorageExpense ? JSON.parse(localStorageExpense) : []
}

// Initial state 
export const initialState : BudgetState = {
    budget: initialBudget(),
    modal: false,
    expenses: localStorageExpense(),
    editingId: ''
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
            modal: false,
            editingId: ''
        }
    }

    if(action.type === 'add-expense') {
        const expense = createExpense(action.payload.expense)
        
        return {
            ...state, 
            expenses: [...state.expenses, expense],
            modal: false
        }
    }

    if(action.type === 'remove-expense') {
        return {
            ...state,
            expenses: state.expenses.filter( expense => expense.id !== action.payload.id)
        }
    }

    if(action.type === 'get-expense-by-id') {
        return {
            ...state, 
            editingId: action.payload.id,
            modal: true
        }
    }

    if(action.type === 'update-expense') {
        return {
            ...state,
            expenses: state.expenses.map(expense => expense.id === action.payload.expense.id ? action.payload.expense : expense),
            modal: false,
            editingId: ''
        }
    }

    if(action.type === 'reset-app') {
        return {
            ...state,
            budget: 0,
            expenses: []
        }
    }

    return state
}