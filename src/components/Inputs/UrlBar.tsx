import { useState } from 'react';
import styles from './urlbar.module.scss'

const UrlBar = () => {
    const [url, setUrl] = useState('');

    console.log({url})

    const validateURL = (value) => {
        // validtae if is a url from youtube
        setUrl(value);
    }

    return (
        <>
            <input 
                type="text"
                className={styles.input}
                onChange={(e) => validateURL(e.target.value)}
            />
            <button className={styles.button}>Generate</button>
        </>
    )
};

export default UrlBar;
