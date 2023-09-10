import { useTranslations } from "next-intl";
import { useMemo } from "react";

import Title from "@/shared/ui/title";
import titleTypes from "@/shared/ui/title/titleTypes";
import Line from "@/shared/ui/line";
import lineAligns from "@/shared/ui/line/lineAligns";
import getCompaniesData from "@/modules/home/components/mainInfo/defaultData";
import Company from "@/modules/home/components/mainInfo/company";
import cx from "classnames";

import styles from "./styles.module.scss";
import variables from "@/shared/styles/vars.module.scss";

const MainInfo = () => {
    const t = useTranslations("home");

    const companies = useMemo(() => getCompaniesData(t), []);

    return (
        <div className={styles.container}>
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
                color={variables.gray}
                align={lineAligns.horizontal}
            />
            {companies.map((companyData, index) => (
                <Company key={"_" + index + companyData.companyName} {...companyData} />
            ))}
        </div>
    );
};
export default MainInfo;
