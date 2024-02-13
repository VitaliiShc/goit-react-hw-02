import Button from '../Button/Button';
import css from './Options.module.css';

const Options = () => {
  return (
    <div className={css.btns}>
      <Button text="Good" />
      <Button text="Neutral" />
      <Button text="Bad" />
      {/* <Button text="Reset" /> */}
    </div>
  );
};

export default Options;
