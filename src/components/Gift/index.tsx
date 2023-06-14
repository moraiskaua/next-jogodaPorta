import styles from '../../styles/gift.module.css';

const Gift = () => {
    return (
        <div className={styles.gift}>
            <div className={styles.top}>
                <span className={styles.rightTie}></span>
                <span className={styles.leftTie}></span>
            </div>
            <div className={styles.body}></div>
            <div className={styles.verticalTie}></div>
            <div className={styles.horizontalTie}></div>
        </div>
    );
}

export default Gift;