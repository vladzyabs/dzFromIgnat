import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from "react";
import './Select.module.scss'

type PropsSelectType =
    DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
    & {
    selectValue: string[]
    onSelectChange: (i: string) => void
}

function Select(props: PropsSelectType) {

    const {selectValue, onSelectChange, ...restProps} = props;

    const change = (e: ChangeEvent<HTMLSelectElement>) => onSelectChange(e.currentTarget.value);

    return (
        <div data-include="form-input-select()">
            <select required onChange={change} value={props.value} {...restProps}>
                {
                    selectValue.map((item, index) => <option key={index} value={item}>{item}</option>)
                }
            </select>
        </div>
    )
}

export default Select