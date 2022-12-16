import styles from './Avatar.module.css';

export function Avatar(props) {
    return (
            <img 
            className={props.hasBorder ? styles.avatarWithBoerder : styles.avatar} 
            src={props.src} />
        );
}
