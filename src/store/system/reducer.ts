export type InitialStateType = {
    loading: boolean
}

const initialState: InitialStateType = {
    loading: false
}

export const systemReducer = (state = initialState, action: ActionType): InitialStateType => {
    debugger
    switch (action.type) {
        case "SET_LOADING":
            return {...state, loading: action.payload}
        default:
            return state
    }
}

type SetLoadingType = { type: 'SET_LOADING', payload: boolean }
export const setLoadingAC = (value: boolean): SetLoadingType => {
    return {
        type: "SET_LOADING",
        payload: value
    }
}

type ActionType = SetLoadingType
