import { useSystem } from '../../context/SystemProvider';
import useLinkedin from '../../hooks/useLinkedin';
import styles from './styles.module.scss'

const Card = ({socialIcon, name}) => {
    const { setSocialToPost, getSocialToPost } = useSystem();
    const { signinOn } = useLinkedin();

    const validateCssClass = () => {
        console.log('mudar css')
        let selected = getSocialToPost();
        if(name === selected){
            return { border: '2px solid #115869', backgroundColor: '#FFFFFF10'}
        }
    }

    const handleClick = () => {
        setSocialToPost(name);
        signinOn();
    }

    return (
        <section className={styles.wrapper} onClick={() => handleClick()} style={validateCssClass()}>
            <div className={styles.container}>
                {socialIcon}
            </div>
        </section>
    )
};

export default Card;
