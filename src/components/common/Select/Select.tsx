import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from "react";
import './Select.module.scss'

type PropsSelectType =
    DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
    & {
    selectValue: string[]
    placeholderOption?: string
    onSelectChange: (i: string) => void
}

function Select(props: PropsSelectType) {

    const {selectValue, placeholderOption, onSelectChange, ...restProps} = props;

    const change = (e: ChangeEvent<HTMLSelectElement>) => onSelectChange(e.currentTarget.value);

    return (
        <div data-include="form-input-select()">
            <select required onChange={change} {...restProps}>
                {placeholderOption && <option value="" hidden>{placeholderOption}</option>}
                {
                    selectValue.map((item, index) => <option key={index} value={item}>{item}</option>)
                }
            </select>
        </div>
    )
}

export default Select