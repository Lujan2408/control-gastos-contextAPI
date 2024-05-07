// Actions 
export type BudgetActions = 
    {type: 'define-budget', payload: {budget : number}}

// State
export type BudgetState = {
    budget: number 
}

// Initial state 
export const initialState : BudgetState = {
    budget: 0
}

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

    return state
}