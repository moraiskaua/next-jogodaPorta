'use client';
import Door from '@/components/Door';
import styles from '../../../styles/game.module.css';
import { useEffect, useState } from 'react';
import { createDoors, updateDoors } from '../../../app/helpers/doors';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Game = () => {
    const router = useRouter();
    const [valid, setValid] = useState(false);
    const [doors, setDoors] = useState([]);

    useEffect(() => {
        const doorsNumber = +router.query.doors;
        const giftDoor = +router.query.giftDoor;

        const validDoorsQuantity = doorsNumber >= 2 && doorsNumber <= 7;
        const giftDoorValid = giftDoor >= 1 && giftDoor <= doorsNumber;

        setValid(validDoorsQuantity && giftDoorValid);
    }, [doors, router.query]);

    useEffect(() => {
        const doorsNumber = +router.query.doors;
        const giftDoor = +router.query.giftDoor;
        setDoors(createDoors(doorsNumber, giftDoor));
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