import React from "react";

import './form-input.styles.jsx'
import {FormInputLabel, Group, Input } from "./form-input.styles";

const FormInput = ({handleChange , label , ...otherProps}) =>(
    <Group>
        <Input onChange={handleChange} {...otherProps}/>
        {
            label ?(<FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>): null 
        }
    </Group>
)
export default FormInput;