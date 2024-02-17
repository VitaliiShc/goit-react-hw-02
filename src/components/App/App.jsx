import { useEffect, useState } from 'react';
// import css from './App.module.css';
import Descripton from '../Description/Descripton';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

export default function App() {
  
  const stats = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  function getInitialStats() {
    const savedStats = window.localStorage.getItem('stats');
    return savedStats !== null ? JSON.parse(savedStats) : { ...stats };
  }

  useEffect(() => {
    window.localStorage.setItem('stats', JSON.stringify({ ...values }));
  });

  const [values, setValues] = useState(getInitialStats);

  const updateFeedback = (key) => {
    setValues({ ...values, [key]: values[key] + 1 });
  };

  const resetValues = () => {
    setValues({ ...stats });
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveRate = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Descripton />
      <Options
        options={stats}
        updValueu={updateFeedback}
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
        <Notification />
      )}
    </>
  );
}
