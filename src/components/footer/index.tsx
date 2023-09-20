import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import defineAges from "@/shared/lib/utils/defineAges";

const Footer = () => {
    const t = useTranslations("footer");

    return (
        <div className={styles.container}>
            <span className={styles.text}>
                {t("copyright")} {defineAges(0)}
            </span>
        </div>
    );
};
export default Footer;
