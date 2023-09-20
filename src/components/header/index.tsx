"use client";

import { useTranslations } from "next-intl";
import { EN, RU } from "@/shared/constants/locales";
import { HOME_ROUTE, PROJECTS_ROUTE } from "./routes";
import Link from "next-intl/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Line, { lineAligns } from "@/shared/ui/line";
import LanguagePicker from "./languagePicker";
import cx from "classnames";

import styles from "./styles.module.scss";

const Header = () => {
    const t = useTranslations("header");
    const pathname = usePathname();

    const locationCountry = pathname.includes(RU) ? RU : EN;
    const isHomePage = !pathname.includes("projects");

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
            <nav className={cx(styles.nav, withLine && isHomePage && styles.linedNav)}>
                <ul className={styles.ul}>
                    <li>
                        <Link className={styles.link} href={HOME_ROUTE} locale={locationCountry}>
                            {t("home")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.link}
                            href={PROJECTS_ROUTE}
                            locale={locationCountry}
                        >
                            {t("projects")}
                        </Link>
                    </li>
                    <Line className={styles.line} align={lineAligns.vertical} thickness={"2px"} />
                    <LanguagePicker pathname={pathname} locationCountry={locationCountry} />
                </ul>
            </nav>
        </header>
    );
};
export default Header;
