

// ---------------------------------
export type AffairType = {
    id: string,
    title: string,
    priority: string,
}

export type AffairsType = Array<AffairType>

export type RemoveAffairType = (id: string) => void

export type FilterValueType = "all" | "low" | "medium" | "high"

export type ChangeFilterType = (value: FilterValueType) => void