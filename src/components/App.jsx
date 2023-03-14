import React, { useState, useEffect } from 'react';
import { Wrap } from './App.styled';
import { Section } from './FeedbackContainer/FeedbackContainer';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = options => {
    switch (options) {
      case 'Good':
        setGood(good => good + 1);
        break;

      case 'Neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'Bad':
        setBad(bad => bad + 1);
        break;

      default:
        break;
    }
  };
  const options = ['Good', 'Neutral', 'Bad'];
  const total = good + neutral + bad;
  const positivePercentage = (good / total) * 100;

  return (
    <Wrap>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section>
        {total > 0
          ? ((Section.title = ''),
            (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              ></Statistics>
            ))
          : (Section.title = 'There is no feedback')}
      </Section>
    </Wrap>
  );
}
