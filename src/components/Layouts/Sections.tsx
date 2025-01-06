import { ReactNode } from 'react';
import styles from './sections.module.scss'

interface ISectionLayout {
    title: string
    text?: string
    children?: ReactNode
}

const SectionLayout = ({title, text, children}:ISectionLayout) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.text_container}>
                <p className={styles.title}>{title}</p>
                <p className={styles.text}>{text}</p>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </section>
    )
};

export default SectionLayout;
