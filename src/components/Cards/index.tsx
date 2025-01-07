import { useSystem } from '../../context/SystemProvider';
import styles from './styles.module.scss'

const Card = ({socialIcon, name}) => {
    const { setSocialToPost, getSocialToPost } = useSystem();

    const validateCssClass = () => {
        console.log('mudar css')
        let selected = getSocialToPost();
        if(name === selected){
            return { border: '2px solid #115869', backgroundColor: '#FFFFFF10'}
        }
    }

    return (
        <section className={styles.wrapper} onClick={() => setSocialToPost(name)} style={validateCssClass()}>
            <div className={styles.container}>
                {socialIcon}
            </div>
        </section>
    )
};

export default Card;
