const initState = {
    isLoading: false,
}

export const loadingReducer = (state: InitStateType = initState, action: LoadingActionType): InitStateType => {
    switch (action.type) {
        case 'CHANGE_LOADING':
            return { ...state, isLoading: action.isLoading };
        default:
            return state
    }
}


//action
export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})


//types
export type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export type InitStateType = {
    isLoading: boolean
}

