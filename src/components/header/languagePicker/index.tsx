"use client";

import { FC } from "react";
import { RU, EN } from "@/shared/constants/locales";
import Link from "next-intl/link";
import Image from "next/image";

import ruFlag from "@/shared/assets/svg/ruFlag.svg";
import usFlag from "@/shared/assets/svg/usFlag.svg";
import styles from "./styles.module.scss";

interface ILanguagePicker {
    pathname: string;
    locationCountry: typeof RU | typeof EN;
}
const LanguagePicker: FC<ILanguagePicker> = ({ pathname, locationCountry }) => {
    const isRuLocation = locationCountry === RU;
    const targetHref = pathname.replace("/" + RU, "").replace("/" + EN, "");

    return (
        <div className={styles.container}>
            <Link href={targetHref || "/"} locale={isRuLocation ? EN : RU}>
                <Image
                    className={styles.img}
                    src={isRuLocation ? ruFlag : usFlag}
                    alt={locationCountry}
                />
            </Link>
        </div>
    );
};
export default LanguagePicker;
