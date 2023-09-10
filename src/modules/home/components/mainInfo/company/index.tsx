import { FC } from "react";
import { ICompany } from "../defaultData";
import Title from "@/shared/ui/title";
import titleTypes from "@/shared/ui/title/titleTypes";
import getStrWithClassBeforeSeparator from "@/shared/lib/utils/getStrWithClassBeforeSeparator";
import cx from "classnames";

import styles from "./styles.module.scss";

const Company: FC<ICompany> = ({
    jobTitle,
    companyName,
    companyLocation,
    companyDescription,
    companyYears,
    skills,
    workingProcess
}) => {
    const skillsParsed = getStrWithClassBeforeSeparator(skills, styles.externalTitle);
    const workingProcessParsed = getStrWithClassBeforeSeparator(
        workingProcess,
        styles.externalTitle
    );

    return (
        <div>
            <Title
                className={cx(styles.text, styles.title)}
                text={jobTitle}
                titleType={titleTypes.h4}
            />
            <div className={cx(styles.text, styles.aboutCompany)}>
                <span className={styles.companyName}>{companyName}</span>|
                <span>{companyLocation}</span>|<span>{companyYears}</span>
            </div>
            <p className={cx(styles.lightText, styles.description)}>{companyDescription}</p>
            <p className={cx(styles.text, styles.skills)}>{skillsParsed}</p>
            <p className={styles.text}>{workingProcessParsed}</p>
        </div>
    );
};

export default Company;
