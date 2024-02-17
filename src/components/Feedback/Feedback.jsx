import css from './Feedback.module.css';

export default function Feedback({
  currentValues: { good, neutral, bad },
  totalFeedback,
  positiveRate,
}) {
  return (
    <div className={css.feedbackList}>
      <p className={css.reedbackItem}>good: {good}</p>
      <p className={css.reedbackItem}>
        neutral: {neutral}
      </p>
      <p className={css.reedbackItem}>bad: {bad}</p>
      <p className={css.reedbackItem}>total: {totalFeedback}</p>
      <p className={css.reedbackItem}>positive: {positiveRate}%</p>
    </div>
  );
}
