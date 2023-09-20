"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import { ICompany } from "../defaultData";
import Title, { titleTypes } from "@/shared/ui/title";
import cx from "classnames";

import { motion } from "framer-motion";
import { smoothAppearing } from "@/shared/constants/animationProps";

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
    const t = useTranslations("home");

    return (
        <motion.div {...smoothAppearing}>
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
            <div className={cx(styles.text, styles.skills)}>
                <span className={styles.externalTitle}>{t("skills")}</span>
                <span>: {skills}</span>
            </div>
            <div className={styles.text}>
                <span className={styles.externalTitle}>{t("workingProcess")}</span>
                <span>: {workingProcess}</span>
            </div>
        </motion.div>
    );
};

export default Company;
