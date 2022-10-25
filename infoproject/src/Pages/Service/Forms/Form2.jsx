import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './Form.module.scss';
import devices from '../../../assets/data/device';

function Form2() {
  const [device, setDevice] = useState('');
  const [value, setValue] = useState('');

  return (
    <Container className={styles.container}>
      <div className={styles.named}>Энергопринимающие устройства</div>
      <form>
        <div className={styles.block}>
          <text className={styles.opacityTxt}>Наименование устройств</text>
          <select
            name='pick'
            required='required'
            value={device}
            onChange={event => setDevice(event.target.value)}
          >
            <option value=''>Выберите устройство</option>
            {devices.map(arr => (
              <option selected value={arr.value}>
                {arr.value}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.block}>
          <div className={styles.leftSide}>
            <text className={styles.opacityTxt}>Тип местности</text>
          </div>
          <div className={styles.rightSide}>
            <label>
              <input
                type='radio'
                value='Городская'
                checked={value === 'Городская' ? true : false}
                onChange={event => setValue(event.target.value)}
                name='radio'
              />
              Городская
            </label>
            <label>
              <input
                type='radio'
                value='Сельская'
                checked={value === 'Сельская' ? true : false}
                onChange={event => setValue(event.target.value)}
                name='radio'
              />
              Сельская
            </label>
          </div>
        </div>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        {device}, {value}
      </div>
    </Container>
  );
}

export default Form2;
