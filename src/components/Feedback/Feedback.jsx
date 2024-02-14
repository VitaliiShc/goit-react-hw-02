import css from './Feedback.module.css';

const Feedback = ({ stats: { good, neutral, bad, total, positive }, }) => {
  return (
    <ul className={css.feedbackList}>
      <li className={css.reedbackItem}>good: {good}</li>
      <li className={css.reedbackItem}>
        neutral:
        {neutral}
      </li>
      <li className={css.reedbackItem}>bad: {bad}</li>
      <li className={css.reedbackItem}>total: {total}</li>
      <li className={css.reedbackItem}>positive: {positive}%</li>
    </ul>
  );
};

export default Feedback;
