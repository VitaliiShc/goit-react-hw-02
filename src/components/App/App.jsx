import { useEffect, useState } from 'react';
// import css from './App.module.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

const stats = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function getInitialStats() {
  const savedStats = window.localStorage.getItem('stats');
  return savedStats !== null ? JSON.parse(savedStats) : { ...stats };
}

export default function App() {
  const [values, setValues] = useState(getInitialStats);

  useEffect(() => {
    window.localStorage.setItem('stats', JSON.stringify({ ...values }), [
      values,
    ]);
  });

  const updateFeedback = ({ feedbackType }) => {
    setValues({ ...values, [feedbackType]: values[feedbackType] + 1 });
  };

  const resetValues = () => {
    setValues({ ...stats });
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveRate =
    totalFeedback !== 0
      ? Math.round(((values.good + values.neutral) / totalFeedback) * 100)
      : 0;

  return (
    <>
      <Description />
      <Options
        options={stats}
        updateValue={updateFeedback}
        resetFeedbacks={resetValues}
        totalFeedback={totalFeedback}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          currentValues={{ ...values }}
          totalFeedback={totalFeedback}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
}
