import css from './Options.module.css';

const Options = ({ options, value, onTrack }) => {
  return (
    <div className={css.btns}>
      {options.map((option) => (
        <button
          key={option}
          value={clicks}
          onClick={onTrack}
          className={css.btn}
        >
          {option}: {value}
        </button>
      ))}
    </div>
  );
};

export default Options;
