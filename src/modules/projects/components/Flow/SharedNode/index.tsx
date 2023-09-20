import { FC, lazy, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { INodesData } from "../defaultData";
import Title, { titleTypes } from "@/shared/ui/title";
import Button, { buttonVariants } from "@/shared/ui/button";
import Line from "@/shared/ui/line";
import cx from "classnames";

import { AnimatePresence } from "framer-motion";

import gitImg from "@/shared/assets/svg/git.svg";
import styles from "./styles.module.scss";

const Modal = lazy(() => import("./modal"));

type TSharedNode = Omit<INodesData, "coordinates">;
const SharedNode: FC<TSharedNode> = ({
    name,
    imgSrc,
    extendedDesc,
    extendedStack,
    desc,
    link,
    stack
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => setModalVisible(true);

    return (
        <div className={styles.container}>
            <Image className={styles.projImg} src={imgSrc} alt={"project img"} />
            <Title
                className={cx(styles.text, styles.title)}
                text={name}
                titleType={titleTypes.h4}
            />
            <Line thickness={"2px"} />
            <p className={cx(styles.text, styles.stack)}>{stack}</p>
            <p className={styles.desc}>{desc}</p>
            <Line thickness={"2px"} />
            <div className={styles.btnsSection}>
                <Button onClick={openModal} variant={buttonVariants.DARK}>
                    Learn more
                </Button>
                <a target="_blank" href={link}>
                    <Image className={styles.gitImg} src={gitImg} alt={"git img"} />
                </a>
            </div>
            {createPortal(
                <AnimatePresence>
                    {modalVisible && (
                        <Modal
                            name={name}
                            link={link}
                            imgSrc={imgSrc}
                            stack={extendedStack}
                            desc={extendedDesc}
                            setIsVisible={setModalVisible}
                        />
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
};
export default SharedNode;
