import { cloneElement, FC, useEffect, useRef } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { smoothAppearing } from "@/shared/constants/animationProps";

import styles from "./styles.module.scss";
import closeImg from "@/shared/assets/svg/close.svg";

interface IWithModal {
    closeModal: () => void;

    children: any;
}
const WithModal: FC<IWithModal> = ({ closeModal, children }) => {
    const modalChildRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (modalChildRef) {
            const handleClickOutside = (e: any) => {
                if (modalChildRef.current && !modalChildRef.current.contains(e.target)) {
                    closeModal();
                }
            };

            document.addEventListener("click", handleClickOutside, true);
            return () => {
                document.removeEventListener("click", handleClickOutside, true);
            };
        }
    }, []);

    return (
        <motion.div key={"modal"} {...smoothAppearing} className={styles.container}>
            {cloneElement(children, {
                ref: (ref: HTMLDivElement) => (modalChildRef.current = ref)
            })}
            <Image className={styles.closeImg} src={closeImg} alt={"close"} />
        </motion.div>
    );
};
export default WithModal;
