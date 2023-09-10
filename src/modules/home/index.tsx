import AsideInfo from "./components/asideInfo";
import MainInfo from "./components/mainInfo";

import styles from "./styles.module.scss";

const Home = () => {
    return (
        <main className={styles.container}>
            <AsideInfo />
            <MainInfo />
        </main>
    );
};
export default Home;
