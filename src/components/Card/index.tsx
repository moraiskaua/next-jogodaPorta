import { ReactNode } from 'react';
import styles from '../../styles/card.module.css';

interface CardProps {
    bgColor?: string;
    children?: ReactNode;
}

const Card = ({bgColor, children}: CardProps) => {
    return (
        <div className={styles.card}
            style={{ backgroundColor: bgColor ?? 'whitesmoke' }}
        >
            {children}
        </div>
    );
}

export default Card;