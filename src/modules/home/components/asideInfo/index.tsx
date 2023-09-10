import Image from "next/image";
import BlockOfInfo from "@/modules/home/components/asideInfo/blockOfInfo";
import { useTranslations } from "next-intl";
import { getContactInfo, getEducationInfo, getLanguagesInfo, getSkillsInfo } from "./defaultData";

import styles from "./styles.module.scss";
import myImage from "@/shared/assets/img/my.jpg";

const AsideInfo = () => {
    const t = useTranslations("home");

    return (
        <aside className={styles.container}>
            <Image className={styles.myImg} src={myImage} alt={"my image"} />
            <div className={styles.infoSection}>
                <BlockOfInfo infoTitle={t("contacts")} info={getContactInfo(t)} translation={t} />
                <BlockOfInfo
                    infoTitle={t("skills")}
                    info={getSkillsInfo()}
                    translation={t}
                    withDots={true}
                />
                <BlockOfInfo
                    infoTitle={t("education")}
                    info={getEducationInfo(t)}
                    translation={t}
                />
                <BlockOfInfo
                    infoTitle={t("languages")}
                    info={getLanguagesInfo(t)}
                    translation={t}
                />
            </div>
        </aside>
    );
};
export default AsideInfo;
