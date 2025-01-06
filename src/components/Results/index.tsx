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
                <div>
                    <p>Name of the Post</p>
                </div>
                <div>
                    <div>
                        <button>Share</button>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div>
                    <p>Name of the Post</p>
                </div>
                <div>
                    <div>
                        <button>Share</button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Results;
