'use client';
import Door from '@/components/Door';
import styles from '../../../styles/game.module.css';
import { useEffect, useState } from 'react';
import { createDoors, updateDoors } from '../../../app/helpers/doors';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DoorModel from '@/models/door';

const Game = () => {
    const router = useRouter();
    const [valid, setValid] = useState(false);
    const [doors, setDoors] = useState<DoorModel[]>([]);

    useEffect(() => {
        const doorsNumber = router.query.doors ? +router.query.doors : 0;
        const giftDoor = router.query.giftDoor ? +router.query.giftDoor : 0;

        const validDoorsQuantity = doorsNumber >= 2 && doorsNumber <= 7;
        const giftDoorValid = giftDoor >= 1 && giftDoor <= doorsNumber;

        setValid(validDoorsQuantity && giftDoorValid);
    }, [doors, router.query]);

    useEffect(() => {
        const doorsNumber = router.query.doors ? +router.query.doors : 0;
        const giftDoor = router.query.giftDoor ? +router.query.giftDoor : 0;
        const newDoors = createDoors(doorsNumber, giftDoor);
        setDoors(newDoors);
      }, [router?.query]);

    return (
        <div id={styles.game}>
            <div className={styles.doors}>
                {valid && doors.map(door => (
                    <Door key={door.number} value={door} onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />
                ))}
                {!valid &&
                    <h1>Valores Inválidos!</h1>
                }
            </div>
            <div className={styles.buttonArea}>
                <Link href='/' passHref>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}

export default Game;