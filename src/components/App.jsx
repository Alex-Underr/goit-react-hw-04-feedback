import { Component } from 'react';
import React from 'react';
import Section from './Section/Section';
import styles from './Section/section.module.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateInput = e => {
    const x = e.currentTarget.textContent.toLowerCase();
    this.setState(prevState => ({ [x]: (prevState[x] += 1) }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }
  render() {
    return (
      <div className={styles.form}>
        <Section className="section" title="Please, leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.stateInput}
          />
        </Section>

        <Section className="section" title="Statistics">
          {!this.countTotalFeedback() > 0 ? (
            <Notification />
          ) : (
            <Section>
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            </Section>
          )}
        </Section>
      </div>
    );
  }
}
