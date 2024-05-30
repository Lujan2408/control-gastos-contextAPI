// type Actions 
export type BudgetActions = 
    {type: 'define-budget', payload: {budget : number}} | 
    {type: 'show-modal'}

// type State
export type BudgetState = {
    budget: number 
    modal: boolean
}

// Initial state 
export const initialState : BudgetState = {
    budget: 0,
    modal: false
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

    if(action.type === 'show-modal') {
        return {
            ...state,
            modal: true
        }
    }

    return state
}