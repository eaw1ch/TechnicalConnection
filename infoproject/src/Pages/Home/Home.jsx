import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import AnimatedNumber from 'react-animated-number';
import styles from './Home.module.scss';
import file from '../../assets/docs/StepByStep.pdf';

function Home() {
  const [counter, setCounter] = useState(0);
  const [invite, setInvite] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter(c => c + 368240);
      setInvite(i => i + 214095);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container className={styles.container}>
      <div className={styles.named}>Общая информация</div>
      <div className={styles.rules}>
        <text>
          Данный сервис поможет вам правильно и быстро подать заявку на
          технологическое присоединение. С правилами заполнения заявки вы можете
          ознакомится, скачав данный
        </text>
        <a href={file} download>
          {' '}
          файл
        </a>{' '}
        <text>.</text>
      </div>
      <div className={styles.info}>
        <div className={styles.named2}>Основные показатели деятельности</div>
        <div className={styles.stringInfo}>
          <div className={styles.combine}>
            <AnimatedNumber
              className={styles.animation}
              value={counter}
              style={{ fontSize: 42 }}
              formatValue={n => n.toFixed(0)}
              frameStyle={percentage =>
                percentage > 0 && percentage < 15 ? { opacity: 0.2 } : {}
              }
              duration={1000}
            />
            <br />
            <text className={styles.opacityTxt}>подано заявок</text>
          </div>
          <div className={styles.combine}>
            <AnimatedNumber
              className={styles.animation}
              value={invite}
              style={{ fontSize: 42 }}
              formatValue={n => n.toFixed(0)}
              frameStyle={percentage =>
                percentage > 0 && percentage < 15 ? { opacity: 0.2 } : {}
              }
              duration={1000}
            />
            <br />
            <text className={styles.opacityTxt}>принято обращений</text>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
