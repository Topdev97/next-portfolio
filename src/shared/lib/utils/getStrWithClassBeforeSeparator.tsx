import cx from "classnames";

const getStrWithClassBeforeSeparator = (str: string, className: string, separator = ":") => {
    return str.split(separator).map((el, index) => (
        <>
            <span className={cx(!index && className)}>{el}</span>
    {!index && ": "}
    </>
));
};

export default getStrWithClassBeforeSeparator;