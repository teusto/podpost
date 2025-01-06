import styles from './urlbar.module.scss'

const UrlBar = () => {
    return (
        <>
            <input 
                type="text"
                className={styles.input}
            />
            <button className={styles.button}>Generate</button>
        </>
    )
};

export default UrlBar;
