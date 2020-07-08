import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from "react";
import './Select.module.scss'

type PropsSelectType =
    DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
    & {
    value: string[]
    onChangee: (i: string) => void
}

function Select(props: PropsSelectType) {

    const {value, onChangee, ...restProps} = props;

    const change = (e: ChangeEvent<HTMLSelectElement>) => onChangee(e.currentTarget.value)

    return (
        <div data-include="form-input-select()">
            <select required onChange={change} {...restProps}>
                <option value="" hidden>Example Placeholder</option>
                {
                    value.map((item, index) => <option key={index} value={item}>{item}</option>)
                }
            </select>
        </div>
    )
}

export default Select