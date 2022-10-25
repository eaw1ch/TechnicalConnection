import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './Form.module.scss';
import areas from '../../../assets/data/area';
import companies from '../../../assets/data/company';

function Form1() {
  const [myname, setMyname] = useState('');
  const [surname, setSurname] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [area, setArea] = useState('');
  const [branch, setBranch] = useState('');

  return (
    <Container className={styles.container}>
      <div className={styles.named}>Общая информация</div>
      <form>
        <div className={styles.leftSide}>
          <input
            className={styles.input}
            onChange={event => setSurname(event.target.value)}
            value={surname}
            placeholder=' Фамилия'
          />
          <input
            className={styles.input}
            onChange={event => setMyname(event.target.value)}
            value={myname}
            placeholder=' Имя'
          />
          <input
            className={styles.input}
            onChange={event => setPatronymic(event.target.value)}
            value={patronymic}
            placeholder=' Отчество'
          />
        </div>

        <div className={styles.rightSide}>
          <select
            name='pick'
            required='required'
            value={area}
            onChange={event => setArea(event.target.value)}
          >
            <option value=''>Выберите область</option>
            {areas.map(arr => (
              <option selected value={arr.value}>
                {arr.value}
              </option>
            ))}
          </select>
          <select
            name='pick'
            required='required'
            value={branch}
            onChange={event => setBranch(event.target.value)}
          >
            <option value=''>Выберите филиал</option>
            {companies.map(arr => (
              <option selected value={arr.name}>
                {arr.name}
              </option>
            ))}
          </select>
          <p>
            {surname}, {myname}, {patronymic}, {area}, {branch}
          </p>
        </div>
      </form>
    </Container>
  );
}

export default Form1;
