import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './Form.module.scss';
import stats from '../../../assets/data/stats';

function Form3() {
  const unit = 'кВ';
  const loadComponents = [
    { value: 'Бытовая' },
    { value: 'Производственная' },
    { value: 'Генерация' },
    { value: 'Совмещенная' }
  ];

  const [power, setPower] = useState(0);
  const [voltage, setVoltage] = useState(0);
  const [load, setLoad] = useState('');
  const [value, setValue] = useState('');

  return (
    <Container className={styles.container}>
      <div className={styles.named}>Технические характеристики устройств</div>
      <form>
        <div className={styles.block}>
          <div className={styles.firstSide}>
            <text className={styles.opacityTxt}>
              Максимальная мощность <br />
              устройств (всего), кВт
            </text>
          </div>
          <div className={styles.secSide}>
            <input
              className={styles.input}
              onChange={event => setPower(event.target.value)}
              value={power}
            />
          </div>
        </div>
        <div className={styles.block}>
          <text className={styles.opacityTxt}>при напряжении</text>
          <select
            style={{ marginLeft: 77 }}
            name='pick'
            required='required'
            value={voltage}
            onChange={event => setVoltage(event.target.value)}
          >
            <option value=''>[не выбрано]</option>
            {stats.map(arr => (
              <option selected value={arr.value}>
                {arr.value} {unit}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.block}>
          <text className={styles.opacityTxt}>Характер нагрузки</text>
          <select
            style={{ marginLeft: 64 }}
            name='pick'
            required='required'
            value={load}
            onChange={event => setLoad(event.target.value)}
          >
            <option value=''>[не выбрано]</option>
            {loadComponents.map(arr => (
              <option selected value={arr.value}>
                {arr.value}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.block}>
          <div className={styles.leftSide}>
            <text className={styles.opacityTxt}>Категория надежности</text>
          </div>
          <div className={styles.rightSide}>
            <label>
              <input
                type='radio'
                value='I'
                checked={value === 'I' ? true : false}
                onChange={event => setValue(event.target.value)}
                name='radio'
              />
              I
            </label>
            <label>
              <input
                type='radio'
                value='II'
                checked={value === 'II' ? true : false}
                onChange={event => setValue(event.target.value)}
                name='radio'
              />
              II
            </label>
            <label>
              <input
                type='radio'
                value='III'
                checked={value === 'III' ? true : false}
                onChange={event => setValue(event.target.value)}
                name='radio'
              />
              III
            </label>
          </div>
        </div>
        <p>
          <br />
          <br />
          {power}, {voltage}, {load}, {value}
        </p>
      </form>
    </Container>
  );
}

export default Form3;
