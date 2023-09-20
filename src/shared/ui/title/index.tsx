import { FC, HTMLAttributes } from "react";
import cx from "classnames";

import styles from "./styles.module.scss";

export enum titleTypes {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6"
}

interface ITitle {
    text: string;
    titleType?: titleTypes;
}
const Title: FC<ITitle & HTMLAttributes<HTMLHeadElement>> = ({
    text,
    titleType,
    ...basicProps
}) => {
    const { className, ...restBasicProps } = basicProps;

    const getTitleProps = (style: string) => ({
        className: cx(style, className),
        ...restBasicProps
    });

    switch (titleType) {
        case titleTypes.h6: {
            return <h6 {...getTitleProps(styles.titleH6)}>{text}</h6>;
        }
        case titleTypes.h5: {
            return <h5 {...getTitleProps(styles.titleH5)}>{text}</h5>;
        }
        case titleTypes.h4: {
            return <h4 {...getTitleProps(styles.titleH4)}>{text}</h4>;
        }
        case titleTypes.h3: {
            return <h3 {...getTitleProps(styles.titleH3)}>{text}</h3>;
        }
        case titleTypes.h2: {
            return <h2 {...getTitleProps(styles.titleH2)}>{text}</h2>;
        }
        default: {
            return <h1 {...getTitleProps(styles.titleH1)}>{text}</h1>;
        }
    }
};
export default Title;
