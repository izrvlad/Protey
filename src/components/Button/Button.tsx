import React, {FC} from "react";
import './Button.scss'


type PropsType = {
    value: string
}
export const Button: FC<PropsType> = (props) => {
    return (
        <button className="Button" type="submit">{props.value}</button>
    )
}