import { FC, HTMLAttributes } from "react";
import cssVars from "@/shared/styles/vars.module.scss";
import cx from "classnames";

import styles from "./styles.module.scss";

export enum lineAligns {
    vertical = "vertical",
    horizontal = "horizontal"
}

interface ILine {
    align?: lineAligns;
    thickness?: string;
    size?: string;

    color?: string;
}
const Line: FC<ILine & HTMLAttributes<HTMLDivElement>> = ({
    align = lineAligns.horizontal,
    size = "100%",
    thickness = "1px",
    color = cssVars.light,
    ...basicProps
}) => {
    const { className, style, ...restProps } = basicProps;
    const isHorizontal = align === lineAligns.horizontal;

    const extraStyle = {
        ...{ [isHorizontal ? "borderBottom" : "borderLeft"]: `${thickness} solid` },
        ...{ [isHorizontal ? "width" : "height"]: size },
        borderColor: color
    };

    return (
        <div
            className={cx(styles.line, className)}
            {...restProps}
            style={{
                ...style,
                ...extraStyle
            }}
        />
    );
};
export default Line;
