import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
const Footer = () => {
    const t = useTranslations("footer");

    return (
        <div className={styles.container}>
            <span className={styles.text}>
                {t("copyright")} {new Date().getFullYear()}
            </span>
        </div>
    );
};
export default Footer;
