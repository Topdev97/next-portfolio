import { FC, HTMLAttributes, ReactNode } from "react";
import cx from "classnames";

import styles from "./styles.module.scss";

export enum buttonVariants {
    DARK = "dark",
    LIGHT = "light"
}

interface IButton {
    variant?: buttonVariants;
    borderWidth?: string;
    children: ReactNode | undefined;
}
const Button: FC<IButton & HTMLAttributes<HTMLButtonElement>> = ({
    variant = buttonVariants.LIGHT,
    borderWidth = "2px",
    children,
    ...basicProps
}) => {
    const { className, style, ...restBasicProps } = basicProps;

    return (
        <button
            {...restBasicProps}
            style={{
                borderWidth,
                ...style
            }}
            className={cx(styles.btn, styles[variant], className)}
        >
            {children}
        </button>
    );
};
export default Button;
