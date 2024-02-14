import { useState } from 'react';

import './App.css';
import Descripton from './Description/Descripton';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';

const App = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
    // console.log('evt', evt);
  };

  const stats = {
    good: 1,
    neutral: 2,
    bad: 3,
    total: 4,
    positive: 5,
  };

  const options = ['good', 'neutral', 'bad'];

  // const updateFeedback = () => {};

  // const updGood = () => {setValues({ ...values, x: values.x + 1 });};
  // const updNeutral = () => {setValues({ ...values, x: values.x + 1 });};
  // const updBad = () => {setValues({ ...values, x: values.x + 1 });};

  return (
    <>
      <Descripton />
      <Options
        options={options}
        // updateFeedback={updateFeedback}
        value={clicks}
        onTrack={handleClick}
      />
      <Feedback stats={stats} />
    </>
  );
};

export default App;
