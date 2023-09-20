import { useTranslations } from "next-intl";

import getCompaniesData from "@/modules/home/components/mainInfo/defaultData";
import Company from "@/modules/home/components/mainInfo/company";

import styles from "./styles.module.scss";
import AboutMe from "@/modules/home/components/mainInfo/aboutMe";

const MainInfo = () => {
    const t = useTranslations("home");

    const companies = getCompaniesData(t);

    return (
        <div className={styles.container}>
            <AboutMe />
            {companies.map((companyData, index) => (
                <Company key={"_" + index + companyData.companyName} {...companyData} />
            ))}
        </div>
    );
};
export default MainInfo;
