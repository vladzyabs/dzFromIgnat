import {checkPeopleByAgeAC, hwReducer, sortPeopleAC, StateType} from "./homeWorkReducer";
import {v1} from "uuid";

let initialState: StateType

beforeEach(() => {
    initialState = {
        people: [
        {id: v1(), name: 'Dasha', age: 24},
        {id: v1(), name: 'Andrey', age: 14},
        {id: v1(), name: 'Elena', age: 18},
        {id: v1(), name: 'Sasha', age: 21},
        {id: v1(), name: 'Boris', age: 30},
        {id: v1(), name: 'Masha', age: 17},
    ]}
})

test('array of people should be sorted up', () => {
    const sortState = hwReducer(initialState, sortPeopleAC('up'))
    expect(sortState.people[0].name).toBe('Andrey')
    expect(sortState.people[1].name).toBe('Boris')
    expect(sortState.people[2].name).toBe('Dasha')
    expect(sortState.people[3].name).toBe('Elena')
    expect(sortState.people[4].name).toBe('Masha')
    expect(sortState.people[5].name).toBe('Sasha')
})
test('array of people should be sorted down', () => {
    const sortState = hwReducer(initialState, sortPeopleAC('down'))
    expect(sortState.people[0].name).toBe('Sasha')
    expect(sortState.people[1].name).toBe('Masha')
    expect(sortState.people[2].name).toBe('Elena')
    expect(sortState.people[3].name).toBe('Dasha')
    expect(sortState.people[4].name).toBe('Boris')
    expect(sortState.people[5].name).toBe('Andrey')
})

test('many people must be older 18 age', () => {
    const sortState = hwReducer(initialState, checkPeopleByAgeAC(18))
    expect(sortState.people.find(person => person.age < 18)).toBe(undefined)
})
