import {systemReducer, setLoadingAC, InitialStateType} from "./reducer";

test('loading must be on', () => {
    const initialState: InitialStateType = {loading: false}
    const newState = systemReducer(initialState, setLoadingAC(true))
    expect(newState.loading).toBe(true)
})

test('loading must be off', () => {
    const initialState: InitialStateType = {loading: true}
    const newState = systemReducer(initialState, setLoadingAC(false))
    expect(newState.loading).toBe(false)
})
