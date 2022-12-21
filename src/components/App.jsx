import Section from './Section/Section';
import styles from './Section/section.module.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import { useState } from 'react';
export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stateInput = e => {
    const x = e.currentTarget.textContent.toLowerCase();
    switch (x) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  function countTotalFeedback() {
    return good + neutral + bad;
  }
  function countPositiveFeedbackPercentage() {
    return Math.round((good / countTotalFeedback()) * 100);
  }

  const totalAverage = countTotalFeedback();
  return (
    <div className={styles.form}>
      <Section className="section" title="Please, leave feedback">
        <FeedbackOptions
          options={['good', 'bad', 'neutral']}
          onLeaveFeedback={stateInput}
        />
      </Section>

      <Section className="section" title="Statistics">
        {!totalAverage ? (
          <Notification />
        ) : (
          <Section>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalAverage}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </Section>
    </div>
  );
}
