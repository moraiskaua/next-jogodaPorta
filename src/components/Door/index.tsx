import DoorModel from '@/models/door';
import styles from '../../styles/door.module.css';
import Gift from '../Gift';

interface DoorProps {
    value: DoorModel;
    onChange: (newDoor: DoorModel) => void;
}

const Door = (props: DoorProps) => {
    const door = props.value;
    const isSelected = door.selected && !door.opened ? styles.selected : '';

    const handleToggleSelection = e => props.onChange(door.toggleSelection());
    const handleOpenDoor = e => {
        e.stopPropagation();
        props.onChange(door.OpenDoor());
    };

    return (
        <div className={styles.area} onClick={handleToggleSelection}>
            <div className={`${styles.frame} ${isSelected}`}>
                {door.closed ?
                    <div className={styles.door}>
                        <div className={styles.number}>{door.number}</div>
                        <div className={styles.knob} onClick={handleOpenDoor}></div>
                    </div>
                    : door.haveGift && <Gift />
                }
            </div>
            <div className={styles.floor}></div>
        </div>
    );
}

export default Door;