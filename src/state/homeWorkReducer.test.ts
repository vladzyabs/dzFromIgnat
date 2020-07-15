import {checkPeopleByAge, hwReducer, PeronType, sortPeopleAC} from "./homeWorkReducer";
import {v1} from "uuid";

let initialState: PeronType[]

beforeEach(() => {
    initialState = [
        {id: v1(), name: 'Dasha', age: 24},
        {id: v1(), name: 'Andrey', age: 14},
        {id: v1(), name: 'Elena', age: 18},
        {id: v1(), name: 'Sasha', age: 21},
        {id: v1(), name: 'Boris', age: 30},
        {id: v1(), name: 'Masha', age: 17},
    ]
})

test('array of people should be sorted up', () => {
    const sortState = hwReducer(initialState, sortPeopleAC('up'))
    expect(sortState[0].name).toBe('Andrey')
    expect(sortState[1].name).toBe('Boris')
    expect(sortState[2].name).toBe('Dasha')
    expect(sortState[3].name).toBe('Elena')
    expect(sortState[4].name).toBe('Masha')
    expect(sortState[5].name).toBe('Sasha')
})
test('array of people should be sorted down', () => {
    const sortState = hwReducer(initialState, sortPeopleAC('down'))
    expect(sortState[0].name).toBe('Sasha')
    expect(sortState[1].name).toBe('Masha')
    expect(sortState[2].name).toBe('Elena')
    expect(sortState[3].name).toBe('Dasha')
    expect(sortState[4].name).toBe('Boris')
    expect(sortState[5].name).toBe('Andrey')
})

test('many people must be older 18 age', () => {
    const sortState = hwReducer(initialState, checkPeopleByAge(18))
    expect(sortState.find(person => person.age < 18)).toBe(undefined)
})
