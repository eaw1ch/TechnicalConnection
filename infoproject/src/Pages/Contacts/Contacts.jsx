import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Contacts.module.scss';
import Subject from './Subject';

function Contacts() {
  return (
    <Container className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.named}>Контакты</div>
        <p className={styles.opacityTxt}>Субъект РФ:</p>
        <Subject />
      </div>
      <div className={styles.rightSide}></div>
    </Container>
  );
}

export default Contacts;
