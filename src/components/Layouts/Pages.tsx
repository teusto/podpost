import styles from './pages.module.scss'

const PageLayout = ({children}) => {
    return (
        <section className={styles.wrapper}>
            {children}
        </section>
    )
};

export default PageLayout;
