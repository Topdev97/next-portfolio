"use client";

import Title, { titleTypes } from "@/shared/ui/title";
import { useTranslations } from "next-intl";
import Line, { lineAligns } from "@/shared/ui/line";
import cx from "classnames";

import { motion } from "framer-motion";
import { smoothAppearing } from "@/shared/constants/animationProps";

import styles from "./styles.module.scss";
import cssVars from "@/shared/styles/vars.module.scss";

const AboutMe = () => {
    const t = useTranslations("home");

    return (
        <motion.div {...smoothAppearing}>
            <Title
                className={cx(styles.nameTitle, styles.text)}
                text={t("name")}
                titleType={titleTypes.h1}
            />
            <Title
                className={cx(styles.jobTitle, styles.text)}
                text={t("jobTitleShared")}
                titleType={titleTypes.h2}
            />
            <p className={styles.jobDesc}>{t("aboutMe")}</p>
            <Title
                className={cx(styles.experience, styles.text)}
                text={t("experience")}
                titleType={titleTypes.h2}
            />
            <Line
                thickness={"2px"}
                className={styles.line}
                color={cssVars.gray}
                align={lineAligns.horizontal}
            />
        </motion.div>
    );
};
export default AboutMe;
