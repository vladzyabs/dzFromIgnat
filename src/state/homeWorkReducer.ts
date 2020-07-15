export type PeronType = {
    id: string
    name: string
    age: number
}

export const hwReducer = (state: PeronType[], action: ActionType): PeronType[] => {
    switch (action.type) {
        case 'SORT_PEOPLE':
            if (action.payload === 'up') {
                return state.sort((a, b) => a.name > b.name ? 1 : -1)
            } else {
                return state.sort((a, b) => a.name < b.name ? 1 : -1)
            }
        case "CHECK_PEOPLE":
            return state.filter(person => person.age >= action.payload)
        default :
            return state
    }
}

type SortPeopleType = {type: 'SORT_PEOPLE', payload: 'up' | 'down'}
export const sortPeopleAC = (type: 'up' | 'down'): SortPeopleType => {
    return {
        type: 'SORT_PEOPLE',
        payload: type
    }
}

type CheckPeopleByAgeType = {type: 'CHECK_PEOPLE', payload: number}
export const checkPeopleByAge = (age: number): CheckPeopleByAgeType => {
    return {
        type: 'CHECK_PEOPLE',
        payload: age
    }
}

type ActionType = SortPeopleType
| CheckPeopleByAgeType