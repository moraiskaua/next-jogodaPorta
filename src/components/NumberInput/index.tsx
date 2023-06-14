import styles from './numberInput.module.css';

interface NumberInputProps {
    text: string;
    value: number;
    onChange: (newValue: number) => void;
}

const NumberInput = ({ text, value, onChange }: NumberInputProps) => {

    const handleIncrement = () => value >= 7 ? onChange(7) : onChange(value + 1);
    const handleDecrement = () => value <= 1 ? onChange(1) : onChange(value - 1);

    return (
        <div className={styles.numberInput}>
            <span className={styles.text}>{text}</span>
            <span className={styles.value}>{value}</span>
            <div className={styles.buttonsArea}>
                <button className={styles.button} onClick={handleDecrement}>-</button>
                <button className={styles.button} onClick={handleIncrement}>+</button>
            </div>
        </div>
    );
}

export default NumberInput;