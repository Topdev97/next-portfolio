"use client";

import { useTranslations } from "next-intl";
import { EN, RU } from "@/shared/constants/locales";
import Link from "next-intl/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Line from "@/shared/ui/line";
import lineAligns from "@/shared/ui/line/lineAligns";
import LanguagePicker from "./languagePicker";
import cx from "classnames";

import styles from "./styles.module.scss";

const Header = () => {
    const t = useTranslations("header");
    const pathname = usePathname();

    const isRuLocation = pathname.includes(RU);

    const [withLine, setWithLine] = useState(true);

    useEffect(() => {
        const scrollHandler = () => {
            const scrollTop = window.scrollY;

            if (scrollTop > 0 && withLine) {
                setWithLine(false);
            }

            if (scrollTop == 0) {
                setWithLine(true);
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    return (
        <header className={styles.header}>
            <nav className={cx(styles.nav, withLine && styles.linedNav)}>
                <ul className={styles.ul}>
                    <li>
                        <Link className={styles.link} href={"/"} locale={isRuLocation ? RU : EN}>
                            {t("home")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.link}
                            href={"/projects"}
                            locale={isRuLocation ? RU : EN}
                        >
                            {t("projects")}
                        </Link>
                    </li>
                    <Line className={styles.line} align={lineAligns.vertical} thickness={"2px"} />
                    <LanguagePicker isRuLocation={isRuLocation} />
                </ul>
            </nav>
        </header>
    );
};
export default Header;
