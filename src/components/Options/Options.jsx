import css from './Options.module.css';

export default function Options({
  options,
  updValueu,
  resetFeedbacks,
  totalFeedback,
}) {
  const feedbackTypes = Object.keys(options);

  return (
    <div className={css.btns}>
      {feedbackTypes.map((feedbackType) => (
        <button
          type="button"
          key={feedbackType}
          onClick={() => updValueu(`${feedbackType}`)}
          className={css.btn}
        >
          {feedbackType}
        </button>
      ))}
      {totalFeedback !== 0 && (
        <button
          type="reset"
          key="reset"
          onClick={resetFeedbacks}
          className={css.btn}
        >
          reset
        </button>
      )}
    </div>
  );
}
