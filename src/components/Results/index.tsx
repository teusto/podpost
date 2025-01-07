import { ReactNode } from 'react';
import styles from './styles.module.scss'

interface IResult {
    title: string
    text?: string
    children?: ReactNode
}

const Results = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.linkedin_container}>
                    <div className={styles.top}>header</div>
                    <div className={styles.mid}>content</div>
                    <div className={styles.bottom}>footer</div>
                </div>
                <div className={styles.btn_container}>
                    <button className={styles.button}>Share</button>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.x_container}>
                    <div className={styles.top}>header</div>
                    <div className={styles.mid}>content</div>
                    <div className={styles.bottom}>footer</div>
                </div>
                <div className={styles.btn_container}>
                    <button className={styles.button}>Share</button>
                </div>
            </div>
        </section>
    )
};

export default Results;
