"use client";

import Flow from "./components/Flow";

import { motion } from "framer-motion";
import { smoothAppearing } from "@/shared/constants/animationProps";

import styles from "./styles.module.scss";

const Projects = () => {
    return (
        <motion.div {...smoothAppearing} className={styles.container}>
            <Flow />
        </motion.div>
    );
};
export default Projects;
