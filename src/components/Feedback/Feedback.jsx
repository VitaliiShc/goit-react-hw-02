import css from './Feedback.module.css';

export default function Feedback({
  currentValues: { good, neutral, bad },
  totalFeedback,
  positiveRate,
}) {
  return (
    <div className={css.feedbackList}>
      <p className={css.feedbackItem}>good: {good}</p>
      <p className={css.feedbackItem}>
        neutral: {neutral}
      </p>
      <p className={css.feedbackItem}>bad: {bad}</p>
      <p className={css.feedbackItem}>total: {totalFeedback}</p>
      <p className={css.feedbackItem}>positive: {positiveRate}%</p>
    </div>
  );
}
