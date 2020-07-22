export type PeronType = {
    id: string
    name: string
    age: number
}

export type StateType = {
    people: PeronType[]
}

export const hwReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'SORT_PEOPLE':
            if (action.payload === 'up') {
                return {
                    ...state,
                    people: [...state.people.sort((a, b) => {
                        if (a.name > b.name) {return 1}
                        if (a.name < b.name) {return -1}
                        return -1
                    })
                    ]
                }
            } else {
                return {
                    ...state,
                    people: [...state.people.sort((a, b) => {
                        if (a.name < b.name) {return 1}
                        if (a.name > b.name) {return -1}
                        return 0
                    })
                    ]
                }
            }
        case "CHECK_PEOPLE":
            return {
                ...state,
                people: state.people.filter(person => person.age >= action.payload)
            }
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
export const checkPeopleByAgeAC = (age: number): CheckPeopleByAgeType => {
    return {
        type: 'CHECK_PEOPLE',
        payload: age
    }
}

type ActionType = SortPeopleType
| CheckPeopleByAgeType