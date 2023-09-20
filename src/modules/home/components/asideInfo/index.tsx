"use client";

import Image from "next/image";
import BlockOfInfo from "@/modules/home/components/asideInfo/blockOfInfo";
import { useTranslations } from "next-intl";
import { getContactInfo, getEducationInfo, getLanguagesInfo, getSkillsInfo } from "./defaultData";

import { motion } from "framer-motion";
import { smoothAppearing } from "@/shared/constants/animationProps";

import styles from "./styles.module.scss";
import myImage from "@/shared/assets/img/my.jpg";

const AsideInfo = () => {
    const t = useTranslations("home");

    return (
        <div className={styles.container}>
            <motion.div {...smoothAppearing}>
                <Image className={styles.myImg} src={myImage} alt={"my image"} />
            </motion.div>
            <div className={styles.infoSection}>
                <BlockOfInfo infoTitle={t("contacts")} info={getContactInfo(t)} />
                <BlockOfInfo infoTitle={t("skills")} info={getSkillsInfo()} withDots={true} />
                <BlockOfInfo infoTitle={t("education")} info={getEducationInfo(t)} />
                <BlockOfInfo infoTitle={t("languages")} info={getLanguagesInfo(t)} />
            </div>
        </div>
    );
};
export default AsideInfo;
