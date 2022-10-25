import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Service.module.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Form1 from './Forms/Form1';
import Form2 from './Forms/Form2';
import Form3 from './Forms/Form3';

function Service() {
  return (
    <Container className={styles.container}>
      <div className={styles.named}>
        Заявка на технологическое присоединение
      </div>
      <Tabs>
        <TabList>
          <Tab>Шаг 1</Tab>
          <Tab>Шаг 2</Tab>
          <Tab>Шаг 3</Tab>
        </TabList>

        <TabPanel>
          <Form1 />
        </TabPanel>
        <TabPanel>
          <Form2 />
        </TabPanel>
        <TabPanel>
          <Form3 />
        </TabPanel>
      </Tabs>
    </Container>
  );
}

export default Service;
