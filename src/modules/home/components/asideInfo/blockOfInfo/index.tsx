"use client";

import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Title, { titleTypes } from "@/shared/ui/title";
import cx from "classnames";
import Line, { lineAligns } from "@/shared/ui/line";

import { motion } from "framer-motion";
import { smoothAppearing } from "@/shared/constants/animationProps";

import styles from "./styles.module.scss";
import squareImg from "@/shared/assets/svg/square.svg";

interface IBlockOfInfo {
    infoTitle: string;
    info: Array<{ title: string; description: string; year?: string; link?: string } | string>;
    withDots?: boolean;
}
const BlockOfInfo: FC<IBlockOfInfo> = ({ infoTitle, info, withDots }) => {
    const t = useTranslations("home");

    const infoElement = info.map((infoEl) => {
        if (typeof infoEl !== "string") {
            const { year, title, description, link } = infoEl;

            const isPhoneTitle = title.includes(t("tel"));
            const isMailTitle = title.includes(t("mail"));

            const isRegularTitle = !isPhoneTitle && !isMailTitle;

            return (
                <>
                    <Title
                        className={cx(styles.title, styles.titleH4)}
                        text={title}
                        titleType={titleTypes.h4}
                    />
                    {year && <p className={styles.text}>{year}</p>}
                    {isRegularTitle ? (
                        !link ? (
                            <span className={styles.text}>{description}</span>
                        ) : (
                            <a target="_blank" className={styles.text} href={link}>
                                {description}
                            </a>
                        )
                    ) : (
                        <a
                            className={styles.text}
                            href={`${isPhoneTitle ? "tel" : "mailTo"}:${description}`}
                        >
                            {description}
                        </a>
                    )}
                </>
            );
        } else {
            if (withDots) {
                return (
                    <ul>
                        <li className={cx(styles.text, styles.li)}>
                            <Image
                                className={styles.squareImg}
                                src={squareImg}
                                alt={"img square"}
                            />
                            <span>{infoEl}</span>
                        </li>
                    </ul>
                );
            } else {
                return <p className={styles.text}>{infoEl}</p>;
            }
        }
    });

    return (
        <motion.div {...smoothAppearing} className={styles.container}>
            <Title
                className={cx(styles.title, styles.titleH3)}
                text={infoTitle}
                titleType={titleTypes.h3}
            />
            <Line thickness={"2px"} className={styles.line} align={lineAligns.horizontal} />
            {infoElement}
        </motion.div>
    );
};
export default BlockOfInfo;
