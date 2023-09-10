"use client";

import { FC } from "react";
import { RU, EN } from "@/shared/constants/locales";
import Link from "next-intl/link";
import Image from "next/image";

import ruFlag from "@/shared/assets/svg/ruFlag.svg";
import usFlag from "@/shared/assets/svg/usFlag.svg";
import styles from "./styles.module.scss";

interface ILanguagePicker {
    isRuLocation: boolean;
}
const LanguagePicker: FC<ILanguagePicker> = ({ isRuLocation }) => {
    return (
        <div className={styles.container}>
            {isRuLocation ? (
                <Link href={"/"} locale={EN}>
                    <Image className={styles.img} src={usFlag} alt={EN} />
                </Link>
            ) : (
                <Link href={"/"} locale={RU}>
                    <Image className={styles.img} src={ruFlag} alt={RU} />
                </Link>
            )}
        </div>
    );
};
export default LanguagePicker;
