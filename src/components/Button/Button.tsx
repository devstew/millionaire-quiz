import React from 'react';
import {Link} from "react-router-dom";
import './Button.css';

interface ButtonInterface {
    title: string;
    to?: string;
    children?: any;
    additionalStyling?: string;
}

const Button: React.FC<ButtonInterface> = ({title, to, additionalStyling}) => {
    return (
        <div className={`primary_button ${additionalStyling}`}>
            <>
                {!to && <a>{title}</a>}
                {to && <Link to={to}>{title}</Link>}
            </>
        </div>
    )
}

export default Button
