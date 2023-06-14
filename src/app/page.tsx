'use client';
import Link from 'next/link';
import styles from '../styles/form.module.css';
import Card from '@/components/Card';
import NumberInput from '@/components/NumberInput';
import { useState } from 'react';

const Form = () => {
  const [doorsQuantity, setDoorsQuantity] = useState(3);
  const [giftDoor, setGiftDoor] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgColor='#c0392c'>
          <h1>Acerte a Porta</h1>
        </Card>
        <Card>
          <NumberInput
            text='Quantas portas?'
            value={doorsQuantity}
            onChange={newQuantity => setDoorsQuantity(newQuantity)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput
            text='Porta premiada?'
            value={giftDoor}
            onChange={newGiftDoor => setGiftDoor(newGiftDoor)}
          />
        </Card>
        <Card bgColor='#28a085'>
          <Link href={`/game/${doorsQuantity}/${giftDoor}`} className={styles.startGame} passHref>
            <h2>Iniciar Jogo</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}

export default Form;