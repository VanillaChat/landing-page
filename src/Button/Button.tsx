import React, {HTMLAttributeAnchorTarget} from "react";
import "./Button.css";

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    filled?: boolean;
    style?: React.CSSProperties;
    href?: string;
    target?: HTMLAttributeAnchorTarget;
};

const Button: React.FC<React.PropsWithChildren<Props>> = (props: Props) => {
    return props.disabled ? (
        <Button
            disabled
            filled={props.filled}
            style={props.style}
        >
            {props.children}
        </Button>
    ) : (
        <a
            style={props.style}
            onClick={props.disabled ? () => void 0 : props.onClick}
            className={`button${props.disabled ? " disabled " : ""}${
                props.filled ? " filled" : ""
            }`}
            href={props.href}
            target={props.target}
        >
            {props.children}
        </a>
    );
};
export default Button;