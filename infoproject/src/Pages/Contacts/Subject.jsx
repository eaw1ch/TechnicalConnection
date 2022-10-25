import React, { useState, useEffect } from 'react';
import areas from '../../assets/data/area';
import styles from './Contacts.module.scss';
import companies from '../../assets/data/company';

function Subject() {
  const [value, setValue] = useState('');

  useEffect(() => {
    document.getElementById('obl').innerHTML = `Ваша область: ${value}`;
  }, [value]);

  return (
    <>
      <select
        name='pick'
        required='required'
        value={value}
        onChange={event => setValue(event.target.value)}
      >
        <option value=''>Выберите область</option>
        {areas.map((area, key) => (
          <option key={key} selected value={area.value}>
            {area.value}
          </option>
        ))}
      </select>
      <p id='obl'></p>
      {companies.map(
        company =>
          company.region === value && (
            <div className={styles.company}>
              <p className={styles.companyName}>{company.name}</p>
              <p className={styles.opacityTxt}>Адрес:</p>
              <p className={styles.companyAdd}>{company.address}</p>
              <p className={styles.opacityTxt}>Телефон:</p>
              <p className={styles.companyAdd}>{company.telephone}</p>
              <p className={styles.opacityTxt}>Электронная почта:</p>
              <p className={styles.companyAdd}>
                <a href={company.mailto}>{company.email}</a>
              </p>
              <p className={styles.opacityTxt}>Веб-сайт:</p>
              <p className={styles.companyAdd}>
                <a href={company.web}>{company.web}</a>
              </p>
            </div>
          )
      )}
    </>
  );
}

export default Subject;
